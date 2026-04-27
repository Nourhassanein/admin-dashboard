import { useState } from "react";
import AIChat from "../components/ui/AIChat";

export default function Support() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [openChat, setOpenChat] = useState(false);  

  const faqs = [
    {
      q: "How do I add a new product?",
      a: "Go to Products page → Click 'Add Product' → Fill details → Save."
    },
    {
      q: "How can I reset my data?",
      a: "Use the Reset button in Products page. This will clear local storage."
    },
    {
      q: "Why is my page blank?",
      a: "Check console errors. Usually caused by missing default export or wrong import."
    },
    {
      q: "How to switch dark/light mode?",
      a: "Use the toggle in the navbar."
    }
  ];

  return (
    <>
      <div className="container-fluid">

        {/* HEADER */}
        <div className="mb-4">
          <h2 className="fw-bold">💬 Help & Support</h2>
          <p className="text-muted">Need help? We’re here for you.</p>
        </div>

        {}
        <div className="row g-3 mb-4">

          {}
          <div className="col-md-4">
            <div className="card shadow border-0 p-3 text-center">
              <h5>📘 Documentation</h5>
              <p className="text-muted small">System guide</p>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => alert("Docs coming soon 📘")}
              >
                View Docs
              </button>
            </div>
          </div>

          {}
          <div className="col-md-4">
            <div className="card shadow border-0 p-3 text-center">
              <h5>🎥 Video Tutorials</h5>
              <p className="text-muted small">Quick walkthroughs</p>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => window.open("https://youtube.com", "_blank")}
              >
                Watch Now
              </button>
            </div>
          </div>

          {}
          <div className="col-md-4">
            <div className="card shadow border-0 p-3 text-center">
              <h5>⚡ Live Chat</h5>
              <p className="text-muted small">Instant help</p>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => setOpenChat(true)} // ✅ CLEAN
              >
                Start Chat
              </button>
            </div>
          </div>

        </div>

        {}
        <div className="card shadow border-0 p-4 mb-4">
          <h5>❓ FAQ</h5>

          {faqs.map((faq, i) => (
            <div key={i} className="mb-2">

              <div
                className="p-3 border rounded d-flex justify-content-between"
                style={{ cursor: "pointer" }}
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              >
                {faq.q}
                <span>{openFAQ === i ? "−" : "+"}</span>
              </div>

              {openFAQ === i && (
                <div className="p-3 text-muted small">
                  {faq.a}
                </div>
              )}

            </div>
          ))}
        </div>

        {}
        <div className="card shadow border-0 p-4">
          <h5>📩 Contact</h5>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent ✅");
            }}
          >
            <div className="row g-2">
              <div className="col-md-6">
                <input className="form-control" placeholder="Name" required />
              </div>
              <div className="col-md-6">
                <input className="form-control" placeholder="Email" required />
              </div>
            </div>

            <textarea
              className="form-control mt-3"
              rows="4"
              placeholder="Your message..."
              required
            />

            <button className="btn btn-primary mt-3">
              Send
            </button>
          </form>
        </div>

      </div>

      {/* ✅ CONTROLLED CHAT */}
      <AIChat open={openChat} setOpen={setOpenChat} />
    </>
  );
}