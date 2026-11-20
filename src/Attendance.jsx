import { useState } from 'react';

function Attendance() {

  const [records, setRecords] = useState([
    { id: 'ST001', name: 'Rahul Sharma', status: 'Present' },
    { id: 'ST002', name: 'Priya Das', status: 'Absent' },
    { id: 'ST003', name: 'Amit Roy', status: 'Present' },
    { id: 'ST004', name: 'Sneha Roy', status: 'Present' }
  ]);

  const changeStatus = (id, status) => {
    setRecords(records.map(student =>
      student.id === id ? { ...student, status } : student
    ));
  };

  const present = records.filter(s => s.status === 'Present').length;
  const absent = records.length - present;

  return (
    <div className="table-section">
      <h1>Attendance Management</h1>
      <p>Manage daily student attendance.</p>

      <div className="stats">
        <div className="card">
          <h4>Total Students</h4>
          <h1>{records.length}</h1>
        </div>

        <div className="card">
          <h4>Present</h4>
          <h1>{present}</h1>
        </div>

        <div className="card">
          <h4>Absent</h4>
          <h1>{absent}</h1>
        </div>
      </div>

      <br />

      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {records.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.status}</td>
              <td>
                <button onClick={() => changeStatus(student.id, 'Present')}>
                  Present
                </button>

                <button onClick={() => changeStatus(student.id, 'Absent')}>
                  Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;