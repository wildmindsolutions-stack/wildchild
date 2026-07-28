import Icon from "./Icon";

export const techIconMap: Record<string, string> = {
  "3d-projection-mapping": "cube",
  "virtual-reality": "eye",
  "augmented-reality": "layers",
  "lidar-scanning": "scan",
  "motion-capture": "motion",
  "interactive-projection-mapping": "grid",
  "3d-stereoscopic-film": "film",
  "holographic-projection": "hologram",
  "touch-kiosk": "touch"
};

export default function TechIcon({ slug, className }: { slug: string; className?: string }) {
  return <Icon name={techIconMap[slug] ?? "cube"} className={className} />;
}
