import type { Image } from "~/models/image";
import type { Item } from "~/models/item";

import { ItemImage } from "~/components/item-image";

export function ImageList({
  images,
  item = null,
}: {
  images: Image[];
  item: Item | null;
}) {
  if (images.length === 0) {
    return null;
  }
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      {images.map((image) => (
        <ItemImage
          key={image.id}
          image={image}
          altTitle={item !== null ? `Image for ${item.sku}` : null}
        />
      ))}
    </div>
  );
}
