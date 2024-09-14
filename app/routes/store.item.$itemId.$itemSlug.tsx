import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";

import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Item } from "~/components/item";
import { apiUrl } from "~/utils/dhrepair-api";
import invariant from "tiny-invariant";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.itemId, "Missing itemId parameter");
  invariant(params.itemSlug, "Missing itemSlug parameter");

  const res = await fetch(apiUrl({ endpoint: `store/item/${params.itemId}` }));
  const jsonData = await res.json();
  if (params.itemSlug !== jsonData.item.slug) {
    return redirect(`/store/item/${params.itemId}/${jsonData.item.slug}/`);
  }

  return json(jsonData);
};

export const meta: MetaFunction<typeof loader> = ({ data: itemResponse }) => [
  {
    title: itemResponse.item.name,
  },
];

export default function ItemPage() {
  const itemResponse = useLoaderData<typeof loader>();
  return (
    <Item
      item={itemResponse.item}
      categoryRootPaths={itemResponse.categoryRootPaths}
    />
  );
}
