export default function StatCard({ title, value, icon }) {
  return (
    <div className="card shadow-sm p-3 d-flex flex-row align-items-center justify-content-between">

      <div>
        <small className="text-muted">{title}</small>
        <h4 className="fw-bold">{value}</h4>
      </div>

      <div style={{ fontSize: "24px" }}>{icon}</div>

    </div>
  );
}