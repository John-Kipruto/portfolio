import Link from "next/link";
import MobilePreview from "./MobilePreview";

export default function FoodiProject({ onCaseStudy }) {
  return (
    <article className="border border-line rounded-[9px] overflow-hidden">
      <MobilePreview />
      <div className="py-[26px] px-[30px] max-[900px]:p-[24px]">
        <div className="flex gap-[24px] justify-between [font:11px_monospace] tracking-[1px] text-muted">
          <span>03 / MOBILE PROJECT</span>
          <span>ANDROID</span>
        </div>
        <h3 className="font-heading font-semibold tracking-[-1px] leading-[1.12] text-[30px] mt-[18px] mx-[0] mb-[12px]">
          Foodi
        </h3>
        <p className="text-muted m-0">
          A food discovery and ordering experience built with React Native and
          Expo.
        </p>
        <div className="flex flex-wrap gap-[7px] my-[25px] mx-[0] items-center text-sm">
          <span>React Native</span>
          <span>|</span>
          <span>Expo</span>
          <span>|</span>
          <span>Expo Router</span>
        </div>
        <div className="flex justify-between border-t border-line pt-[20px] mt-[20px]">
          <button
            className="border border-gray-300 p-2 rounded-md text-sm hover:bg-black hover:text-white  font-semibold text-left"
            onClick={() => onCaseStudy("foodi")}
          >
            Technical brief
          </button>

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
