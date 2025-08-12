import React from "react";

interface HowItWorksSectionProps {
  stepNumber: string;
  title: string;
  description: string;
  alignment: "left" | "right";
  children: React.ReactNode;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  stepNumber,
  title,
  description,
  alignment,
  children,
}) => {
  return (
    <div
      className={`flex flex-col ${
        alignment === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 lg:gap-16 items-center scroll-mt-24`}
    >
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="inline-block px-4 py-1 rounded-full bg-craftera-cream/60 text-craftera-dark font-medium text-sm">
          Step {stepNumber}
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="relative">{children}</div>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="howitworks" className="section-padding bg-white">
      <div className="max-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How <span className="gradient-text">newmode.ai Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI works tirelessly to create personalized experiences that
            convert more visitors into customers.
          </p>
        </div>

        <div className="space-y-24">
          <HowItWorksSection
            stepNumber="01"
            title="Install Script"
            description="Add one script to your website header. Works with: WordPress, Shopify, Webflow, custom HTML"
            alignment="left"
          >
            <div className="rounded-2xl overflow-hidden border border-howitworks-purple bg-howitworks-purple border-1cm">
              <img
                src="/lovable-uploads/63e9eb79-3b20-497a-bd67-2301f7959ae6.png"
                alt="Install Analytics Script — Step 1"
                className="w-full h-auto block rounded-2xl"
              />
            </div>
          </HowItWorksSection>

          <HowItWorksSection
            stepNumber="02"
            title="Connect Your Data"
            description="Import target account lists, LinkedIn Ads, or keywords via CSV"
            alignment="right"
          >
            <div className="rounded-2xl overflow-hidden border border-howitworks-blue bg-howitworks-blue border-1cm">
              <img
                src="/lovable-uploads/b8109354-86e2-4e3f-8e80-0490ac16438b.png"
                alt="Connect Your Data — Step 2"
                className="w-full h-auto block rounded-2xl"
              />
            </div>
          </HowItWorksSection>

          <HowItWorksSection
            stepNumber="03"
            title="Create 1:1 Landing Pages"
            description="Describe what you want in plain English. Our AI transforms your website for each account instantly"
            alignment="left"
          >
            <div className="rounded-2xl overflow-hidden border border-howitworks-purple bg-howitworks-purple border-1cm">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block rounded-2xl"
              >
                <source src="step-3-video.mp4" type="video/mp4" />
                <source src="step-3-video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </HowItWorksSection>

          <HowItWorksSection
            stepNumber="04"
            title="Scale and Automate for Every Visitor"
            description="Target accounts automatically see personalized experiences that drive them to take action"
            alignment="right"
          >
            <div className="rounded-2xl overflow-hidden border border-howitworks-blue border-1cm aspect-video relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="Step4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </HowItWorksSection>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;