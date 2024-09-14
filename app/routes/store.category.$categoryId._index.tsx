import type { LoaderFunctionArgs } from "@remix-run/node";

import { redirect } from "@remix-run/node";

import { apiUrl } from "~/utils/dhrepair-api";
import invariant from "tiny-invariant";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.categoryId, "Missing categoryId parameter");

  const res = await fetch(
    apiUrl({ endpoint: `store/category/${params.categoryId}` }),
  );
  const jsonData = await res.json();

  return redirect(
    `/store/category/${params.categoryId}/${jsonData.category.slug}/`,
  );
};
