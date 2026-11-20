import React from 'react';

function Schedule() {
  return (
    <div className="schedule-page">
      <h2>Schedule Management</h2>
      <p>Manage class schedules here.</p>

      <button>Add Schedule</button>

      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Course</th>
            <th>Time</th>
            <th>Room</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Monday</td>
            <td>BSc IT</td>
            <td>10 AM</td>
            <td>Room 101</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;