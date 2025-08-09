import React from "react";
import SEO from "@/components/SEO";
import { CtaAnchor } from "@/components/cta/CtaAnchor";

const HubSpotCase: React.FC = () => {
  const title = "HubSpot Personalization Case Study | Newmode";
  const description = "How personalized messaging turns Salesforce-switchers into engaged HubSpot prospects.";

  return (
    <>
      <SEO title={title} description={description} />
      <header className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="max-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">HubSpot Personalization Case Study</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A practical walkthrough showing how intent-aware messaging outperforms generic positioning when visitors search for a Salesforce alternative.
          </p>
        </div>
      </header>

      <main>
        <section className="section-padding bg-background">
          <article className="max-container grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl font-semibold mb-3">The Setup</h2>
              <p className="text-muted-foreground">
                You’re a marketing manager at a mid-sized company. Salesforce feels too expensive and too complex. You Google “Salesforce alternative” and land on HubSpot.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">The First Experience — Generic</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Headline: “Where go-to-market teams go to grow”</li>
                <li>Subheading about delivering results fast</li>
                <li>Standard value props about uniting marketing, sales, and service on an AI-powered platform</li>
              </ul>
            </div>
          </article>
        </section>

        <section className="section-padding bg-muted/30">
          <article className="max-container grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl font-semibold mb-3">Why It Misses</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li><strong>Relevance vs. intent gap:</strong> It doesn’t address the Salesforce-alternative search.</li>
                <li><strong>Benefits vs. problems mismatch:</strong> “Delivers results fast” ignores the core pain: cost and complexity.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">The Personalized Version</h2>
              <div className="rounded-lg border p-5 bg-background">
                <p className="font-semibold">Headline:</p>
                <p className="text-muted-foreground mb-3">“Where Salesforce users find a better way to grow”</p>
                <p className="font-semibold">Subheading:</p>
                <p className="text-muted-foreground">“Switch to a truly unified, easy-to-use CRM platform that connects marketing, sales, and service teams without the complexity of Salesforce.”</p>
              </div>
            </div>
          </article>
        </section>

        <section className="section-padding bg-background">
          <article className="max-container grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl font-semibold mb-3">Why It Works</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li><strong>Direct problem recognition:</strong> Speaks to Salesforce users specifically.</li>
                <li><strong>Pain acknowledgment:</strong> Calls out complexity and suggests an easier path.</li>
              </ul>
            </div>
            <aside>
              <div className="rounded-lg border p-6 bg-muted/20">
                <h3 className="font-semibold mb-2">Try it live</h3>
                <p className="text-muted-foreground mb-4">See a live, interactive demo of how this messaging feels in context.</p>
                <CtaAnchor href="/demo/hubspot.com" variant="primary">View HubSpot demo</CtaAnchor>
              </div>
            </aside>
          </article>
        </section>
      </main>
    </>
  );
};

export default HubSpotCase;
