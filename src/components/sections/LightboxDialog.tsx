import type { GalleryImage } from "@/types/content";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface LightboxDialogProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export function LightboxDialog({ image, onClose }: LightboxDialogProps) {
  return (
    <Dialog open={!!image} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none sm:max-w-5xl">
        {image && (
          <>
            <DialogTitle className="sr-only">{image.caption}</DialogTitle>
            <DialogDescription className="sr-only">{image.alt}</DialogDescription>
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[80vh] w-full rounded-xl object-contain"
            />
            <p className="rounded-lg bg-card/90 px-4 py-3 text-center text-sm text-foreground backdrop-blur-sm">
              {image.caption}
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
