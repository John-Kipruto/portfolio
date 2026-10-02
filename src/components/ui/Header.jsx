export default function Header() {
  return (
    <header className="w-[min(1240px,calc(100%_-_96px))] mx-auto flex items-center justify-between py-[30px] px-[0] border-b border-line max-[900px]:w-[calc(100%_-_48px)] max-[650px]:w-[calc(100%_-_36px)] max-[650px]:py-[20px] max-[650px]:px-[0]">
      <a
        aria-label="Portfolio home"
        className="flex gap-[12px] items-center text-[19px] font-bold tracking-[-.6px] max-[650px]:text-[16px] max-[650px]:gap-[8px]"
        href="#"
      >
        <span className="grid place-items-center bg-ink text-lime w-[36px] h-[36px] font-mono text-[23px] rounded-[5px] max-[650px]:w-[30px] max-[650px]:h-[30px] max-[650px]:text-[20px]">
          JK/
        </span>{" "}
        JOHN KIPRUTO
        <span className="text-[11px] tracking-[1.5px] text-muted font-medium ml-[12px] max-[900px]:hidden">
          SELECTED WORK
        </span>
      </a>
      <nav
        aria-label="Main navigation"
        className="flex gap-[30px] text-[14px] max-[650px]:gap-[16px] max-[650px]:text-[13px]"
      >
        <a
          className="hover:underline hover:underline-offset-[5px]"
          href="#work"
        >
          Work
        </a>
        <a
          className="hover:underline hover:underline-offset-[5px]"
          href="#approach"
        >
          Approach
        </a>
        <a
          className="hover:underline hover:underline-offset-[5px]"
          href="#about"
        >
          About
        </a>
        <a
          className="hover:underline hover:underline-offset-[5px] border-l border-line pl-[30px] max-[650px]:hidden"
          href="#connect"
        >
          Connect
        </a>
      </nav>
    </header>
  );
}
