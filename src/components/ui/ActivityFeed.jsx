export default function ActivityFeed() {
  const data = [
    "New user registered",
    "Order placed",
    "Product updated"
  ];

  return (
    <div className="card p-3">
      <h5>Activity</h5>
      {data.map((d, i) => <p key={i}>⚡ {d}</p>)}
    </div>
  );
}