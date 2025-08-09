import React from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CtaAnchor } from "@/components/cta/CtaAnchor";
import { GetStartedButton } from "@/components/cta/GetStartedButton";

const BrexCase: React.FC = () => {
  const title = "Brex Personalization Case Study | Newmode";
  const description = "How ABM-tailored pages can drive pipeline growth for Brex with precise, account-aware messaging.";

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={title} description={description} />
      <Navbar />
      <main className="flex-grow">
        <header className="section-padding bg-gradient-to-b from-background to-muted/30">
          <div className="max-container">
            <p className="uppercase tracking-wide text-xs text-muted-foreground mb-2">Case Study · Brex</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Account-aware pages that turn target accounts into pipeline</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              See how aligning copy to finance team pains increases relevance and accelerates qualified conversions.
            </p>
          </div>
        </header>

        <section className="section-padding bg-background">
          <div className="max-container grid md:grid-cols-2 gap-8 items-start">
            <article className="rounded-lg border p-6 bg-muted/10">
              <h2 className="text-base font-semibold mb-2">Before: Generic claims</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Platform-first messaging</li>
                <li>Benefits that don’t reflect buyer task or role</li>
              </ul>
            </article>
            <article className="rounded-lg border p-6 bg-background">
              <h2 className="text-base font-semibold mb-2">After: Role and account-aware</h2>
              <div className="space-y-3 text-muted-foreground">
                <p><span className="font-semibold">Headline:</span> “Where finance teams control spend without slowing growth”</p>
                <p><span className="font-semibold">Subheading:</span> “Purpose-built cards, limits, and real-time controls—without manual overhead.”</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="max-container grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border p-5 bg-background">
              <p className="text-sm text-muted-foreground">Pipeline impact</p>
              <p className="text-2xl font-bold">+$2.1M</p>
              <p className="text-sm text-muted-foreground">from better ABM fit</p>
            </div>
            <div className="rounded-lg border p-5 bg-background">
              <p className="text-sm text-muted-foreground">Relevance</p>
              <p className="text-2xl font-bold">High</p>
              <p className="text-sm text-muted-foreground">for ICP by role</p>
            </div>
            <div className="rounded-lg border p-5 bg-background">
              <p className="text-sm text-muted-foreground">Friction</p>
              <p className="text-2xl font-bold">Lower</p>
              <p className="text-sm text-muted-foreground">conversion friction</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-container grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-xl font-semibold mb-3">Why this works</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li><strong>Task clarity:</strong> Helps buyers evaluate controls and policy fit.</li>
                <li><strong>Context match:</strong> Language mirrors finance priorities.</li>
                <li><strong>Proof path:</strong> Nudges toward demo with relevant outcomes.</li>
              </ul>
            </div>
            <aside>
              <div className="rounded-lg border p-6 bg-muted/20">
                <h3 className="font-semibold mb-2">Try it live</h3>
                <p className="text-muted-foreground mb-4">Experience a live, interactive demo.</p>
                <div className="flex gap-3">
                  <CtaAnchor href="/demo/brex.com" variant="primary">View Brex demo</CtaAnchor>
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
              <a className="rounded-lg border p-6 bg-background hover:bg-muted/10 transition" href="/case/hubspot">
                <p className="text-sm text-muted-foreground">HubSpot</p>
                <p className="text-lg font-semibold">Salesforce-switcher intent → engagement</p>
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

export default BrexCase;
