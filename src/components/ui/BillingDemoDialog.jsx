"use client";

import { useState } from "react";
import Modal from "./Modal";
import {
  sampleInvoices,
  invoiceFilters,
  formatMoney,
  getOutstanding,
} from "@/data/invoices";

export default function BillingDemoDialog({ open, onClose }) {
  const [invoices, setInvoices] = useState(() =>
    sampleInvoices.map((invoice) => ({ ...invoice })),
  );
  const [filter, setFilter] = useState("all");
  const [status, setStatus] = useState(
    "Sample data. No payments are processed.",
  );
  const total = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  const visibleInvoices = invoices.filter(
    (invoice) => filter === "all" || invoice.status === filter,
  );

  function markPaid(id) {
    setInvoices((current) =>
      current.map((invoice) =>
        invoice.id === id ? { ...invoice, status: "Paid" } : invoice,
      ),
    );
    setStatus(`${id} marked as paid in the demo. No payment was processed.`);
  }
  function resetDemo() {
    setInvoices(sampleInvoices.map((invoice) => ({ ...invoice })));
    setFilter("all");
    setStatus("Demo reset. Sample data. No payments are processed.");
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      titleId="demo-title"
      label="OPSDESK / INTERACTIVE DEMO"
    >
      <h2
        id="demo-title"
        className="my-[0.83em] text-4xl tracking-[-1.5px] max-[650px]:text-[29px]"
      >
        Billing workspace
      </h2>
      <p className="text-muted">
        Explore sample invoices and mark an outstanding invoice as paid. Changes
        stay in this demo session.
      </p>
      <div className="my-[25px] flex gap-[60px] rounded-md bg-[#e9eee3] p-5 max-[650px]:gap-[25px] max-[650px]:p-[15px]">
        {[
          ["Total invoiced", total],
          ["Outstanding", getOutstanding(invoices)],
        ].map(([label, amount]) => (
          <div key={label}>
            <span className="block text-[13px]">{label}</span>
            <strong className="font-heading text-[27px] font-semibold max-[650px]:text-xl">
              {formatMoney(amount)}
            </strong>
          </div>
        ))}
      </div>
      <div
        role="group"
        aria-label="Filter invoices"
        className="mb-5 flex flex-wrap gap-2"
      >
        {invoiceFilters.map((option) => (
          <button
            type="button"
            key={option.value}
            aria-pressed={filter === option.value}
            onClick={() => setFilter(option.value)}
            className={`rounded-[5px] border border-line px-[13px] py-2 text-sm ${filter === option.value ? "bg-ink text-white" : "bg-transparent"}`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="overflow-auto">
        <table className="w-full border-collapse text-sm max-[650px]:min-w-[420px]">
          <thead>
            <tr>
              {["Invoice / client", "Amount", "Status", "Action"].map(
                (label) => (
                  <th
                    scope="col"
                    key={label}
                    className="border-b border-line px-2.5 py-[14px] text-left text-xs font-medium text-muted max-[650px]:px-1.5 max-[650px]:py-3"
                  >
                    {label}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {visibleInvoices.length ? (
              visibleInvoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td className="border-b border-line px-2.5 py-[14px]">
                    <strong>{invoice.id}</strong>
                    <small className="block text-xs text-muted">
                      {invoice.client}
                    </small>
                  </td>
                  <td className="border-b border-line px-2.5 py-[14px] whitespace-nowrap">
                    {formatMoney(invoice.amount)}
                  </td>
                  <td className="border-b border-line px-2.5 py-[14px]">
                    <span
                      className={`rounded-full px-[9px] py-[3px] text-xs font-medium whitespace-nowrap ${invoice.status === "Paid" ? "bg-[#e6efe2] text-[#456134]" : "bg-[#fff1d8] text-[#85602a]"}`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="border-b border-line px-2.5 py-[14px]">
                    {invoice.status === "Pending" ? (
                      <button
                        type="button"
                        onClick={() => markPaid(invoice.id)}
                        className="rounded bg-[#dceecc] px-2.5 py-[7px] text-xs whitespace-nowrap"
                      >
                        Mark as paid
                      </button>
                    ) : (
                      <span aria-label="No action required">—</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="border-b border-line px-2.5 py-[14px]"
                >
                  No outstanding invoices. You’re all caught up.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p role="status" className="min-h-[25px] text-[13px] text-muted">
        {status}
      </p>
      <button
        type="button"
        onClick={resetDemo}
        className="bg-transparent p-0 text-left text-sm font-semibold hover:underline hover:underline-offset-[5px]"
      >
        Reset demo
      </button>
    </Modal>
  );
}
