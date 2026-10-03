import CompliancePreview from "./CompliancePreview";

interface FeaturedProjectProps {
  onCaseStudy: any;
  onOpenDemo?: any;
}

export default function FeaturedProject({
  onCaseStudy,
  onOpenDemo,
}: FeaturedProjectProps) {
  return (
    <article className="grid [grid-template-columns:1fr_1.15fr] bg-ink text-white rounded-[10px] overflow-hidden max-[900px]:[grid-template-columns:1fr_1fr] max-[650px]:[grid-template-columns:1fr]">
      <div className="p-[42px] max-[900px]:p-[30px] max-[650px]:p-[30px]">
        <div className="flex gap-[24px] justify-start [font:11px_monospace] tracking-[1px] text-[#b8c0b6]">
          <span>01</span>
          <span>PROFESSIONAL EXPERIENCE</span>
        </div>
        <h3 className="font-heading font-semibold tracking-[-1.8px] leading-[1.12] text-[38px] mt-[38px] mx-[0] mb-[12px] max-[900px]:text-[29px] max-[650px]:text-[34px] max-[650px]:mt-[24px]">
          Simple Formations
        </h3>
        <p className="max-w-[360px] text-white text-[18px] mt-[0] max-[900px]:text-[14px] max-[650px]:text-[16px]">
          Making corporate compliance manageable.
        </p>
        <p className="max-w-[360px] text-[#bcc5c3] text-[16px] max-[900px]:text-[14px] max-[650px]:text-[16px]">
          Company formation, beneficial ownership, document workflows, and
          annual returns — connected in one platform.
        </p>
        <div className="flex flex-wrap gap-[7px] my-[25px] mx-[0]">
          <span className="py-[4px] px-[10px] border rounded-[4px] text-[12px] border-[#42504c] text-[#d9e1dd]">
            React
          </span>
          <span className="py-[4px] px-[10px] border rounded-[4px] text-[12px] border-[#42504c] text-[#d9e1dd]">
            Node.js
          </span>
          <span className="py-[4px] px-[10px] border rounded-[4px] text-[12px] border-[#42504c] text-[#d9e1dd]">
            MongoDB
          </span>
        </div>
        <button
          className="inline-flex items-center justify-center py-[13px] px-[23px] text-[14px] font-semibold border border-[transparent] rounded-[5px] whitespace-nowrap [transition:background_.2s,transform_.2s] hover:-translate-y-0.5 bg-lime text-ink"
          onClick={() => onCaseStudy("sfl")}
        >
          Read case study
        </button>
        <div className="[font:10px_monospace] tracking-[1px] mt-[32px] text-[#aab8b3] max-[650px]:mt-[24px]">
          FULL-STACK DEVELOPMENT / SFL
        </div>
      </div>
      <CompliancePreview />
    </article>
  );
}
