export default function HeroSection() {
  return (
    <section className="w-[min(1240px,calc(100%_-_96px))] mx-auto pt-[58px] max-[900px]:w-[calc(100%_-_48px)] max-[650px]:w-[calc(100%_-_36px)] max-[650px]:pt-[34px]">
      <div className="flex justify-between font-mono text-[12px] tracking-[1.4px] leading-[1.5] max-[650px]:text-[10px] max-[650px]:gap-[15px]">
        <span>SOFTWARE ENGINEER</span>
        <span className="max-[650px]:max-w-[110px] max-[650px]:text-right">
          NAIROBI, KENYA / WEB + MOBILE
        </span>
      </div>
      <h1 className="font-heading font-medium tracking-[-5px] leading-[1.12] text-[clamp(50px,6.6vw,90px)] mt-[34px] mx-[0] mb-[35px] min-[1500px]:text-[94px] max-[650px]:text-[48px] max-[650px]:tracking-[-2.8px] max-[650px]:my-[32px] max-[650px]:mx-[0]">
        Complex problems.
        <br />
        <span className="text-[#65705f]">Thoughtful software.</span>
      </h1>
      <div className="flex justify-between items-center gap-[40px] max-[900px]:items-start max-[900px]:flex-col max-[900px]:gap-[25px]">
        <p className="max-w-[540px] text-[18px] m-0 max-[650px]:text-[16px]">
          I build the systems behind useful products — from corporate compliance
          workflows to reliable APIs and intuitive web experiences.
        </p>
        <div className="flex items-center gap-[26px] max-[650px]:gap-[23px]">
          <a
            className="inline-flex items-center justify-center py-[13px] px-[23px] text-[14px] font-semibold border border-[transparent] rounded-[5px] whitespace-nowrap [transition:background_.2s,transform_.2s] hover:-translate-y-0.5 bg-ink text-white hover:bg-[#2d3d33]"
            href="#work"
          >
            Explore my work
          </a>
          <a
            className="hover:underline hover:underline-offset-[5px] border-0 bg-transparent p-0 text-[14px] font-semibold text-left"
            href="#about"
          >
            Meet the engineer
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center py-[29px] px-[0] mt-[50px] border-y border-line text-[14px] max-[900px]:items-start max-[900px]:gap-[20px] max-[900px]:flex-col max-[650px]:mt-[34px] max-[650px]:py-[20px] max-[650px]:px-[0] max-[650px]:text-[12px]">
        <span className="[font:11px_monospace] tracking-[1.4px]">
          BACKEND DEPTH. PRODUCT THINKING.
        </span>
        <div>
          TypeScript{" "}
          <i className="not-italic py-[0] px-[17px] text-[#91998e] max-[650px]:py-[0] max-[650px]:px-[6px]">
            /
          </i>{" "}
          NestJS{" "}
          <i className="not-italic py-[0] px-[17px] text-[#91998e] max-[650px]:py-[0] max-[650px]:px-[6px]">
            /
          </i>{" "}
          Next.js{" "}
          <i className="not-italic py-[0] px-[17px] text-[#91998e] max-[650px]:py-[0] max-[650px]:px-[6px]">
            /
          </i>{" "}
          React Native
        </div>
      </div>
    </section>
  );
}
