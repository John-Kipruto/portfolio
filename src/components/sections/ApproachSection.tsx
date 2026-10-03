export default function ApproachSection() {
  return (
    <section
      className="bg-[#17221e] text-white py-[65px] px-[0] max-[650px]:py-[45px] max-[650px]:px-[0]"
      id="approach"
    >
      <div className="w-[min(1240px,calc(100%_-_96px))] mx-auto max-[900px]:w-[calc(100%_-_48px)] max-[650px]:w-[calc(100%_-_36px)]">
        <div className="flex items-end justify-between mb-[35px] max-[650px]:items-start max-[650px]:gap-[20px] max-[650px]:flex-col max-[650px]:mb-[26px]">
          <div>
            <p className="flex justify-between font-mono text-[12px] tracking-[1.4px] leading-[1.5] text-[#d2e8ac]">
              02 / ENGINEERING APPROACH
            </p>
            <h2 className="font-heading font-semibold tracking-[-2px] leading-[1.12] text-[42px] mt-[14px] mx-[0] mb-[0] max-[650px]:text-[33px]">
              Beyond the interface.
            </h2>
          </div>
          <p className="text-[#b3c0b7] text-[14px] m-0 max-[650px]:text-[14px]">
            Good software holds up
            <br />
            when the real world gets complicated.
          </p>
        </div>
        <div className="grid [grid-template-columns:repeat(3,1fr)] gap-[50px] mt-[50px] max-[900px]:gap-[25px] max-[650px]:[grid-template-columns:1fr] max-[650px]:gap-[28px] max-[650px]:mt-[30px]">
          <article>
            <span className="[font:12px_monospace] text-lime">[01]</span>
            <h3 className="font-heading font-semibold tracking-[-.7px] leading-[1.12] text-[21px] mt-[24px] mx-[0] mb-[15px] max-[650px]:my-[14px] max-[650px]:mx-[0]">
              Model the real problem.
            </h3>
            <p className="text-[#b3c0b7] text-[15px] leading-[1.8] m-0">
              Translate business rules into explicit data models, permissions,
              and workflows. Make complex ownership and organization
              relationships understandable.
            </p>
          </article>
          <article className="max-[650px]:pt-[24px] max-[650px]:border-t max-[650px]:border-[#3d4a40]">
            <span className="[font:12px_monospace] text-lime">[02]</span>
            <h3 className="font-heading font-semibold tracking-[-.7px] leading-[1.12] text-[21px] mt-[24px] mx-[0] mb-[15px] max-[650px]:my-[14px] max-[650px]:mx-[0]">
              Build for the edges.
            </h3>
            <p className="text-[#b3c0b7] text-[15px] leading-[1.8] m-0">
              Account for missing data, authorization boundaries, failed
              integrations, and duplicate actions. Treat failure paths as part
              of the product.
            </p>
          </article>
          <article className="max-[650px]:pt-[24px] max-[650px]:border-t max-[650px]:border-[#3d4a40]">
            <span className="[font:12px_monospace] text-lime">[03]</span>
            <h3 className="font-heading font-semibold tracking-[-.7px] leading-[1.12] text-[21px] mt-[24px] mx-[0] mb-[15px] max-[650px]:my-[14px] max-[650px]:mx-[0]">
              Own the whole journey.
            </h3>
            <p className="text-[#b3c0b7] text-[15px] leading-[1.8] m-0">
              Connect the frontend, API, database, and external services. Keep
              the experience consistent from the first form to the final
              document.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
