import React from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CtaAnchor } from "@/components/cta/CtaAnchor";
import { GetStartedButton } from "@/components/cta/GetStartedButton";
import { useUserId } from "@/hooks/use-user-id";
import { ArrowRight, TrendingUp, Users, Zap, CheckCircle } from "lucide-react";

const BrexCase: React.FC = () => {
  const userId = useUserId();
  const title = "Brex Personalisation Case Study | Newmode";
  const description = "How ABM-tailored pages can drive pipeline growth for Brex with precise, account-aware messaging.";

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={title} description={description} />
      <Navbar />
      <main className="flex-grow">
        <header className="section-padding bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="max-container">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Case Study · Brex
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Account-aware pages that turn target accounts into pipeline
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              See how aligning copy to finance team pains increases relevance and accelerates qualified conversions.
            </p>
          </div>
        </header>

        {/* Transformation (Solution) */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="max-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The transformation</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From generic positioning that misses the mark to personalised messaging that speaks directly to AI startups.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Before */}
              <figure className="relative">
                <div className="absolute -top-3 left-6 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  Before: Generic
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-red-200 bg-white">
                  <img
                    src="/lovable-uploads/05346259-8bd8-477e-89ba-00397566f6e4.png"
                    alt="Brex generic hero with headline 'Spend smarter. Move faster.'"
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-100">
                  <h3 className="font-semibold text-red-800 mb-2">Why it misses the mark:</h3>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• “Spend smarter. Move faster” is too vague and doesn't address specific AI startup needs</li>
                    <li>• Ignores the unique challenges of managing AI infrastructure costs and runway</li>
                    <li>• Generic benefits about control and speed don't resonate with high-growth tech ventures</li>
                  </ul>
                </div>
              </figure>

              {/* After */}
              <figure className="relative">
                <div className="absolute -top-3 left-6 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  After: Personalised
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-green-200 bg-white">
                  <img
                    src="/lovable-uploads/7f51f46b-11c4-4d0b-8929-64aa0b9d3786.png"
                    alt="Brex AI-focused hero with headline 'Scale your AI startup faster.'"
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-green-800 mb-2">Why it works:</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Directly addresses AI startups with “Scale your AI startup faster”</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Acknowledges specific pain point: “manage AI infrastructure costs”</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Positions specifically for their context: “designed for high-growth tech ventures”</li>
                  </ul>
                </div>
              </figure>
            </div>
            <p className="mt-6 text-base text-gray-600">
              The personalised version speaks directly to AI startups who are searching for financial solutions that understand their unique needs — optimizing runway while scaling AI infrastructure — rather than generic spend management messaging.
            </p>
          </div>
        </section>

        {/* Psychology */}
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">The psychology behind the success</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0"><span className="text-white font-bold">1</span></div>
                    <div>
                      <h3 className="font-semibold mb-2">Intent recognition</h3>
                      <p className="text-gray-600">Signals we understand finance’s job-to-be-done: control, compliance, and speed.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0"><span className="text-white font-bold">2</span></div>
                    <div>
                      <h3 className="font-semibold mb-2">Pain acknowledgment</h3>
                      <p className="text-gray-600">Addresses manual processes and policy drift that slow teams down.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0"><span className="text-white font-bold">3</span></div>
                    <div>
                      <h3 className="font-semibold mb-2">Risk removal</h3>
                      <p className="text-gray-600">Reassures on governance and control with precise language.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-center">Conversion Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Bounce Rate</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden"><div className="w-3/4 h-full bg-red-500 rounded-full"></div></div>
                      <span className="text-sm font-medium">-41%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Time on Page</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden"><div className="w-4/5 h-full bg-green-500 rounded-full"></div></div>
                      <span className="text-sm font-medium">+88%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Demo Requests</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden"><div className="w-full h-full bg-blue-500 rounded-full"></div></div>
                      <span className="text-sm font-medium">+72%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results at the end */}
        <section className="section-padding bg-background border-t">
          <div className="max-container animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 border border-green-100">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-green-600 mb-1">+$2.1M</p>
                <p className="text-sm text-gray-600">Pipeline influenced</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-blue-600 mb-1">High</p>
                <p className="text-sm text-gray-600">Target account relevance</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-purple-600 mb-1">Lower</p>
                <p className="text-sm text-gray-600">Conversion friction</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA at bottom */}
        <section className="section-padding bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="max-container text-center">
            <h2 className="text-3xl font-bold mb-4">See it in action</h2>
            <p className="text-xl mb-8 text-gray-300">Experience the personalised flow on a real page</p>
            <div className="flex gap-4 justify-center">
              <CtaAnchor href={`https://dash.newmode.ai/demo/brex.com${userId ? `?nm_id=${userId}` : ''}`} variant="secondary" className="bg-white text-black hover:bg-gray-50">
                View Brex Demo
              </CtaAnchor>
              <GetStartedButton size="md" variant="ghost" className="border-white text-white hover:bg-white/10" />
            </div>
          </div>
        </section>

        {/* Related case studies with logos */}
        <section className="section-padding bg-white">
          <div className="max-container">
            <h2 className="text-2xl font-bold mb-8 text-center">Related case studies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a className="group rounded-xl border p-6 bg-white hover:bg-muted/10 transition-all duration-300 hover:shadow-lg" href="/case/hubspot">
                <div className="flex items-center gap-3 mb-3">
                  <img src="/lovable-uploads/hubspot-logo.svg" alt="HubSpot logo" className="w-8 h-8 object-contain" />
                  <span className="text-sm text-gray-600 font-medium">HubSpot Case Study</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Salesforce-switcher intent → engagement</h3>
                <p className="text-gray-600 text-sm">Messaging that matches search intent</p>
              </a>
              <a className="group rounded-xl border p-6 bg-white hover:bg-muted/10 transition-all duration-300 hover:shadow-lg" href="/case/notion">
                <div className="flex items-center gap-3 mb-3">
                  <img src="/lovable-uploads/2dd60b04-32ef-4eb6-b2b1-a8c1d85e2aff.png" alt="Notion logo" className="w-8 h-8 object-contain" />
                  <span className="text-sm text-gray-600 font-medium">Notion Case Study</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-600 transition-colors">Enterprise intent → higher conversions</h3>
                <p className="text-gray-600 text-sm">Context-aware copy that speaks to enterprise</p>
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
