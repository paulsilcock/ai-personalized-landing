import React from "react";
import SEO from "@/components/SEO";
import { CtaAnchor } from "@/components/cta/CtaAnchor";

const NotionCase: React.FC = () => {
  const title = "Notion Personalization Case Study | Newmode";
  const description = "How context-aware messaging can boost Notion’s website conversions by aligning copy with visitor intent.";

  return (
    <>
      <SEO title={title} description={description} />
      <header className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="max-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Notion Personalization Case Study</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Demonstrating how tailored, intent-matched copy can increase engagement and conversions for enterprise visitors.
          </p>
        </div>
      </header>

      <main>
        <section className="section-padding bg-background">
          <article className="max-container grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl font-semibold mb-3">The Setup</h2>
              <p className="text-muted-foreground">
                An enterprise team seeks a collaborative workspace that eliminates silos and integrates knowledge across teams.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">The First Experience — Generic</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Universal productivity promises</li>
                <li>Little alignment to the enterprise team’s immediate priorities</li>
              </ul>
            </div>
          </article>
        </section>

        <section className="section-padding bg-muted/30">
          <article className="max-container grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl font-semibold mb-3">Why It Misses</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Doesn’t mirror the visitor’s role, company size, or use case</li>
                <li>Feels general-purpose rather than enterprise-ready</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">The Personalized Version</h2>
              <div className="rounded-lg border p-5 bg-background">
                <p className="font-semibold">Headline:</p>
                <p className="text-muted-foreground mb-3">“Where enterprise teams unify knowledge and ship faster”</p>
                <p className="font-semibold">Subheading:</p>
                <p className="text-muted-foreground">“Bring docs, projects, and workflows together in one flexible workspace—secure, scalable, and built for cross-functional collaboration.”</p>
              </div>
            </div>
          </article>
        </section>

        <section className="section-padding bg-background">
          <article className="max-container grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl font-semibold mb-3">Why It Works</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Reflects enterprise language and priorities</li>
                <li>Signals scale, security, and cross-team utility</li>
              </ul>
            </div>
            <aside>
              <div className="rounded-lg border p-6 bg-muted/20">
                <h3 className="font-semibold mb-2">Try it live</h3>
                <p className="text-muted-foreground mb-4">See how the experience feels on a real page.</p>
                <CtaAnchor href="/demo/notion.com/enterprise" variant="primary">View Notion demo</CtaAnchor>
              </div>
            </aside>
          </article>
        </section>
      </main>
    </>
  );
};

export default NotionCase;
