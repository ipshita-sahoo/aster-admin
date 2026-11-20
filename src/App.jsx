import './App.css'
import { useState } from 'react'
import Students from './Students'
import Teachers from './Teachers';
import Schedule from './Schedule';
import Courses from './Courses';
import Attendance from './Attendance';
import Results from './Results';
import Settings from './Settings';
import Help from './Help';
function App() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>🎓 EduManage</h2>
        <p>ADMIN PANEL</p>

        <nav>
          <a className="active">▦ Overview</a>
          <a>▣ Schedule Management</a>
          <a>▤ Courses & Sections</a>
          <a>◷ Attendance</a>
          <a>♙ Students & Results</a>
          <a>♟ Teachers</a>
          <a>▣ Students & Teachers</a>
        </nav>

        <div className="sidebar-bottom">
          <a>⚙ Settings</a>
          <a>❔ Help & Support</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Students />
        <Teachers />
        <Schedule />
        <Courses />
        <Attendance />
        <Results/>
        <Settings />
        <Help />
        <header className="topbar">
          <h3>Admin Dashboard</h3>
          <div className="admin-profile">
            🔔 &nbsp; 👤 Admin
          </div>
        </header>

        <section className="welcome">
          <h1>Your Institute, in Focus.</h1>
          <p>Welcome back, Admin! Here's your institute overview.</p>
        </section>

        {/* Statistics */}
        <section className="stats">

          <div className="card">
            <h4>Total Students</h4>
            <h1>768</h1>
            <p>Active students</p>
          </div>

          <div className="card">
            <h4>Total Teachers</h4>
            <h1>36</h1>
            <p>Teaching faculty</p>
          </div>

          <div className="card">
            <h4>Attendance</h4>
            <h1>92%</h1>
            <p>Today's attendance</p>
          </div>

          <div className="card">
            <h4>Active Courses</h4>
            <h1>24</h1>
            <p>Running courses</p>
          </div>

        </section>

        {/* Student Table */}
        <section className="table-section">
          <h2>Recent Students</h2>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Student ID</th>
                <th>Course</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul Sharma</td>
                <td>ST001</td>
                <td>BSc IT</td>
                <td>Active</td>
              </tr>

              <tr>
                <td>Priya Das</td>
                <td>ST002</td>
                <td>BCA</td>
                <td>Active</td>
              </tr>

              <tr>
                <td>Amit Roy</td>
                <td>ST003</td>
                <td>BSc IT</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
        </section>

      </main>
    </div>
  )
}

export default App