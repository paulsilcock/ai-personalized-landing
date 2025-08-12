import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="max-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about newmode.ai
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                How does NewMode identify visiting accounts?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                NewMode detects visitors through traffic source analysis and integrates with your existing data (CRM, email lists, LinkedIn Ads) to identify and personalize experiences automatically.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                What websites does NewMode work with?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                NewMode works with any website that allows you to add HTML code - WordPress, Shopify, Webflow, custom websites, and more. Just add one script to your header.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                Do I need technical knowledge to use NewMode?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                No. Our conversational AI editor lets you create personalized experiences by describing what you want in plain English. No coding or design skills required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                How is NewMode different from other personalization tools?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Most tools require element-by-element editing or separate microsite creation. NewMode transforms your entire existing website experience through simple AI conversations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                How long does setup take?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Setup takes less than 5 minutes. Add one script, upload your data via CSV, and start creating personalized experiences immediately.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                What happens during the beta period?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Beta users get full access to NewMode for free, direct input on product development, and priority support. You'll keep grandfathered pricing when we officially launch.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                Can I see results immediately?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Yes. Once you create personalized experiences, target accounts will see them immediately when they visit your website. Analytics show engagement in real-time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-8"
              className="bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                What data do I need to provide?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                You can import LinkedIn Ads, email lists, target account lists, or simply use our traffic source detection. The more data you provide, the more personalized the experiences.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
