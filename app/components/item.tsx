import type { Category } from "~/models/category";
import type { Item } from "~/models/item";

import { Breadcrumbs } from "~/components/breadcrumbs";
import { ImageList } from "~/components/image-list";
import { formatMoney } from "~/utils/format-money";

export function Item({
  item,
  categoryRootPaths,
}: {
  item: Item;
  categoryRootPaths: Category[][];
}) {
  return (
    <div>
      {categoryRootPaths.map((path, index) => (
        <Breadcrumbs
          key={index}
          links={path
            .map((category) => ({
              to: `/store/category/${category.id}/${category.slug}`,
              label: `${category.name}`,
              home: false,
            }))
            .reverse()}
        />
      ))}
      <ImageList images={item.images} item={item} />

      <div className="mt-6 border-t border-b border-gray-500">
        <dl className="divide-y divide-gray-500">
          <div className="flex flex-wrap px-4 py-4">
            <dt className="font-semibold w-7/12 px-0 md:w-1/5">Name</dt>
            <dd className="w-full px-2 md:w-4/5">{item.name}</dd>
          </div>
          <div className="flex flex-wrap px-4 py-4">
            <dt className="font-semibold w-7/12 px-0 md:w-1/5">Part number</dt>
            <dd className="w-full px-2 md:w-4/5">{item.sku}</dd>
          </div>
          <div className="flex flex-wrap px-4 py-4">
            <dt className="font-semibold w-7/12 px-0 md:w-1/5">Your cost</dt>
            <dd className="w-full px-2 md:w-4/5">
              {formatMoney({ cents: item.cost })}
            </dd>
          </div>
          <div className="flex flex-wrap px-4 py-4">
            <dt className="font-semibold w-7/12 px-0 md:w-1/5">Description</dt>
            <dd
              className="w-full px-2 md:w-4/5"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
          {item.isPurchasable && (
            <div className="flex flex-wrap px-4 py-4">
              <dt className="font-semibold w-7/12 px-0 md:w-1/5">
                Availability
              </dt>
              <dd className="w-full px-2 md:w-4/5">{item.availability}</dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
}
