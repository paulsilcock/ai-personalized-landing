import React from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CtaAnchor } from "@/components/cta/CtaAnchor";
import { GetStartedButton } from "@/components/cta/GetStartedButton";

const NotionCase: React.FC = () => {
  const title = "Notion Personalization Case Study | Newmode";
  const description = "How context-aware messaging can boost Notion’s website conversions by aligning copy with visitor intent.";

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={title} description={description} />
      <Navbar />
      <main className="flex-grow">
        <header className="section-padding bg-gradient-to-b from-background to-muted/30">
          <div className="max-container">
            <p className="uppercase tracking-wide text-xs text-muted-foreground mb-2">Case Study · Notion</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Enterprise intent → clear value, faster adoption</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              See how enterprise-aware copy improves clarity on security, scale, and cross-functional collaboration to lift conversions.
            </p>
          </div>
        </header>

        <section className="section-padding bg-background">
          <div className="max-container grid md:grid-cols-2 gap-8 items-start">
            <article className="rounded-lg border p-6 bg-muted/10">
              <h2 className="text-base font-semibold mb-2">Before: Universal messaging</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>One-size-fits-all productivity language</li>
                <li>Light on enterprise priorities and safeguards</li>
              </ul>
            </article>
            <article className="rounded-lg border p-6 bg-background">
              <h2 className="text-base font-semibold mb-2">After: Built for enterprise teams</h2>
              <div className="space-y-3 text-muted-foreground">
                <p><span className="font-semibold">Headline:</span> “Where enterprise teams unify knowledge and ship faster”</p>
                <p><span className="font-semibold">Subheading:</span> “Bring docs, projects, and workflows together—secure, scalable, and built for cross-functional collaboration.”</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="max-container grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border p-5 bg-background">
              <p className="text-sm text-muted-foreground">Conversions</p>
              <p className="text-2xl font-bold">+35%</p>
              <p className="text-sm text-muted-foreground">with intent-matched messaging</p>
            </div>
            <div className="rounded-lg border p-5 bg-background">
              <p className="text-sm text-muted-foreground">Clarity</p>
              <p className="text-2xl font-bold">Stronger</p>
              <p className="text-sm text-muted-foreground">problem-solution fit</p>
            </div>
            <div className="rounded-lg border p-5 bg-background">
              <p className="text-sm text-muted-foreground">Confidence</p>
              <p className="text-2xl font-bold">Higher</p>
              <p className="text-sm text-muted-foreground">on scale and security</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-container grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-xl font-semibold mb-3">Why this works</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li><strong>Role alignment:</strong> Mirrors enterprise buyer concerns.</li>
                <li><strong>Context-first:</strong> Speaks to team workflows and governance.</li>
                <li><strong>Frictionless proof:</strong> Clear path to demo and evaluation.</li>
              </ul>
            </div>
            <aside>
              <div className="rounded-lg border p-6 bg-muted/20">
                <h3 className="font-semibold mb-2">Try it live</h3>
                <p className="text-muted-foreground mb-4">See the experience on a real page.</p>
                <div className="flex gap-3">
                  <CtaAnchor href="/demo/notion.com/enterprise" variant="primary">View Notion demo</CtaAnchor>
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
              <a className="rounded-lg border p-6 bg-background hover:bg-muted/10 transition" href="/case/brex">
                <p className="text-sm text-muted-foreground">Brex</p>
                <p className="text-lg font-semibold">Account-aware pages that drive pipeline</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotionCase;
