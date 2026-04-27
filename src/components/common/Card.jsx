import React from "react";

export default function Card({ title, value }) {
  return (
    <div className="card p-3 shadow-sm text-center">
      <h5>{title}</h5>
      <h2>{value}</h2>
    </div>
  );
}