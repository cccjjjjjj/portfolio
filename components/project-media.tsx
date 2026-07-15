import Image from "next/image";
import { getProjectMedia } from "@/lib/project-media";

export function ProjectMedia({ slug, gallery = false }: { slug: string; gallery?: boolean }) {
  const media = getProjectMedia(slug);
  if (!media.length) return null;
  return (
    <div className={`project-media project-media--${slug} ${gallery ? "project-media--gallery" : ""}`}>
      {media.slice(0, gallery ? 3 : slug === "grace" ? 3 : 1).map((item, index) => (
        <figure key={item.src} className={`project-media-item project-media-item--${index + 1}`}>
          <Image src={item.src} alt={item.alt} fill sizes={slug === "grace" ? "(max-width: 700px) 70vw, 28vw" : "(max-width: 900px) 100vw, 80vw"} />
        </figure>
      ))}
    </div>
  );
}
