"use client";

import { useEffect, useRef } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  titleId: string;
  label: string;
  children: React.ReactNode;
}

export default function Modal({
  open,
  onClose,
  titleId,
  label,
  children,
}: ModalProps) {
  const dialogRef = useRef({} as HTMLDialogElement);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && !dialog.open) {
      dialog.showModal();
      dialog.scrollTop = 0;
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function closeOnBackdrop(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={closeOnBackdrop}
      className="m-auto max-h-[90vh] w-[min(780px,calc(100%_-_32px))] overflow-auto rounded-xl border-0 bg-paper p-8 text-ink shadow-[0_20px_100px_#0004] max-[650px]:p-[23px]"
    >
      <div className="mb-[25px] flex items-center justify-between border-b border-line pb-[14px]">
        <span className="font-mono text-[11px] leading-[1.5] tracking-[1.4px]">
          {label}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          autoFocus
          className="h-9 w-9 rounded-full border border-line bg-transparent text-2xl leading-none"
        >
          ×
        </button>
      </div>
      {children}
    </dialog>
  );
}
