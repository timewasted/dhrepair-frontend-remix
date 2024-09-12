import { json } from "@remix-run/node";
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration, useLoaderData,
} from "@remix-run/react";
import "./tailwind.css";
import { Navbar } from "~/components/navbar";
import { RootContext } from "~/context/root-context";

export async function loader() {
    return json({
        CONTEXT: {
            PRODUCT_IMAGE_ENDPOINT: process.env.PRODUCT_IMAGE_ENDPOINT ?? '',
            PRODUCT_THUMB_ENDPOINT: `${process.env.PRODUCT_IMAGE_ENDPOINT}/thumbnails`,
        },
        ENV: {},
    });
}

export function Layout({ children }: { children: React.ReactNode }) {
    const data = useLoaderData<typeof loader>();

    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body className="antialiased text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800">
            <RootContext.Provider value={{
                IMAGE_ENDPOINT_FULL: data.CONTEXT.PRODUCT_IMAGE_ENDPOINT,
                IMAGE_ENDPOINT_THUMB: data.CONTEXT.PRODUCT_THUMB_ENDPOINT,
            }}>
                <Navbar links={[
                    { to: "/", label: "Home" },
                    { to: "/store/categories", label: "Categories" },
                    { to: "/store/category/2588", label: "Rewaco" },
                    { to: "/contact", label: "Contact" },
                ]} />
                <section id={"mainContent"} className="max-w-screen-lg mx-auto my-2">
                    {children}
                </section>
            </RootContext.Provider>
            <script dangerouslySetInnerHTML={{
                __html: `window.ENV = ${JSON.stringify(data.ENV)}`
            }} />
            <ScrollRestoration/>
            <Scripts/>
        </body>
        </html>
    );
}

export default function App() {
    return <Outlet/>;
}
