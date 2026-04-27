export const chartOptions = {
  plugins: {
    legend: {
      labels: {
        color: "#6b7280",
        font: {
          size: 12
        }
      }
    },
    tooltip: {
      backgroundColor: "#111827",
      titleColor: "#fff",
      bodyColor: "#e5e7eb",
      padding: 10,
      cornerRadius: 8
    }
  },
  scales: {
    x: {
      ticks: {
        color: "#6b7280"
      },
      grid: {
        display: false
      }
    },
    y: {
      ticks: {
        color: "#6b7280"
      },
      grid: {
        color: "#e5e7eb"
      }
    }
  }
};


export const barDatasetStyle = {
  backgroundColor: [
    "#3b82f6",
    "#2563eb",
    "#1d4ed8",
    "#1e40af",
    "#1e3a8a"
  ],
  borderRadius: 10
};


export const doughnutDatasetStyle = {
  backgroundColor: [
    "#22c55e",
    "#f59e0b",
    "#ef4444"
  ],
  borderWidth: 2,
  borderColor: "#fff"
};