import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { apiUrl } from "~/utils/dhrepair-api";
import invariant from "tiny-invariant";

export const loader = async ({
    params,
}: LoaderFunctionArgs) => {
    invariant(params.itemId, "Missing itemId parameter");

    const res = await fetch(apiUrl({ endpoint: `store/item/${params.itemId}` }));
    const jsonData = await res.json();

    return redirect(`/store/item/${params.itemId}/${jsonData.item.slug}/`);
};
