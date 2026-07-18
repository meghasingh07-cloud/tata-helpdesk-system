import MainLayout from "../components/layout/MainLayout";
import SettingsForm from "../components/settings/SettingsForm";

  function Settings() {
    return (
      <MainLayout>
          <h1>Settings</h1>
          <p>Manage your account and application preferences.</p>

          <SettingsForm />
      </MainLayout>
    );
  }

export default Settings;