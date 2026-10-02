"use client";

import { useState } from "react";
import { introduction } from "@/data/portfolio";
export default function ConnectSection() {
  const [status, setStatus] = useState("");
  const [showIntroduction, setShowIntroduction] = useState(false);
  async function copyIntroduction() {
    try {
      await navigator.clipboard.writeText(introduction);
      setStatus("Introduction copied.");
      setShowIntroduction(false);
    } catch {
      setStatus(
        "Clipboard unavailable. Select and copy the introduction below.",
      );
      setShowIntroduction(true);
    }
  }
  return (
    <section
      className="w-[min(1240px,calc(100%_-_96px))] mx-auto border-t border-line pt-[45px] px-[0] pb-[70px] max-[900px]:w-[calc(100%_-_48px)] max-[650px]:w-[calc(100%_-_36px)] max-[650px]:py-[30px] max-[650px]:px-[0]"
      id="connect"
    >
      <p className="flex justify-between font-mono text-[12px] tracking-[1.4px] leading-[1.5]">
        04 / WHAT’S NEXT
      </p>
      <div className="flex justify-between gap-[70px] items-center max-[900px]:gap-[30px] max-[650px]:flex-col max-[650px]:items-start max-[650px]:gap-[5px]">
        <h2 className="font-heading font-semibold tracking-[-2px] leading-[1.12] text-[48px] my-[20px] mx-[0] max-[900px]:text-[36px] max-[650px]:text-[38px]">
          Useful products.
          <br />
          Interesting problems.
        </h2>
        <div className="max-w-[380px]">
          <p>
            Interested in backend and full-stack roles where I can build,
            contribute, and take ownership.
          </p>
          <p className="text-[13px] text-muted">
            Based in Nairobi · Working across web &amp; mobile
          </p>
          <button
            className="inline-flex items-center justify-center py-[13px] px-[23px] text-[14px] font-semibold border border-[transparent] rounded-[5px] whitespace-nowrap [transition:background_.2s,transform_.2s] hover:-translate-y-0.5 bg-ink text-white hover:bg-[#2d3d33]"
            id="copy-intro"
            onClick={copyIntroduction}
          >
            Copy professional introduction
          </button>
          <span
            className="block min-h-[24px] text-[13px] mt-[8px]"
            id="copy-status"
            role="status"
          >
            {status}
          </span>
          <p hidden={!showIntroduction}>{introduction}</p>
        </div>
      </div>
    </section>
  );
}
