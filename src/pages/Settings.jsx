import { useState } from "react";
import ThemeToggle from "../components/ui/ThemeToggle";
import { showToast } from "../utils/toast";

export default function Settings() {
  const [form, setForm] = useState({
    name: "Admin User",
    email: "admin@optichub.com",
    notifications: true
  });

  const [password, setPassword] = useState({
    newPass: "",
    confirmPass: ""
  });

  const saveProfile = () => {
    if (!form.name || !form.email) {
      showToast("Please fill all fields ⚠️", "warning");
      return;
    }

    localStorage.setItem("profile", JSON.stringify(form));
    showToast("Profile updated successfully ✅", "success");
  };

 
  const applySettings = () => {
    localStorage.setItem("notifications", form.notifications);
    showToast("Settings applied ⚙️", "info");
  };

 
  const updatePassword = () => {
    if (!password.newPass || !password.confirmPass) {
      showToast("Fill password fields ⚠️", "warning");
      return;
    }

    if (password.newPass !== password.confirmPass) {
      showToast("Passwords do not match ❌", "error");
      return;
    }

    showToast("Password updated 🔒", "success");
    setPassword({ newPass: "", confirmPass: "" });
  };

  return (
    <div className="container-fluid">

      {}
      <div className="mb-4">
        <h2 className="fw-bold">⚙️ Settings</h2>
        <p className="text-muted">Manage your account and preferences</p>
      </div>

      <div className="row g-4">

        {}
        <div className="col-lg-6">
          <div className="card shadow border-0 p-4">
            <h5 className="mb-3">👤 Profile Settings</h5>

            <input
              className="form-control mb-3"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              className="form-control mb-3"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <button className="btn btn-primary w-100" onClick={saveProfile}>
              Save Changes
            </button>
          </div>
        </div>

        {}
        <div className="col-lg-6">
          <div className="card shadow border-0 p-4">
            <h5 className="mb-3">🖥️ System Settings</h5>

            {}
            <label className="form-label">Theme Mode</label>
            <div className="mb-3">
              <ThemeToggle />
            </div>

            {}
            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={form.notifications}
                onChange={() =>
                  setForm({
                    ...form,
                    notifications: !form.notifications
                  })
                }
              />
              <label className="form-check-label">
                Enable Notifications
              </label>
            </div>

            <button className="btn btn-success w-100" onClick={applySettings}>
              Apply Settings
            </button>
          </div>
        </div>

        {}
        <div className="col-lg-6">
          <div className="card shadow border-0 p-4">
            <h5 className="mb-3">🔒 Security</h5>

            <input
              type="password"
              className="form-control mb-2"
              placeholder="New Password"
              value={password.newPass}
              onChange={(e) =>
                setPassword({ ...password, newPass: e.target.value })
              }
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Confirm Password"
              value={password.confirmPass}
              onChange={(e) =>
                setPassword({ ...password, confirmPass: e.target.value })
              }
            />

            <button className="btn btn-warning w-100" onClick={updatePassword}>
              Update Password
            </button>
          </div>
        </div>

        {}
        <div className="col-lg-6">
          <div className="card shadow border-0 p-4 border-danger">
            <h5 className="mb-3 text-danger">⚠️ Danger Zone</h5>

            <p className="text-muted small">
              These actions are irreversible. Be careful.
            </p>

            <button
              className="btn btn-outline-danger w-100"
              onClick={() => {
                if (window.confirm("Delete all data?")) {
                  localStorage.clear();
                  showToast("System reset successfully 🔥", "error");
                  setTimeout(() => window.location.reload(), 1000);
                }
              }}
            >
              Reset System
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}