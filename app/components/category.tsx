import type { Category } from "~/models/category";
import type { Item } from "~/models/item";

import { CategoryListCategory } from "~/components/category-list-category";
import { CategoryListItem } from "~/components/category-list-item";

export function Category({
  categoryList,
  itemList,
}: {
  categoryList: Category[];
  itemList: Item[];
}) {
  return (
    <div>
      {categoryList.length !== 0 && (
        <ul>
          {categoryList.map((category) => (
            <CategoryListCategory key={category.id} category={category} />
          ))}
        </ul>
      )}

      {itemList.length !== 0 && (
        <ul className="divide-y">
          {itemList.map((item) => (
            <CategoryListItem
              key={item.id}
              item={item}
              listContainsImages={
                itemList.find((item) => item.images.length > 0) !== undefined
              }
            />
          ))}
        </ul>
      )}
    </div>
  );
}
