import React from "react";
import LandingPageEffect from "./LandingPageEffect";
import { PlaygroundButton } from "./cta/PlaygroundButton";
import { GetStartedButton } from "./cta/GetStartedButton";
import HeroVisualization from "./HeroVisualization";
import heroBg from "@/assets/hero-gradient.jpg";

const Hero: React.FC = () => {
  return <section className="relative overflow-hidden bg-gradient-to-b from-white to-craftera-blue/5 section-padding">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <img src={heroBg} alt="AI website personalization hero background" className="absolute inset-0 w-full h-full object-cover opacity-40" loading="eager" />
        <div className="absolute inset-0 opacity-50" aria-hidden="true">
          <HeroVisualization />
        </div>
      </div>
      <div className="max-container">
        <div className="grid grid-cols-1 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl xl:text-[56px] font-bold leading-tight">
              Personalise your
              <br />
              website.
              <br />
              <LandingPageEffect />
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">AI that personalizes your website for each visitor, showing the right content, messaging, and CTAs based on who they are.</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <PlaygroundButton />
              <GetStartedButton />
            </div>
          </div>

        </div>
      </div>
    </section>;
};
export default Hero;