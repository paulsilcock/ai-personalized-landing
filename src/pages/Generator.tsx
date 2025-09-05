import React from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CtaAnchor } from "@/components/cta/CtaAnchor";
import { useUserId } from "@/hooks/use-user-id";
import { useIsMobile } from "@/hooks/use-mobile";
import { TryOnMySiteButton } from "@/components/TryOnMySiteButton";
import { WandSparkles } from "lucide-react";

const Generator: React.FC = () => {
  const userId = useUserId();
  const isMobile = useIsMobile();
  const title = "Landing Page Generator | newmode.ai";
  const description =
    "Choose a tailored demo: Brex, HubSpot, or Notion — see personalised landing pages in action.";

  const getBaseUrl = (url: string) => {
    const baseUrl = `${url}${userId ? `?nm_id=${userId}` : ``}`;
    if (!isMobile) {
      const separator = userId ? "&" : "?";
      return `${baseUrl}${separator}121=true`;
    }
    return baseUrl;
  };

  const links = {
    brex: getBaseUrl("https://dash.newmode.ai/demo/brex.com"),
    hubspot: getBaseUrl("https://dash.newmode.ai/demo/hubspot.com"),
    notion: getBaseUrl("https://dash.newmode.ai/demo/notion.com/enterprise"),
  } as const;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={title} description={description} />
      <Navbar />
      <main className="flex-grow">
        <header className="section-padding bg-gradient-to-br from-gray-50 to-white">
          <div className="max-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              1:1 Landing Page Personalisation Generator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pick a template to preview a personalised, account-aware landing
              page experience.
            </p>
          </div>
        </header>

        <section className="section-padding">
          <div className="max-container grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {/* HubSpot */}
            <article className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/lovable-uploads/hubspot-logo.svg"
                  alt="HubSpot logo for personalised landing page demo"
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
                <h2 className="text-xl font-semibold">HubSpot</h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Test how HubSpot website would appear with 1:1 personalisation
              </p>
              <CtaAnchor
                href={links.hubspot}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open HubSpot demo
              </CtaAnchor>
            </article>

            {/* Brex */}
            <article className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/lovable-uploads/42eb5ff2-f4b6-4a77-925e-bc9a2f4905dd.png"
                  alt="Brex logo for personalised landing page demo"
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
                <h2 className="text-xl font-semibold">Brex</h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Test how Brex website would appear with 1:1 personalisation
              </p>
              <CtaAnchor
                href={links.brex}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Brex demo
              </CtaAnchor>
            </article>

            {/* Notion */}
            <article className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/lovable-uploads/notion-logo.svg"
                  alt="Notion logo for personalised landing page demo"
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
                <h2 className="text-xl font-semibold">Notion</h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Test how Notion website would appear with 1:1 personalisation
              </p>
              <CtaAnchor
                href={links.notion}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Notion demo
              </CtaAnchor>
            </article>

            <article className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <WandSparkles className="size-6" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Your Website
                </h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Test how your website would appear with 1:1 personalisation
              </p>
              <TryOnMySiteButton />
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Generator;
