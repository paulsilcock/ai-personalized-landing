import React from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CtaAnchor } from "@/components/cta/CtaAnchor";
import { useUserId } from "@/hooks/use-user-id";

const Generator: React.FC = () => {
  const userId = useUserId();
  const title = "Landing Page Generator | newmode.ai";
  const description = "Choose a tailored demo: Brex, HubSpot, or Notion — see personalized landing pages in action.";

  const links = {
    brex: `https://dash.newmode.ai/demo/brex.com${userId ? `?nm_id=${userId}` : ``}`,
    hubspot: `https://dash.newmode.ai/demo/hubspot.com${userId ? `?nm_id=${userId}` : ``}`,
    notion: `https://dash.newmode.ai/demo/notion.com/enterprise${userId ? `?nm_id=${userId}` : ``}`,
  } as const;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={title} description={description} />
      <Navbar />
      <main className="flex-grow">
        <header className="section-padding bg-gradient-to-br from-gray-50 to-white">
          <div className="max-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">1:1 Landing Page Personalisation Generator</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pick a template to preview a personalized, account-aware landing page experience.
            </p>
          </div>
        </header>

        <section className="section-padding">
          <div className="max-container grid gap-6 md:grid-cols-3">
            {/* HubSpot */}
            <article className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/lovable-uploads/hubspot-logo.svg"
                  alt="HubSpot logo for personalized landing page demo"
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
                <h2 className="text-xl font-semibold">HubSpot</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Tailored for Salesforce switchers — clearer value and lower complexity friction.
              </p>
              <CtaAnchor href={links.hubspot} variant="primary" target="_blank" rel="noopener noreferrer">
                Open HubSpot demo
              </CtaAnchor>
            </article>

            {/* Brex */}
            <article className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/lovable-uploads/42eb5ff2-f4b6-4a77-925e-bc9a2f4905dd.png"
                  alt="Brex logo for personalized landing page demo"
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
                <h2 className="text-xl font-semibold">Brex</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Finance-team messaging that recognizes intent and reduces conversion friction.
              </p>
              <CtaAnchor href={links.brex} variant="primary" target="_blank" rel="noopener noreferrer">
                Open Brex demo
              </CtaAnchor>
            </article>

            {/* Notion */}
            <article className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/lovable-uploads/notion-logo.svg"
                  alt="Notion logo for personalized landing page demo"
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
                <h2 className="text-xl font-semibold">Notion</h2>
              </div>
              <p className="text-gray-600 mb-6">
                SharePoint-migration path with unified search and enterprise-ready onboarding.
              </p>
              <CtaAnchor href={links.notion} variant="primary" target="_blank" rel="noopener noreferrer">
                Open Notion demo
              </CtaAnchor>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Generator;
