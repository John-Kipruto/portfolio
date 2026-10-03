"use client";

import { useState } from "react";
import FeaturedProject from "../projects/FeaturedProject";
import OpsDeskProject from "../projects/OpsDeskProject";
import FoodiProject from "../projects/FoodiProject";
import CaseStudyDialog from "../ui/CaseStudyDialog";
import BillingDemoDialog from "../ui/BillingDemoDialog";

export default function WorkSection() {
  const [activeCase, setActiveCase] = useState(
    null as null | keyof typeof import("@/data/portfolio").caseStudies,
  );
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <>
      <section
        className="w-[min(1240px,calc(100%_-_96px))] mx-auto pt-[76px] px-[0] pb-[80px] max-[900px]:w-[calc(100%_-_48px)] max-[650px]:w-[calc(100%_-_36px)] max-[650px]:py-[48px] max-[650px]:px-[0]"
        id="work"
      >
        <div className="flex items-end justify-between mb-[35px] max-[650px]:items-start max-[650px]:gap-[20px] max-[650px]:flex-col max-[650px]:mb-[26px]">
          <div>
            <p className="flex justify-between font-mono text-[12px] tracking-[1.4px] leading-[1.5]">
              01 / SELECTED WORK
            </p>
            <h2 className="font-heading font-semibold tracking-[-2px] leading-[1.12] text-[42px] mt-[14px] mx-[0] mb-[0] max-[650px]:text-[33px]">
              Built with purpose.
            </h2>
          </div>
          <p className="text-muted text-[14px] m-0 max-[650px]:text-[14px]">
            A closer look at the problems,
            <br />
            the decisions, and the implementation.
          </p>
        </div>
        <FeaturedProject
          onCaseStudy={setActiveCase}
          onOpenDemo={() => setDemoOpen(true)}
        />
        <div className="grid [grid-template-columns:1fr_1fr] gap-[26px] mt-[27px] max-[650px]:[grid-template-columns:1fr] max-[650px]:gap-[22px] max-[650px]:mt-[22px]">
          <OpsDeskProject
            onCaseStudy={setActiveCase}
            onOpenDemo={() => setDemoOpen(true)}
          />
          <FoodiProject
            onCaseStudy={setActiveCase}
            onOpenDemo={() => setDemoOpen(true)}
          />
        </div>
      </section>
      {activeCase && (
        <CaseStudyDialog
          projectId={activeCase}
          onClose={() => setActiveCase(null)}
        />
      )}
      <BillingDemoDialog open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
