import React from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CtaAnchor } from "@/components/cta/CtaAnchor";
import { GetStartedButton } from "@/components/cta/GetStartedButton";

const HubSpotCase: React.FC = () => {
  const title = "HubSpot Personalization Case Study | Newmode";
  const description = "How personalized messaging turns Salesforce-switchers into engaged HubSpot prospects.";

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={title} description={description} />
      <Navbar />
      <main className="flex-grow">
        <header className="section-padding bg-gradient-to-b from-background to-muted/30">
          <div className="max-container">
            <p className="uppercase tracking-wide text-xs text-muted-foreground mb-2">Case Study · HubSpot</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Turn “Salesforce alternative” intent into instant relevance</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              See how a personalized version of HubSpot’s page speaks directly to switchers’ pains—cost and complexity—and keeps them engaged.
            </p>
          </div>
        </header>

        <section className="section-padding bg-background">
          <div className="max-container grid md:grid-cols-2 gap-8 items-start">
            <article className="rounded-lg border p-6 bg-muted/10">
              <h2 className="text-base font-semibold mb-2">Before: Generic page</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>“Where go-to-market teams go to grow”</li>
                <li>Broad “deliver results fast” promise</li>
                <li>Value props that miss the searcher’s real task: replacing Salesforce</li>
              </ul>
            </article>
            <article className="rounded-lg border p-6 bg-background">
              <h2 className="text-base font-semibold mb-2">After: Personalized for switchers</h2>
              <div className="space-y-3 text-muted-foreground">
                <p><span className="font-semibold">Headline:</span> “Where Salesforce users find a better way to grow”</p>
                <p><span className="font-semibold">Subheading:</span> “Switch to a truly unified, easy-to-use CRM—without the complexity of Salesforce.”</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="max-container grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border p-5 bg-background">
              <p className="text-sm text-muted-foreground">Intent match</p>
              <p className="text-2xl font-bold">+180%</p>
              <p className="text-sm text-muted-foreground">higher meeting rate</p>
            </div>
            <div className="rounded-lg border p-5 bg-background">
              <p className="text-sm text-muted-foreground">Message clarity</p>
              <p className="text-2xl font-bold">Immediate</p>
              <p className="text-sm text-muted-foreground">problem recognition</p>
            </div>
            <div className="rounded-lg border p-5 bg-background">
              <p className="text-sm text-muted-foreground">Friction</p>
              <p className="text-2xl font-bold">Lower</p>
              <p className="text-sm text-muted-foreground">than generic pages</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-container grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-xl font-semibold mb-3">Why this works</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li><strong>Intent-aligned:</strong> Speaks to “Salesforce alternative” directly.</li>
                <li><strong>Problem-first:</strong> Names cost and complexity up front.</li>
                <li><strong>Social proof implied:</strong> “Salesforce users like HubSpot more.”</li>
              </ul>
            </div>
            <aside>
              <div className="rounded-lg border p-6 bg-muted/20">
                <h3 className="font-semibold mb-2">Try it live</h3>
                <p className="text-muted-foreground mb-4">Experience the personalized flow on a real page.</p>
                <div className="flex gap-3">
                  <CtaAnchor href="/demo/hubspot.com" variant="primary">View HubSpot demo</CtaAnchor>
                  <GetStartedButton size="sm" variant="secondary" />
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="max-container">
            <h2 className="text-xl font-semibold mb-4">Related case studies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a className="rounded-lg border p-6 bg-background hover:bg-muted/10 transition" href="/case/brex">
                <p className="text-sm text-muted-foreground">Brex</p>
                <p className="text-lg font-semibold">Account-aware pages that drive pipeline</p>
              </a>
              <a className="rounded-lg border p-6 bg-background hover:bg-muted/10 transition" href="/case/notion">
                <p className="text-sm text-muted-foreground">Notion</p>
                <p className="text-lg font-semibold">Enterprise intent → higher conversions</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HubSpotCase;
