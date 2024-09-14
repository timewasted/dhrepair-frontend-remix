import type { MetaFunction } from "@remix-run/node";

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Category } from "~/components/category";
import { apiUrl } from "~/utils/dhrepair-api";

export const loader = async () => {
  const res = await fetch(apiUrl({ endpoint: "store/categories" }));
  return json(await res.json());
};

export const meta: MetaFunction = () => [{ title: "Category listings" }];

export default function CategoryListPage() {
  const categoryResponse = useLoaderData<typeof loader>();
  return (
    <Category
      categoryList={categoryResponse.children.categories}
      itemList={categoryResponse.children.items}
    />
  );
}
