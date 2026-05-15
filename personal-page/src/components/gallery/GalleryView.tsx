"use client";

import { Media, MasonryGrid } from "@once-ui-system/core";
import { getDictionary } from "@/resources/dictionaries";
import { getContent } from "@/resources";
import { useParams } from "next/navigation";

export default function GalleryView() {
  const params = useParams();
  const locale = (params?.locale as string) || "es";
  const dict = getDictionary(locale);
  const { gallery } = getContent(dict);

  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {gallery.images.map((image, index) => (
        <Media
          enlarge
          priority={index < 10}
          sizes="(max-width: 560px) 100vw, 50vw"
          key={index}
          radius="m"
          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </MasonryGrid>
  );
}
