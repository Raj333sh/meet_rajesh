import { useEffect, useRef, useState } from "react";

/**
 * Renders nothing but a lightweight placeholder box until the photo
 * scrolls near the viewport, then mounts the real <picture>/<img>.
 *
 * This keeps 25 full-resolution travel photos from ever being
 * requested (or decoded) together — each one only starts loading
 * once it's actually about to be seen, so the Travel section can't
 * starve the rest of the site of bandwidth or main-thread time.
 */
const TravelPhoto = ({ photo, className }) => {
  const [isNear, setIsNear] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // Already-supported browsers get true native content-visibility
    // skipping below; this observer is what actually defers the
    // network request itself.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ contentVisibility: "auto", containIntrinsicSize: "220px" }}
    >
      {isNear ? (
        <picture>
          <source
            srcSet={photo.src.replace(/\.(jpg|jpeg)$/i, ".avif")}
            type="image/avif"
          />

          <source
            srcSet={photo.src.replace(/\.(jpg|jpeg)$/i, ".webp")}
            type="image/webp"
          />

          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            width="400"
            height="350"
            onLoad={() => setIsLoaded(true)}
            className="
              h-full
              w-full
              object-cover
              opacity-80
              grayscale-[15%]
              transition
              duration-500
              group-hover:scale-110
              group-hover:opacity-100
              group-hover:grayscale-0
            "
            style={{
              opacity: isLoaded ? undefined : 0,
            }}
          />
        </picture>
      ) : (
        <div className="h-full w-full animate-pulse bg-white/[0.04]" />
      )}
    </div>
  );
};

export default TravelPhoto;
