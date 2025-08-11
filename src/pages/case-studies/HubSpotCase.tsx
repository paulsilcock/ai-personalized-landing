import React from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CtaAnchor } from "@/components/cta/CtaAnchor";
import { GetStartedButton } from "@/components/cta/GetStartedButton";
import { ArrowRight, TrendingUp, Users, Zap, CheckCircle } from "lucide-react";

const HubSpotCase: React.FC = () => {
  const title = "HubSpot Personalization Case Study | Newmode";
  const description = "How personalized messaging turns Salesforce-switchers into engaged HubSpot prospects.";

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={title} description={description} />
      <Navbar />
      <main className="flex-grow">
        <header className="section-padding bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-container">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Case Study · HubSpot
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Turn "Salesforce alternative" intent into instant relevance
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">
              See how a personalized version of HubSpot's page speaks directly to switchers' pains—cost and complexity—and keeps them engaged.
            </p>
          </div>
        </header>


        {/* Before/After Visual Comparison */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="max-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The transformation</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From generic positioning that misses the mark to personalized messaging that speaks directly to Salesforce switchers.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Before */}
              <div className="relative">
                <div className="absolute -top-3 left-6 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  Before: Generic
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-red-200">
                  <img 
                    src="/lovable-uploads/0ef9d4a1-e81b-4a91-a003-3de150999e80.png" 
                    alt="Generic HubSpot page with 'Where go-to-market teams go to grow'" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-100">
                  <h3 className="font-semibold text-red-800 mb-2">Why it misses the mark:</h3>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• "Go-to-market teams" doesn't address the search intent</li>
                    <li>• Ignores the specific Salesforce pain points</li>
                    <li>• Generic benefits don't resonate with switchers</li>
                  </ul>
                </div>
              </div>

              {/* After */}
              <div className="relative">
                <div className="absolute -top-3 left-6 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  After: Personalized
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-green-200">
                  <img 
                    src="/lovable-uploads/a2d22bea-f29c-4492-ac95-143ce045a36a.png" 
                    alt="Personalized HubSpot page with 'Where Salesforce users find a better way to grow'" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-green-800 mb-2">Why it works:</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Directly addresses "Salesforce alternative" intent
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Acknowledges complexity pain point upfront
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Implies social proof from similar users
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Analysis */}
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">The psychology behind the success</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Intent Recognition</h3>
                      <p className="text-gray-600">The visitor searched for "Salesforce alternative" — the page immediately validates this intent instead of forcing them to translate generic messaging.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Pain Acknowledgment</h3>
                      <p className="text-gray-600">"Without the complexity of Salesforce" directly addresses the core frustration that drove them to search in the first place.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Social Validation</h3>
                      <p className="text-gray-600">"Salesforce users find a better way" implies that others like them have already made the switch successfully.</p>
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
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">-58%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Time on Page</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">+124%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Demo Requests</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">+180%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="section-padding bg-background border-t">
          <div className="max-container animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-green-600 mb-1">+180%</p>
                <p className="text-sm text-gray-600">Higher meeting rate</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-blue-600 mb-1">83%</p>
                <p className="text-sm text-gray-600">Intent recognition</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-purple-600 mb-1">2.4x</p>
                <p className="text-sm text-gray-600">Lower bounce rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="max-container text-center">
            <h2 className="text-3xl font-bold mb-4">See it in action</h2>
            <p className="text-xl mb-8 text-orange-100">Experience the personalized flow on a real page</p>
            <div className="flex gap-4 justify-center">
              <CtaAnchor href="https://dash.newmode.ai/demo/hubspot.com" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-50">
                View HubSpot Demo
              </CtaAnchor>
              <GetStartedButton size="md" variant="ghost" className="border-white text-white hover:bg-white/10" />
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        <section className="section-padding bg-white">
          <div className="max-container">
            <h2 className="text-2xl font-bold mb-8 text-center">Related case studies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a className="group rounded-xl border p-6 bg-white hover:bg-muted/10 transition-all duration-300 hover:shadow-lg hover-scale" href="/case/brex">
                <div className="flex items-center gap-3 mb-3">
                  <img src="/lovable-uploads/42eb5ff2-f4b6-4a77-925e-bc9a2f4905dd.png" alt="Brex logo" className="w-8 h-8 object-contain" />
                  <span className="text-sm text-gray-600 font-medium">Brex Case Study</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors">Account-aware pages that drive $2.1M pipeline</h3>
                <p className="text-gray-600 text-sm">How finance-specific messaging converts more target accounts</p>
              </a>
              <a className="group rounded-xl border p-6 bg-white hover:bg-muted/10 transition-all duration-300 hover:shadow-lg hover-scale" href="/case/notion">
                <div className="flex items-center gap-3 mb-3">
                  <img src="/lovable-uploads/2dd60b04-32ef-4eb6-b2b1-a8c1d85e2aff.png" alt="Notion logo" className="w-8 h-8 object-contain" />
                  <span className="text-sm text-gray-600 font-medium">Notion Case Study</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-600 transition-colors">Enterprise intent → 35% higher conversions</h3>
                <p className="text-gray-600 text-sm">Context-aware copy that speaks to enterprise priorities</p>
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