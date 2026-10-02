export default function MobilePreview() {
  return (
    <div className="h-[305px] py-[20px] px-[26px] overflow-hidden bg-[#efd9c8] max-[650px]:h-[305px] max-[650px]:p-[20px]">
      <div className="[font:10px_monospace] tracking-[1.1px] [opacity:.75] text-right mb-[23px]">
        MOBILE PROJECT / EXPERIENCE DESIGN
      </div>
      <div className="flex gap-[15px] justify-between items-center">
        <div>
          <span className="[font:800_42px_Manrope] tracking-[-3px] max-[900px]:text-[30px] max-[650px]:text-[42px]">
            foodi.
          </span>
          <p className="text-[14px] leading-[1.6] max-[900px]:text-[12px] max-[650px]:text-[14px]">
            A little less waiting.
            <br />A lot more flavour.
          </p>
          <div className="flex flex-wrap gap-[5px] max-w-[180px]">
            <span className="text-[10px] border border-[#bd9c81] py-[3px] px-[8px] rounded-[20px]">
              Discover
            </span>
            <span className="text-[10px] border border-[#bd9c81] py-[3px] px-[8px] rounded-[20px]">
              Order
            </span>
            <span className="text-[10px] border border-[#bd9c81] py-[3px] px-[8px] rounded-[20px]">
              Track
            </span>
          </div>
        </div>
        <div className="w-[194px] shrink-0 bg-[#fffcf8] [border:5px_solid_#353029] rounded-[24px_24px_0_0] pt-[16px] px-[13px] pb-[13px] [transform:rotate(5deg)] [box-shadow:0_18px_30px_#76563320] max-[900px]:w-[160px] max-[650px]:w-[172px]">
          <div className="flex justify-between text-[9px] mb-[18px]">
            9:41 <span>● ▰</span>
          </div>
          <strong className="[font:700_23px_Manrope] tracking-[-1px] leading-[1.2]">
            Good food,
            <br />
            close by.
          </strong>
          <div className="bg-[#f1ece6] my-[14px] mx-[0] p-[9px] text-[9px] rounded-[4px] text-[#80746a]">
            Find your next favourite
          </div>
          <div className="flex gap-[7px] items-center py-[12px] px-[0] border-t border-[#eadfd7] text-[10px]">
            <span className="text-[#9a6a42] [font:16px_monospace]">01</span>
            <div>
              Lunch favourites
              <small className="block text-[8px] text-[#92877c]">
                Made for your midday break
              </small>
            </div>
          </div>
          <div className="flex gap-[7px] items-center py-[12px] px-[0] border-t border-[#eadfd7] text-[10px]">
            <span className="text-[#9a6a42] [font:16px_monospace]">02</span>
            <div>
              Local kitchens
              <small className="block text-[8px] text-[#92877c]">
                Discover something new
              </small>
            </div>
          </div>
          <div className="flex justify-between border-t border-[#eadfd7] pt-[14px] text-[8px]">
            Discover <b className="text-[#a3521b]">Home</b> Orders
          </div>
        </div>
      </div>
    </div>
  );
}
