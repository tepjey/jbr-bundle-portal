import { useState } from "react";

type BranchImageProps = {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
};

export function BranchImage({ src, fallback, alt, className }: BranchImageProps) {
  const [current, setCurrent] = useState(src);

  return (
    <img
      src={current}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
      className={className}
    />
  );
}