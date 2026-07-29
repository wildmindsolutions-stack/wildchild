import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  size?: "nav" | "footer";
  className?: string;
  linked?: boolean;
};

export default function BrandLogo({
  size = "nav",
  className = "",
  linked = true
}: BrandLogoProps) {
  const isFooter = size === "footer";

  // Footer keeps the navbar "W" mark but greys the wordmark for the olive background
  const src = isFooter ? "/images/logo-footer.png" : "/images/logo-light.png";
  const dims = isFooter
    ? { width: 260, height: 66, className: "h-12 w-auto sm:h-14" }
    : { width: 220, height: 56, className: "h-11 w-auto sm:h-12" };

  const image = (
    <Image
      src={src}
      alt="WildChild Studios"
      width={dims.width}
      height={dims.height}
      className={`${dims.className} object-contain object-left ${className}`}
      priority={!isFooter}
    />
  );

  if (!linked) return image;

  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="WildChild Studios home">
      {image}
    </Link>
  );
}
