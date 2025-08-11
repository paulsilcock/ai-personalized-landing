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
        <div className="relative rounded-xl overflow-hidden">{children}</div>
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
            <img
              src="/lovable-uploads/95c758ad-2820-413e-96fb-5532e8c16d30.png"
              alt="Install Script"
              className="w-full h-auto rounded-lg"
            />
          </HowItWorksSection>

          <HowItWorksSection
            stepNumber="02"
            title="Connect Your Data"
            description="Import target account lists, LinkedIn Ads, or keywords via CSV"
            alignment="right"
          >
            <div className="absolute rounded-2xl p-[38px] bg-gradient-to-r from-blue-500 to-purple-500">
              <img
                src="/lovable-uploads/b8109354-86e2-4e3f-8e80-0490ac16438b.png"
                alt="Connect Your Data"
                className="w-full h-auto rounded-xl bg-white"
              />
            </div>
          </HowItWorksSection>

          <HowItWorksSection
            stepNumber="03"
            title="Create 1:1 Landing Pages"
            description="Describe what you want in plain English. Our AI transforms your website for each account instantly"
            alignment="left"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-lg"
            >
              <source src="step-3-video.mp4" type="video/mp4" />
              <source src="step-3-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </HowItWorksSection>

          <HowItWorksSection
            stepNumber="04"
            title="Scale and Automate for Every Visitor"
            description="Target accounts automatically see personalized experiences that drive them to take action"
            alignment="right"
          >
            <div
              className="rounded-2xl bg-[#644FA4] aspect-video min-h-1 relative"
              id="cunt"
            >
              {[0, 1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`/images/how-it-works-${i}.png`}
                  alt="Scale and Automate"
                  className="absolute opacity-0 inset-4 w-[calc(100%-32px)] max-h-[calc(100%-32px)] lg:inset-6 lg:w-[calc(100%-48px)] lg:max-h-[calc(100%-48px)] rounded-xl bg-white animate-slide-in-out object-fit aspect-video"
                  style={{
                    boxShadow: "0px 0px 0px 8px #ffffff26",
                    animationDelay: `${i * 2}s`,
                  }}
                />
              ))}
            </div>
          </HowItWorksSection>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
