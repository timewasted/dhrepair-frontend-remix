import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";

import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Category } from "~/components/category";
import { apiUrl } from "~/utils/dhrepair-api";
import invariant from "tiny-invariant";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.categoryId, "Missing categoryId parameter");
  invariant(params.categorySlug, "Missing categorySlug parameter");

  const res = await fetch(
    apiUrl({ endpoint: `store/category/${params.categoryId}` }),
  );
  const jsonData = await res.json();
  if (params.categorySlug !== jsonData.category.slug) {
    return redirect(
      `/store/category/${params.categoryId}/${jsonData.category.slug}/`,
    );
  }

  return json(jsonData);
};

export const meta: MetaFunction<typeof loader> = ({
  data: categoryResponse,
}) => [
  {
    title: categoryResponse.category.name,
  },
];

export default function CategoryPage() {
  const categoryResponse = useLoaderData<typeof loader>();
  return (
    <Category
      categoryList={categoryResponse.children.categories}
      itemList={categoryResponse.children.items}
    />
  );
}
