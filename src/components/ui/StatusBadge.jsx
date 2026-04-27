export default function StatusBadge({ status }) {
  const color =
    status === "Active" ? "success" :
    status === "Pending" ? "warning" :
    "danger";

  return <span className={`badge bg-${color}`}>{status}</span>;
}