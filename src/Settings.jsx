import { useState } from 'react';

function Settings() {
  const [admin, setAdmin] = useState({
    name: 'Admin',
    email: 'admin@gmail.com'
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    alert('Settings saved successfully!');
  };

  return (
    <div className="table-section">
      <h1>Admin Settings</h1>
      <p>Manage your account information.</p>

      <br />

      <label>Admin Name</label>
      <input
        type="text"
        value={admin.name}
        onChange={e => setAdmin({...admin, name: e.target.value})}
      />

      <br /><br />

      <label>Email Address</label>
      <input
        type="email"
        value={admin.email}
        onChange={e => setAdmin({...admin, email: e.target.value})}
      />

      <br /><br />

      <button onClick={handleSave}>Save Settings</button>

      {saved && <p>Settings updated!</p>}
    </div>
  );
}

export default Settings;