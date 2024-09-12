import type { Image } from "~/models/image";
import { useProductImageContext, useProductThumbContext } from "~/context/root-context";

export function ItemImage({
    image,
    altTitle = null,
}: {
    image: Image;
    altTitle: string|null;
}) {
    const productImageEndpoint = useProductImageContext();
    const productThumbEndpoint = useProductThumbContext();

    return (
        image.thumbWidth !== null && image.thumbHeight ? (
            <a href={`${productImageEndpoint}/${image.image}`}>
                <img
                    className="ring-2 dark:ring-slate-400"
                    src={`${productImageEndpoint}/${image.image}`}
                    alt={image.title || altTitle || undefined}
                    width={image.thumbWidth}
                    height={image.thumbHeight}
                />
            </a>
        ) : (
            <img
                className="ring-2 dark:ring-slate-400"
                src={`${productThumbEndpoint}/${image.image}`}
                alt={image.title || altTitle || undefined}
                key={image.id}
            />
        )
    );
}
