import React from 'react';

function Courses() {
  return (
    <div className="courses-page">
      <h2>Courses & Sections</h2>
      <p>Manage all courses here.</p>

      <button>Add Course</button>

      <table>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>C001</td>
            <td>BSc IT</td>
            <td>4 Years</td>
            <td>Edit | Delete</td>
          </tr>

          <tr>
            <td>C002</td>
            <td>BCA</td>
            <td>3 Years</td>
            <td>Edit | Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Courses;