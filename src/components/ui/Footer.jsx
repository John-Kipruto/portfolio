export default function Footer() {
  return (
    <footer className="w-[min(1240px,calc(100%_-_96px))] mx-auto flex items-center justify-between py-[25px] px-[0] border-t border-line text-[12px] text-muted max-[900px]:w-[calc(100%_-_48px)] max-[650px]:w-[calc(100%_-_36px)] max-[650px]:flex-wrap max-[650px]:gap-[20px] max-[650px]:py-[25px] max-[650px]:px-[0]">
      <a
        className="flex gap-[12px] items-center text-[19px] font-bold tracking-[-.6px] text-ink max-[650px]:text-[16px] max-[650px]:gap-[8px]"
        href="#"
      >
        <span className="grid place-items-center bg-ink text-lime w-[36px] h-[36px] font-mono text-[23px] rounded-[5px] max-[650px]:w-[30px] max-[650px]:h-[30px] max-[650px]:text-[20px]">
          JK/
        </span>{" "}
        JOHN KIPRUTO
      </a>
      <span className="max-[650px]:[order:3] max-[650px]:w-full">
        Built with care. Designed to be useful.
      </span>
      <a href="#main">Back to top</a>
    </footer>
  );
}
