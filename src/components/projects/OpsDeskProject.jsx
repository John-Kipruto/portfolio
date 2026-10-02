import BillingPreview from "./BillingPreview";

export default function OpsDeskProject({ onCaseStudy, onOpenDemo }) {
  return (
    <article className="border border-line rounded-[9px] overflow-hidden">
      <BillingPreview />
      <div className="py-[26px] px-[30px] max-[900px]:p-[24px]">
        <div className="flex gap-[24px] justify-between [font:11px_monospace] tracking-[1px] text-muted">
          <span>02 / PORTFOLIO CONCEPT</span>
          <span>WEB + API</span>
        </div>
        <h3 className="font-heading font-semibold tracking-[-1px] leading-[1.12] text-[30px] mt-[18px] mx-[0] mb-[12px]">
          OpsDesk
        </h3>
        <p className="text-muted m-0">
          A business workspace for teams, billing, and background workflows.
        </p>
        <div className="flex flex-wrap gap-[7px] my-[25px] mx-[0]">
          <span className="py-[4px] px-[10px] border border-[#d4dcd2] rounded-[4px] text-[12px]">
            Next.js
          </span>
          <span className="py-[4px] px-[10px] border border-[#d4dcd2] rounded-[4px] text-[12px]">
            NestJS
          </span>
          <span className="py-[4px] px-[10px] border border-[#d4dcd2] rounded-[4px] text-[12px]">
            PostgreSQL
          </span>
        </div>
        <div className="flex justify-between border-t border-line pt-[20px] mt-[20px]">
          <button
            className="hover:underline hover:underline-offset-[5px] border-0 bg-transparent p-0 text-[14px] font-semibold text-left"
            id="demo-open"
            onClick={onOpenDemo}
          >
            Try billing demo
          </button>
          <button
            className="hover:underline hover:underline-offset-[5px] border-0 bg-transparent p-0 text-[14px] font-semibold text-left"
            onClick={() => onCaseStudy("ops")}
          >
            Technical brief
          </button>
        </div>
      </div>
    </article>
  );
}
