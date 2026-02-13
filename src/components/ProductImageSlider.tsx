import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ZoomIn, Play } from 'lucide-react';

interface CarouselImage {
  src: string;
  alt: string;
  type: 'image' | 'video';
}

interface Props {
  carouselImages: CarouselImage[];
  selectedImage: number;
  setSelectedImage: (index: number) => void;
}

const ProductImageSlider = ({ carouselImages, selectedImage, setSelectedImage }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedImage(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedImage]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  // Sync embla when thumbnail is clicked
  useEffect(() => {
    if (!emblaApi) return;
    if (emblaApi.selectedScrollSnap() !== selectedImage) {
      emblaApi.scrollTo(selectedImage);
    }
  }, [emblaApi, selectedImage]);

  return (
    <div className="w-full space-y-3 lg:space-y-4">
      {/* Main Image Slider */}
      <div className="w-full h-[340px] sm:h-[400px] lg:aspect-square lg:h-auto bg-secondary/30 rounded-2xl lg:rounded-3xl overflow-hidden relative">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {carouselImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full h-full min-w-0 relative group">
                {image.type === 'video' ? (
                  <video
                    className="w-full h-full object-contain"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={image.src} type="video/mp4" />
                  </video>
                ) : (
                  <>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain lg:object-cover"
                      draggable={false}
                    />
                    <button
                      className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Zoom"
                    >
                      <ZoomIn className="w-5 h-5 text-foreground" />
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-2">
        {carouselImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg lg:rounded-xl overflow-hidden border-2 transition-all ${
              selectedImage === index
                ? 'border-primary ring-2 ring-primary/20'
                : 'border-transparent hover:border-border'
            }`}
          >
            {image.type === 'video' ? (
              <div className="w-full h-full bg-foreground/10 flex items-center justify-center">
                <Play className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
              </div>
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;
