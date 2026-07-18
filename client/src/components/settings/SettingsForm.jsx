import "./SettingsForm.css";
import { useState } from "react";

function SettingsForm() {

  const [profile, setProfile] = useState({
    name: "Admin",
    email: "admin@company.com",
    phone: "+91 9876543210",
    theme: "Light",
    emailNotify: true,
    pushNotify: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProfile({
      ...profile,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const saveSettings = () => {
    alert("Settings Saved Successfully!");
  };

  return (
    <div className="settings-container">

      <div className="settings-card">

        <h2>Profile</h2>

        <input
          name="name"
          value={profile.name}
          onChange={handleChange}
        />

        <input
          name="email"
          value={profile.email}
          onChange={handleChange}
        />

        <input
          name="phone"
          value={profile.phone}
          onChange={handleChange}
        />

      </div>

      <div className="settings-card">

        <h2>Appearance</h2>

        <select
          name="theme"
          value={profile.theme}
          onChange={handleChange}
        >
          <option>Light</option>
          <option>Dark</option>
        </select>

      </div>

      <div className="settings-card">

        <h2>Notifications</h2>

        <label>
          <input
            type="checkbox"
            name="emailNotify"
            checked={profile.emailNotify}
            onChange={handleChange}
          />
          Email Notifications
        </label>

        <label>
          <input
            type="checkbox"
            name="pushNotify"
            checked={profile.pushNotify}
            onChange={handleChange}
          />
          Push Notifications
        </label>

      </div>

      <button
        className="save-settings-btn"
        onClick={saveSettings}
      >
        Save Settings
      </button>

    </div>
  );
}

export default SettingsForm;