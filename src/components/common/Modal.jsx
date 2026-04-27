import React from "react";

export default function Modal({ title, children }) {
  return (
    <div className="border p-3 bg-white shadow">
      <h5>{title}</h5>
      {children}
    </div>
  );
}