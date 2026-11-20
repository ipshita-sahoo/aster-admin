import { useState } from 'react';

function Results() {

  const [results, setResults] = useState([
    { id: 'ST001', name: 'Rahul Sharma', subject: 'DBMS', marks: 85 },
    { id: 'ST002', name: 'Priya Das', subject: 'Java', marks: 92 },
    { id: 'ST003', name: 'Amit Roy', subject: 'Python', marks: 76 }
  ]);

  const updateMarks = (id) => {
    const marks = prompt('Enter new marks (0-100):');

    if (marks === null || marks.trim() === '') return;

    const value = Number(marks);

    if (!Number.isInteger(value) || value < 0 || value > 100) {
      alert('Please enter marks between 0 and 100');
      return;
    }

    setResults(results.map(r =>
      r.id === id ? { ...r, marks: value } : r
    ));
  };

  return (
    <div className="table-section">

      <h1>Students & Results</h1>
      <p>Manage student academic performance.</p>

      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {results.map(r => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td>{r.subject}</td>
              <td>{r.marks}</td>
              <td>
                {r.marks >= 90 ? 'A+' :
                 r.marks >= 80 ? 'A' :
                 r.marks >= 70 ? 'B' :
                 r.marks >= 40 ? 'C' : 'Fail'}
              </td>
              <td>
                <button onClick={() => updateMarks(r.id)}>
                  Edit Marks
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Results;