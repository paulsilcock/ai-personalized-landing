import React from "react";
import SEO from "@/components/SEO";
import { CtaAnchor } from "@/components/cta/CtaAnchor";

const BrexCase: React.FC = () => {
  const title = "Brex Personalization Case Study | Newmode";
  const description = "How ABM-tailored pages can drive pipeline growth for Brex with precise, account-aware messaging.";

  return (
    <>
      <SEO title={title} description={description} />
      <header className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="max-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Brex Personalization Case Study</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Showing how personalized, account-aware messaging can convert more target accounts and expand pipeline.
          </p>
        </div>
      </header>

      <main>
        <section className="section-padding bg-background">
          <article className="max-container grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl font-semibold mb-3">The Setup</h2>
              <p className="text-muted-foreground">
                A finance leader searches for a better corporate spend and card solution. They arrive with specific needs and expectations.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">The First Experience — Generic</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>High-level platform claims</li>
                <li>Broad benefits that don’t reflect the visitor’s immediate intent</li>
              </ul>
            </div>
          </article>
        </section>

        <section className="section-padding bg-muted/30">
          <article className="max-container grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl font-semibold mb-3">Why It Misses</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Doesn’t connect to the account’s pain or category-specific triggers</li>
                <li>Speaks to everyone, which ends up speaking to no one</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">The Personalized Version</h2>
              <div className="rounded-lg border p-5 bg-background">
                <p className="font-semibold">Headline:</p>
                <p className="text-muted-foreground mb-3">“Where finance teams control spend without slowing growth”</p>
                <p className="font-semibold">Subheading:</p>
                <p className="text-muted-foreground">“Purpose-built cards, limits, and real-time controls for fast-growing companies—without the manual overhead.”</p>
              </div>
            </div>
          </article>
        </section>

        <section className="section-padding bg-background">
          <article className="max-container grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl font-semibold mb-3">Why It Works</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Taps directly into finance team pains and workflows</li>
                <li>Signals that the product maps onto real-world controls and outcomes</li>
              </ul>
            </div>
            <aside>
              <div className="rounded-lg border p-6 bg-muted/20">
                <h3 className="font-semibold mb-2">Try it live</h3>
                <p className="text-muted-foreground mb-4">Experience a live demo of the personalized flow.</p>
                <CtaAnchor href="/demo/brex.com" variant="primary">View Brex demo</CtaAnchor>
              </div>
            </aside>
          </article>
        </section>
      </main>
    </>
  );
};

export default BrexCase;
