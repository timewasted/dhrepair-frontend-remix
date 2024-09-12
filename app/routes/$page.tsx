import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { apiUrl } from "~/utils/dhrepair-api";
import invariant from "tiny-invariant";

export const loader = async ({
    params,
}: LoaderFunctionArgs) => {
    invariant(params.page, "Missing page parameter");

    const res = await fetch(apiUrl({ endpoint: `content/${params.page}` }));

    return json(await res.json());
};

export const meta: MetaFunction<typeof loader> = ({ data: contentResponse }) => [
    {
        title: contentResponse.title || "Doghouse Repair",
    },
];

export default function Content() {
    const contentResponse = useLoaderData<typeof loader>();
    return (
        <div dangerouslySetInnerHTML={{ __html: contentResponse.content}} />
    );
}
