export default function AboutSection() {
  return (
    <section
      className="w-[min(1240px,calc(100%_-_96px))] mx-auto grid [grid-template-columns:1fr_1fr] gap-[100px] py-[95px] px-[0] max-[900px]:w-[calc(100%_-_48px)] max-[900px]:gap-[45px] max-[650px]:w-[calc(100%_-_36px)] max-[650px]:[grid-template-columns:1fr] max-[650px]:gap-[25px] max-[650px]:py-[55px] max-[650px]:px-[0]"
      id="about"
    >
      <div>
        <p className="flex justify-between font-mono text-[12px] tracking-[1.4px] leading-[1.5]">
          03 / THE ENGINEER
        </p>
        <h2 className="font-heading font-semibold tracking-[-2px] leading-[1.2] text-[44px] my-[20px] mx-[0] max-[900px]:text-[36px] max-[650px]:text-[38px]">
          Product-minded.
          <br />
          Backend-leaning.
          <br />
          <em className="not-italic text-[#65705f]">Always building.</em>
        </h2>
      </div>
      <div>
        <p className="text-ink text-[21px] mt-[0]">
          I started in the MERN stack, working on real business workflows at
          Simple Formations.
        </p>
        <p className="text-muted">
          That experience taught me to work across the product: React
          interfaces, Node.js APIs, MongoDB reporting, access controls, and
          third-party integrations. My focus now extends to TypeScript, NestJS,
          Next.js, and mobile experiences with React Native.
        </p>
        <div className="mt-[35px]">
          <div className="border-t border-line py-[15px] px-[0]">
            <span className="text-[13px] font-bold">Backend &amp; data</span>
            <p className="text-[14px] my-[5px] mx-[0] text-muted">
              Node.js · Express · NestJS · MongoDB · PostgreSQL
            </p>
          </div>
          <div className="border-t border-line py-[15px] px-[0]">
            <span className="text-[13px] font-bold">Web &amp; mobile</span>
            <p className="text-[14px] my-[5px] mx-[0] text-muted">
              React · Next.js · TypeScript · React Native · Expo
            </p>
          </div>
          <div className="border-t border-line py-[15px] px-[0]">
            <span className="text-[13px] font-bold">Product integrations</span>
            <p className="text-[14px] my-[5px] mx-[0] text-muted">
              Payments · e-signatures · document editing · email
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
