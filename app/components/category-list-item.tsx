import type { Item } from "~/models/item";

import { Link } from "@remix-run/react";

import {
  useProductImageContext,
  useProductThumbContext,
} from "~/context/root-context";

export function CategoryListItem({
  item,
  listContainsImages,
}: {
  item: Item;
  listContainsImages: boolean;
}) {
  const productImageEndpoint = useProductImageContext();
  const productThumbEndpoint = useProductThumbContext();

  return (
    <li className="flex py-1">
      {listContainsImages && (
        <div
          className={
            "w-28 h-28 flex-shrink-0 overflow-hidden" +
            (item.images.length > 0 ? " rounded-md border border-gray-200" : "")
          }
        >
          {item.images.length > 0 && (
            <div className="w-28 h-28 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <Link to={`/store/item/${item.id}/${item.slug}`}>
                <img
                  className="w-full h-full object-cover object-center"
                  src={
                    item.images[0].thumbWidth !== null &&
                    item.images[0].thumbHeight !== null
                      ? `${productImageEndpoint}/${item.images[0].image}`
                      : `${productThumbEndpoint}/${item.images[0].image}`
                  }
                  alt={item.images[0].title ?? `Image for item ${item.sku}`}
                />
              </Link>
            </div>
          )}
        </div>
      )}
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <h3 className="font-semibold">
            <Link to={`/store/item/${item.id}/${item.slug}`}>{item.name}</Link>
          </h3>
          <p className="mt-2 text-sm">
            Part number:{" "}
            <Link to={`/store/item/${item.id}/${item.slug}`}>{item.sku}</Link>
          </p>
        </div>
      </div>
    </li>
  );
}
