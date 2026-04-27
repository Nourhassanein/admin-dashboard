export function showToast(message, type = "success") {
  const toast = document.createElement("div");

  const colors = {
    success: "#16a34a",
    error: "#dc2626",
    warning: "#f59e0b",
    info: "#3b82f6"
  };

  toast.innerText = message;

  Object.assign(toast.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: colors[type] || "#333",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    zIndex: 9999,
    opacity: "0",
    transform: "translateY(20px)",
    transition: "all 0.3s ease"
  });

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  }, 50);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}