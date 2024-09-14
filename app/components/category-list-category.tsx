import type { Category } from "~/models/category";

import { Link } from "@remix-run/react";

export function CategoryListCategory({ category }: { category: Category }) {
  return (
    <li>
      <Link to={`/store/category/${category.id}/${category.slug}/`}>
        {category.name}
      </Link>
    </li>
  );
}
