/**
 * Configuration Shopify Storefront API
 * 
 * INSTRUCTIONS POUR L'INTÉGRATION SHOPIFY :
 * 
 * 1. Créez une application Shopify Storefront dans votre admin Shopify
 * 2. Récupérez votre Storefront Access Token
 * 3. Ajoutez les variables d'environnement suivantes :
 *    - VITE_SHOPIFY_STORE_DOMAIN : votre-boutique.myshopify.com
 *    - VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN : votre_token_storefront
 * 
 * Pour le développement, vous pouvez créer un fichier .env.local
 */

// Variables d'environnement Shopify
const SHOPIFY_STORE_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || '';
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '';

// URL de l'API Storefront
const SHOPIFY_STOREFRONT_URL = SHOPIFY_STORE_DOMAIN 
  ? `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`
  : '';

// Vérification de la configuration
export const isShopifyConfigured = () => {
  return Boolean(SHOPIFY_STORE_DOMAIN && SHOPIFY_STOREFRONT_ACCESS_TOKEN);
};

// Fonction générique pour les requêtes GraphQL Shopify
async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!isShopifyConfigured()) {
    throw new Error('Shopify n\'est pas configuré. Veuillez ajouter les variables d\'environnement.');
  }

  const response = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Erreur Shopify: ${response.status}`);
  }

  const json = await response.json();

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }

  return json.data;
}

// Types Shopify
export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  availableForSale: boolean;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string | null;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        availableForSale: boolean;
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }>;
  };
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  lines: {
    edges: Array<{
      node: {
        id: string;
        quantity: number;
        merchandise: {
          id: string;
          title: string;
          product: {
            title: string;
          };
          price: {
            amount: string;
          };
        };
      };
    }>;
  };
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
}

// Récupérer un produit par son handle
export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const query = `
    query getProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        handle
        description
        descriptionHtml
        availableForSale
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 5) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              availableForSale
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await shopifyFetch<{ productByHandle: ShopifyProduct | null }>(query, { handle });
    return data.productByHandle;
  } catch (error) {
    console.error('Erreur lors de la récupération du produit:', error);
    return null;
  }
}

// Créer un panier Shopify
export async function createCart(lines: Array<{ merchandiseId: string; quantity: number }>): Promise<ShopifyCart | null> {
  const query = `
    mutation createCart($lines: [CartLineInput!]!) {
      cartCreate(input: { lines: $lines }) {
        cart {
          id
          checkoutUrl
          lines(first: 10) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    product {
                      title
                    }
                    price {
                      amount
                    }
                  }
                }
              }
            }
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  try {
    const data = await shopifyFetch<{ cartCreate: { cart: ShopifyCart | null } }>(query, { lines });
    return data.cartCreate.cart;
  } catch (error) {
    console.error('Erreur lors de la création du panier:', error);
    return null;
  }
}

// Créer un checkout et rediriger
export async function createCheckoutAndRedirect(lines: Array<{ merchandiseId: string; quantity: number }>): Promise<void> {
  const cart = await createCart(lines);
  
  if (cart?.checkoutUrl) {
    window.location.href = cart.checkoutUrl;
  } else {
    throw new Error('Impossible de créer le checkout');
  }
}

// Données produit par défaut (fallback quand Shopify n'est pas configuré)
export const DEFAULT_PRODUCT = {
  id: 'lampe-meduse-aquaglow',
  variantId: 'lampe-meduse-aquaglow-default',
  title: 'Lampe Méduse AquaGlow',
  price: 30,
  description: 'Lampe LED à couleurs changeantes RGB',
  image: '/placeholder.svg',
  available: true,
};
