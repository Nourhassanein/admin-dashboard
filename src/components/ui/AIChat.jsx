import { useState, useEffect } from "react";

export default function AIChat({ open, setOpen }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I'm OpticAI. How can I help?" }
  ]);
  const [input, setInput] = useState("");

  const getReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("product"))
      return "Go to Products → Add Product.";

    if (msg.includes("order"))
      return "Orders are in the Orders page.";

    if (msg.includes("error") || msg.includes("blank"))
      return "Check console (F12).";

    if (msg.includes("dark"))
      return "Use the theme toggle.";

    return "Try asking about products, orders, or errors.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const botMsg = { from: "bot", text: getReply(input) };

    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "#2563eb",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          cursor: "pointer",
          zIndex: 9999
        }}
      >
        🤖
      </div>

      {/* CHAT */}
      {open && (
        <div
          className="ai-chat"
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 300,
            height: 400,
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 9999
          }}
        >
          <div className="p-2 bg-primary text-white text-center">
            OpticAI
          </div>

          <div style={{ flex: 1, padding: 10, overflowY: "auto" }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  textAlign: m.from === "user" ? "right" : "left",
                  marginBottom: 8
                }}
              >
                <span
                  style={{
                    padding: "6px 10px",
                    borderRadius: 10,
                    background: m.from === "user" ? "#2563eb" : "#e5e7eb",
                    color: m.from === "user" ? "white" : "black"
                  }}
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>

          <div className="p-2 d-flex gap-2">
            <input
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn btn-primary" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}