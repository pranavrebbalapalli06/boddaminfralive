import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "../components/site/SiteNav";
import { SiteFooter } from "../components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl">404</h1>
        <p className="mt-4 text-muted-foreground">This page is still on the drawing board.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center gap-2 bg-foreground px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase text-background">
            Back to index
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Something gave way.</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try reloading. Our engineers have been notified.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-foreground px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase text-background"
          >
            Try again
          </button>
          <a href="/" className="border border-border px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Boddam Infra — Engineering the structures that move nations" },
      { name: "description", content: "Boddam Infra designs, engineers and delivers bridges, energy, water and transit infrastructure. A specialist practice for clients who measure success in decades." },
      { name: "author", content: "Boddam Infrastructure" },
      { name: "theme-color", content: "#0f0d0a" },
      { property: "og:site_name", content: "Boddam Infra" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Boddam Infra — Engineering the structures that move nations" },
      { property: "og:description", content: "A specialist infrastructure practice delivering bridges, energy, water and transit programs across three continents." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@BoddamInfra" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <SiteNav />
      <main key={pathname} className="min-h-screen pt-20">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
