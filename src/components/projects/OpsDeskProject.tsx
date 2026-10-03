import Link from "next/link";
import BillingPreview from "./BillingPreview";

interface OpsDeskProjectProps {
  onCaseStudy: any;
  onOpenDemo?: any;
}

export default function OpsDeskProject({
  onCaseStudy,
  onOpenDemo,
}: OpsDeskProjectProps) {
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
        <div className="flex flex-wrap gap-[7px] my-[25px] mx-[0] items-center text-sm">
          <span>Next.js</span>
          <span>|</span>
          <span>NestJS</span>
          <span>|</span>
          <span>PostgreSQL</span>
        </div>
        <div className="flex justify-between border-t border-line pt-[20px] mt-[20px] text-sm">
          <div className="flex gap-2">
            <button
              className="border border-gray-300 p-2 rounded-md text-sm hover:bg-black hover:text-white  font-semibold text-left"
              id="demo-open"
              onClick={onOpenDemo}
            >
              Try billing demo
            </button>
            <button
              className="border border-gray-300 p-2 rounded-md text-sm hover:bg-black hover:text-white  font-semibold text-left"
              onClick={() => onCaseStudy("ops")}
            >
              Technical brief
            </button>
          </div>

          <div className="flex gap-2">
            <Link
              href={""}
              target="_blank"
              className="border border-gray-300 p-2 rounded-md text-sm hover:bg-black hover:text-white  font-semibold text-left"
            >
              Github
            </Link>
            <Link
              href={""}
              target="_blank"
              className="border border-gray-300 p-2 rounded-md text-sm hover:bg-black hover:text-white  font-semibold text-left"
            >
              Live
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
