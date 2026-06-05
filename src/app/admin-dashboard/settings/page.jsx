"use client";

import { Save, Lock, Mail, Bell } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "MUDRA",
    siteDescription: "Predictable staking & Web3 financial ecosystem",
    contactEmail: "admin@MUDRA.com",
    emailNotifications: true,
    maintenanceMode: false,
    maxUsers: 10000,
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="dash-pad">
      <div className="mb-8">
        <h1 className="dash-h1">Settings</h1>
        <p className="dash-sub">Manage platform settings and configurations</p>
      </div>

      {/* Save Success Message */}
      {saved && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
          <p className="text-sm text-green-400">✓ Settings saved successfully</p>
        </div>
      )}

      {/* General Settings */}
      <div className="dash-card mb-6">
        <h2 className="text-lg font-bold text-dashboard-tx mb-6">General Settings</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-dashboard-tx mb-2">
              Site Name
            </label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => handleChange("siteName", e.target.value)}
              className="w-full px-4 py-2 bg-dashboard-sf border border-dashboard-bd rounded-lg text-dashboard-tx outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-dashboard-tx mb-2">
              Site Description
            </label>
            <textarea
              value={settings.siteDescription}
              onChange={(e) => handleChange("siteDescription", e.target.value)}
              rows="3"
              className="w-full px-4 py-2 bg-dashboard-sf border border-dashboard-bd rounded-lg text-dashboard-tx outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-dashboard-tx mb-2">
              Max Users Limit
            </label>
            <input
              type="number"
              value={settings.maxUsers}
              onChange={(e) => handleChange("maxUsers", parseInt(e.target.value))}
              className="w-full px-4 py-2 bg-dashboard-sf border border-dashboard-bd rounded-lg text-dashboard-tx outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Communication Settings */}
      <div className="dash-card mb-6">
        <h2 className="text-lg font-bold text-dashboard-tx mb-6">Communication</h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-dashboard-tx2" />
              <label className="block text-sm font-semibold text-dashboard-tx">
                Contact Email
              </label>
            </div>
            <input
              type="email"
              value={settings.contactEmail}
              onChange={(e) => handleChange("contactEmail", e.target.value)}
              className="w-full px-4 py-2 bg-dashboard-sf border border-dashboard-bd rounded-lg text-dashboard-tx outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="dash-card mb-6">
        <h2 className="text-lg font-bold text-dashboard-tx mb-6">Notifications</h2>
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={(e) =>
                handleChange("emailNotifications", e.target.checked)
              }
              className="w-4 h-4 rounded border-dashboard-bd bg-dashboard-sf text-blue-500 cursor-pointer"
            />
            <span className="text-sm font-medium text-dashboard-tx">
              Enable Email Notifications
            </span>
          </label>
        </div>
      </div>

      {/* Maintenance Mode */}
      <div className="dash-card mb-6">
        <h2 className="text-lg font-bold text-dashboard-tx mb-6">Maintenance</h2>
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={settings.maintenanceMode}
              onChange={(e) =>
                handleChange("maintenanceMode", e.target.checked)
              }
              className="w-4 h-4 rounded border-dashboard-bd bg-dashboard-sf text-red-500 cursor-pointer"
            />
            <span className="text-sm font-medium text-dashboard-tx">
              Enable Maintenance Mode
            </span>
          </label>
          {settings.maintenanceMode && (
            <p className="text-xs text-orange-400 mt-2">
              ⚠️ Platform will be unavailable to users during maintenance
            </p>
          )}
        </div>
      </div>

      {/* Security */}
      <div className="dash-card mb-6">
        <h2 className="text-lg font-bold text-dashboard-tx mb-6 flex items-center gap-2">
          <Lock className="w-5 h-5" />
          Security
        </h2>
        <button className="btn dash-btn bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          Change Admin Password
        </button>
      </div>

      {/* Save Button */}
      <div className="flex gap-4">
        <button
          onClick={handleSave}
          className="btn dash-btn bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          Save Settings
        </button>
        <button className="btn dash-btn-muted">Cancel</button>
      </div>
    </div>
  );
}
