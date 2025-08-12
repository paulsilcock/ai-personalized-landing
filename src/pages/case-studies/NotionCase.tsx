import React from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CtaAnchor } from "@/components/cta/CtaAnchor";
import { GetStartedButton } from "@/components/cta/GetStartedButton";
import { useUserId } from "@/hooks/use-user-id";
import { ArrowRight, TrendingUp, Users, Zap, CheckCircle } from "lucide-react";

const NotionCase: React.FC = () => {
  const userId = useUserId();
  const title = "Notion case study: SharePoint alternative | newmode.ai";
  const description =
    "Personalized copy for SharePoint-migrating teams: clearer value, import-ready, unified search—10x faster than SharePoint.";

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={title} description={description} />
      <Navbar />
      <main className="flex-grow">
        <header className="section-padding bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="max-container">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Case Study · Notion
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Turn "SharePoint alternative" intent into instant relevance</h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-6">
              Migration tools ready. No more scattered files across Teams, SharePoint, and OneDrive. Everything searchable in one modern workspace.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center rounded-full bg-white/10 text-white px-3 py-1 text-sm font-medium">
                <Zap className="w-4 h-4 mr-1" /> 10x faster than SharePoint
              </span>
            </div>
          </div>
        </header>

        {/* Transformation (Solution) */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="max-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The transformation</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From generic productivity messaging to a SharePoint-switcher experience tailored for enterprise migration.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Before: Current Notion */}
              <div className="relative">
                <div className="absolute -top-3 left-6 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  Before: Current Notion
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-red-200 bg-white">
                  <img
                    src="/lovable-uploads/1ce8bbdb-8c9b-4e24-ad16-f41f94b4aaf7.png"
                    alt="Before: Notion enterprise hero — 'Knowledge and work. Connected.'"
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-100">
                  <h3 className="font-semibold text-red-800 mb-2">Why it misses the mark:</h3>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li className="flex items-start gap-2"><span>•</span> Generic enterprise messaging that fits everyone</li>
                    <li className="flex items-start gap-2"><span>•</span> Doesn’t address SharePoint-specific pain points</li>
                    <li className="flex items-start gap-2"><span>•</span> No clear migration path or import CTA</li>
                    <li className="flex items-start gap-2"><span>•</span> Misses enterprise search/permissions concerns for switchers</li>
                  </ul>
                </div>
              </div>
              {/* After: Notion */}
              <div className="relative">
                <div className="absolute -top-3 left-6 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  After: Personalised
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-green-200 bg-white">
                  <img
                    src="/lovable-uploads/501619d3-34ec-4056-a587-d0982764546e.png"
                    alt="After: Notion personalised for SharePoint migration — seamless transition messaging"
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-green-800 mb-2">Why it works:</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Modern, fast UX — 10x faster than SharePoint</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Unified knowledge with powerful global search</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Simplified permissions and clear navigation</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Migration tools ready — import from SharePoint</li>
                  </ul>
                </div>
                <figure className="mt-4 p-4 bg-white rounded-lg border">
                  <blockquote className="italic text-gray-700">
                    “Moving off SharePoint finally gave our teams one place to work. Search actually finds what people need, and onboarding is night-and-day faster.”
                  </blockquote>
                  <figcaption className="mt-2 text-sm text-gray-500">— IT Director, Global Enterprise</figcaption>
                </figure>
              </div>
            </div>
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
                      <p className="text-gray-600">Acknowledges enterprise workflows, scale, and compliance requirements.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0"><span className="text-white font-bold">2</span></div>
                    <div>
                      <h3 className="font-semibold mb-2">Pain acknowledgment</h3>
                      <p className="text-gray-600">Tackles fragmentation and misalignment across teams.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0"><span className="text-white font-bold">3</span></div>
                    <div>
                      <h3 className="font-semibold mb-2">Social validation</h3>
                      <p className="text-gray-600">Signals that similar enterprise teams succeed with the switch.</p>
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
                      <span className="text-sm font-medium">-37%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Time on Page</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden"><div className="w-4/5 h-full bg-green-500 rounded-full"></div></div>
                      <span className="text-sm font-medium">+92%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Demo Requests</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden"><div className="w-full h-full bg-blue-500 rounded-full"></div></div>
                      <span className="text-sm font-medium">+35%</span>
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
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-green-700 mb-1">+35%</p>
                <p className="text-sm text-gray-600">Higher conversions</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-blue-700 mb-1">Stronger</p>
                <p className="text-sm text-gray-600">Problem-solution fit</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-purple-700 mb-1">Higher</p>
                <p className="text-sm text-gray-600">Confidence in scale/security</p>
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
              <CtaAnchor href={`https://dash.newmode.ai/demo/notion.com/enterprise${userId ? `?nm_id=${userId}` : ''}`} variant="secondary" className="bg-white text-black hover:bg-gray-50">
                View Notion Demo
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
                <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 transition-colors">Salesforce-switcher intent → engagement</h3>
                <p className="text-gray-600 text-sm">Messaging that matches search intent</p>
              </a>
              <a className="group rounded-xl border p-6 bg-white hover:bg-muted/10 transition-all duration-300 hover:shadow-lg" href="/case/brex">
                <div className="flex items-center gap-3 mb-3">
                  <img src="/lovable-uploads/42eb5ff2-f4b6-4a77-925e-bc9a2f4905dd.png" alt="Brex logo" className="w-8 h-8 object-contain" />
                  <span className="text-sm text-gray-600 font-medium">Brex Case Study</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors">Account-aware pages that drive pipeline</h3>
                <p className="text-gray-600 text-sm">Finance-specific messaging converts more</p>
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
