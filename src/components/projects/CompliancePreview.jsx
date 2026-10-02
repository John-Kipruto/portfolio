export default function CompliancePreview() {
  return (
    <div
      aria-label="Illustrative compliance interface"
      className="pt-[22px] px-[36px] pb-[0] bg-[#dfeacb] overflow-hidden text-ink max-[900px]:pt-[20px] max-[900px]:px-[20px] max-[900px]:pb-[0] max-[650px]:max-h-[430px] max-[650px]:pt-[20px] max-[650px]:px-[25px] max-[650px]:pb-[0]"
    >
      <div className="[font:10px_monospace] tracking-[1.1px] [opacity:.75] text-right mb-[23px]">
        WORKFLOW ILLUSTRATION / SAMPLE DATA
      </div>
      <div className="[background:white] rounded-[9px_9px_0_0] [box-shadow:0_20px_70px_#33462822] border border-[#cdd9c4] max-w-[470px] mx-auto">
        <div className="flex justify-between py-[18px] px-[20px] border-b border-[#e7ebe4] items-center text-[12px]">
          <strong className="flex gap-[10px] items-center">
            <span className="bg-ink text-white rounded-[4px] py-[3px] px-[7px]">
              sf
            </span>{" "}
            Company workspace
          </strong>
          <span>Acme Ltd</span>
        </div>
        <div className="py-[25px] px-[27px] max-[900px]:py-[22px] max-[900px]:px-[16px] max-[650px]:p-[22px]">
          <p className="[font:10px_monospace] tracking-[1px] text-[#697266]">
            COMPANY FORMATION
          </p>
          <h4 className="font-heading font-semibold tracking-[-1px] leading-[1.12] text-[26px] mt-[15px] mx-[0] mb-[22px]">
            From application
            <br />
            to incorporation.
          </h4>
          <div className="grid gap-[8px]">
            <div className="flex gap-[15px] items-center py-[9px] px-[12px] rounded-[5px]">
              <b className="text-[11px] grid place-items-center w-[28px] h-[28px] border border-[#d1dacc] rounded-[50%] text-[#496432]">
                ✓
              </b>
              <span className="text-[13px] font-semibold">
                Company details
                <small className="block text-[11px] text-[#7a8179] font-normal">
                  Completed
                </small>
              </span>
            </div>
            <div className="flex gap-[15px] items-center py-[9px] px-[12px] rounded-[5px]">
              <b className="text-[11px] grid place-items-center w-[28px] h-[28px] border border-[#d1dacc] rounded-[50%] text-[#496432]">
                ✓
              </b>
              <span className="text-[13px] font-semibold">
                Officials &amp; ownership
                <small className="block text-[11px] text-[#7a8179] font-normal">
                  Completed
                </small>
              </span>
            </div>
            <div className="flex gap-[15px] items-center py-[9px] px-[12px] rounded-[5px] bg-[#f0f6e6] border border-[#d2e1b7]">
              <b className="text-[11px] grid place-items-center w-[28px] h-[28px] border border-[#d1dacc] rounded-[50%] text-[#496432]">
                03
              </b>
              <span className="text-[13px] font-semibold">
                Document signatures
                <small className="block text-[11px] text-[#7a8179] font-normal">
                  Ready for signature
                </small>
              </span>
            </div>
            <div className="flex gap-[15px] items-center py-[9px] px-[12px] rounded-[5px]">
              <b className="text-[11px] grid place-items-center w-[28px] h-[28px] border border-[#d1dacc] rounded-[50%] text-[#496432]">
                04
              </b>
              <span className="text-[13px] font-semibold">
                Registrar review
                <small className="block text-[11px] text-[#7a8179] font-normal">
                  Next stage
                </small>
              </span>
            </div>
          </div>
          <div className="border-t border-[#e6ebe0] mt-[20px] pt-[20px] flex justify-between items-center text-[10px]">
            <span>4 documents prepared</span>
            <span className="bg-[#eef4e5] text-[#496432] py-[4px] px-[8px] rounded-[20px]">
              Signature stage
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
