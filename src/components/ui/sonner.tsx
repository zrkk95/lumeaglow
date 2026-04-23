import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border group-[.toaster]:border-border group-[.toaster]:shadow-xl group-[.toaster]:rounded-xl group-[.toaster]:p-4 group-[.toaster]:pr-10 group-[.toaster]:gap-3 group-[.toaster]:items-start group-[.toaster]:w-[360px] group-[.toaster]:max-w-[calc(100vw-2rem)]",
          title: "group-[.toast]:text-sm group-[.toast]:font-semibold group-[.toast]:leading-tight",
          description: "group-[.toast]:text-muted-foreground group-[.toast]:text-sm group-[.toast]:leading-snug group-[.toast]:mt-0.5",
          icon: "group-[.toast]:text-primary group-[.toast]:mt-0.5",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          closeButton:
            "group-[.toast]:!left-auto group-[.toast]:!right-2 group-[.toast]:!top-2 group-[.toast]:!translate-x-0 group-[.toast]:!translate-y-0 group-[.toast]:!bg-transparent group-[.toast]:!border-0 group-[.toast]:!text-muted-foreground hover:group-[.toast]:!text-foreground group-[.toast]:!w-6 group-[.toast]:!h-6",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
