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
        <div className="flex flex-wrap gap-[7px] my-[25px] mx-[0]">
          <span className="py-[4px] px-[10px] border border-[#d4dcd2] rounded-[4px] text-[12px]">
            React Native
          </span>
          <span className="py-[4px] px-[10px] border border-[#d4dcd2] rounded-[4px] text-[12px]">
            Expo
          </span>
          <span className="py-[4px] px-[10px] border border-[#d4dcd2] rounded-[4px] text-[12px]">
            Expo Router
          </span>
        </div>
        <div className="flex justify-between border-t border-line pt-[20px] mt-[20px]">
          <button
            className="hover:underline hover:underline-offset-[5px] border-0 bg-transparent p-0 text-[14px] font-semibold text-left"
            onClick={() => onCaseStudy("foodi")}
          >
            Explore the project
          </button>
        </div>
      </div>
    </article>
  );
}
