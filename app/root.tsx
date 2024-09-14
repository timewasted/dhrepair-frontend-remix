import { json } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { SiteHeader } from "~/components/site-header";
import { RootContext } from "~/context/root-context";

import "~/tailwind.css";

export async function loader() {
  return json({
    CONTEXT: {
      IMAGE_ENDPOINT: process.env.IMAGE_ENDPOINT ?? "",
    },
    ENV: {},
  });
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="antialiased text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800">
        <RootContext.Provider
          value={{
            IMAGE_ENDPOINT: data.CONTEXT.IMAGE_ENDPOINT,
          }}
        >
          <SiteHeader />
          <section id={"mainContent"} className="max-w-screen-lg mx-auto my-2">
            {children}
          </section>
        </RootContext.Provider>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
