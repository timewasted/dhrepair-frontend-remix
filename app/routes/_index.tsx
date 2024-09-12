import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { apiUrl } from "~/utils/dhrepair-api";

export const loader = async() => {
    const res = await fetch(apiUrl({ endpoint: "content/index" }));

    return json(await res.json());
};

export const meta: MetaFunction = () => {
    return [
        { title: "Doghouse Repair" },
    ];
};

export default function Index() {
    const contentResponse = useLoaderData<typeof loader>();
    return (
        <div dangerouslySetInnerHTML={{ __html: contentResponse.content}} />
    );
}
