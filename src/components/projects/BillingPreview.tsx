export default function BillingPreview() {
  return (
    <div className="h-[305px] py-[20px] px-[26px] overflow-hidden bg-[#e4e9ee] max-[650px]:h-[305px] max-[650px]:p-[20px]">
      <div className="[font:10px_monospace] tracking-[1.1px] [opacity:.75] text-right mb-[23px]">
        INTERACTIVE PORTFOLIO DEMO
      </div>
      <div className="bg-[#fbfcfd] border border-[#d3dce3] rounded-[8px] p-[22px] [box-shadow:0_15px_35px_#23324d12]">
        <div className="flex items-center justify-between text-[11px] text-[#657585]">
          <strong className="text-[19px] text-[#253744] tracking-[-1px]">
            ops<span className="font-normal">desk</span>
          </strong>
          <span>Billing overview</span>
        </div>
        <div className="flex gap-[40px] mt-[20px] mx-[0] mb-[15px] max-[900px]:gap-[20px]">
          <div>
            <small className="block text-[11px] text-[#68727e]">
              Total invoiced
            </small>
            <strong className="text-[22px] font-heading max-[900px]:text-[17px] max-[650px]:text-[22px]">
              KSh 184,500
            </strong>
          </div>
          <div>
            <small className="block text-[11px] text-[#68727e]">
              Outstanding
            </small>
            <strong className="text-[22px] font-heading max-[900px]:text-[17px] max-[650px]:text-[22px]">
              KSh 64,500
            </strong>
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-[#e6eaee] py-[9px] px-[0] text-[11px]">
          <span className="w-[46%] font-semibold">
            INV-1042{" "}
            <small className="block font-normal text-[#6c7480]">
              Studio North
            </small>
          </span>
          <b className="text-[10px] rounded-[20px] py-[3px] px-[9px] font-medium bg-[#e6efe2] text-[#456134]">
            Paid
          </b>
          <strong>72,000</strong>
        </div>
        <div className="flex justify-between items-center border-t border-[#e6eaee] py-[9px] px-[0] text-[11px]">
          <span className="w-[46%] font-semibold">
            INV-1043{" "}
            <small className="block font-normal text-[#6c7480]">
              Meridian Labs
            </small>
          </span>
          <b className="text-[10px] rounded-[20px] py-[3px] px-[9px] font-medium bg-[#fff1d8] text-[#85602a]">
            Pending
          </b>
          <strong>64,500</strong>
        </div>
        <div className="flex justify-between items-center border-t border-[#e6eaee] py-[9px] px-[0] text-[11px]">
          <span className="w-[46%] font-semibold">
            INV-1044{" "}
            <small className="block font-normal text-[#6c7480]">
              Fieldwork Co.
            </small>
          </span>
          <b className="text-[10px] rounded-[20px] py-[3px] px-[9px] font-medium bg-[#e6efe2] text-[#456134]">
            Paid
          </b>
          <strong>48,000</strong>
        </div>
      </div>
    </div>
  );
}
