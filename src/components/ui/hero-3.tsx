import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  backgroundTitle?: string;
  description: string;
  images: { src: string; alt: string }[];
  className?: string;
}

const FADE_IN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  backgroundTitle,
  description,
  images,
  className,
}) => {
  const duplicatedImages = [...images, ...images];

  return (
    <section
      className={cn(
        "relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4 text-center",
        className,
      )}
      aria-label="Hero"
    >
      <div className="z-10 mb-28 flex flex-col items-center md:mb-36">
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-4 inline-block rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm"
        >
          {tagline}
        </motion.div>

        <div className="relative flex items-center justify-center px-2">
          {backgroundTitle && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 w-max max-w-[95vw] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-serif text-[clamp(2.5rem,11vw,9rem)] font-bold leading-none tracking-tighter text-foreground/[0.07]"
            >
              {backgroundTitle}
            </span>
          )}

          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="relative text-5xl font-bold tracking-tighter text-foreground md:text-7xl"
          >
            {typeof title === "string"
              ? title.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    variants={FADE_IN_ANIMATION_VARIANTS}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))
              : title}
          </motion.h1>
        </div>

        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          {description}
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 h-1/3 w-full pt-10 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] md:h-2/5 md:pt-14">
        <motion.div
          className="flex gap-4"
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-48 flex-shrink-0 md:h-64"
              style={{ rotate: `${index % 2 === 0 ? -2 : 5}deg` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
