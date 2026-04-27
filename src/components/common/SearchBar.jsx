import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="form-control mb-3"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
}