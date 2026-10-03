export const sampleInvoices = [
  { id: "INV-1042", client: "Studio North", amount: 72000, status: "Paid" },
  { id: "INV-1043", client: "Meridian Labs", amount: 64500, status: "Pending" },
  { id: "INV-1044", client: "Fieldwork Co.", amount: 48000, status: "Paid" },
];

export const invoiceFilters = [
  { value: "all", label: "All invoices" },
  { value: "Pending", label: "Outstanding" },
  { value: "Paid", label: "Paid" },
];

export function formatMoney(amount) {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}
export function getOutstanding(invoices) {
  return invoices.reduce(
    (total, invoice) =>
      total + (invoice.status === "Pending" ? invoice.amount : 0),
    0,
  );
}
