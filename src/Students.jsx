import { useState } from 'react'

function Students() {

  const [students, setStudents] = useState([
    { id: 'ST001', name: 'Rahul Sharma', course: 'BSc IT', status: 'Active' },
    { id: 'ST002', name: 'Priya Das', course: 'BCA', status: 'Active' },
    { id: 'ST003', name: 'Amit Roy', course: 'BSc IT', status: 'Active' },
    { id: 'ST004', name: 'Sneha Roy', course: 'BCA', status: 'Pending' }
  ])
  const [showForm, setShowForm] = useState(false)

const [formData, setFormData] = useState({
  name: '',
  course: ''
})
const [showModal, setShowModal] = useState(false)
  const [search, setSearch] = useState('')

 const addStudent = () => {
  setFormData({
    name: '',
    course: ''
  })
  setShowModal(true)
}

const saveStudent = () => {
  if (!formData.name.trim() || !formData.course.trim()) {
    alert('Please fill all fields')
    return
  }

  const newStudent = {
    id: 'ST' + String(students.length + 1).padStart(3, '0'),
    name: formData.name,
    course: formData.course,
    status: 'Active'
  }

  setStudents([...students, newStudent])
  setShowModal(false)
}

  const deleteStudent = (id) => {
    if (window.confirm('Delete this student?')) {
      setStudents(students.filter(student => student.id !== id))
    }
  }

  const editStudent = (student) => {
    const newName = prompt('Enter New Name:', student.name)

    if (newName) {
      setStudents(students.map(item =>
        item.id === student.id
          ? { ...item, name: newName }
          : item
      ))
    }
  }

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.id.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="table-section">

      <h1>Students Management</h1>
      <p>Manage all student information here.</p>

      <br />

      <input
        type="text"
        placeholder="Search students..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={addStudent}>
        + Add Student
      </button>

      <br /><br />

      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.status}</td>
              <td>
                <button onClick={() => editStudent(student)}>
                  Edit
                </button>

                <button onClick={() => deleteStudent(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
{showModal && (
  <div className="modal-overlay">
    <div className="modal">
      <h2>Add New Student</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Course"
        value={formData.course}
        onChange={(e) =>
          setFormData({ ...formData, course: e.target.value })
        }
      />

      <button onClick={saveStudent}>Save Student</button>
      <button onClick={() => setShowModal(false)}>Cancel</button>
    </div>
  </div>
)}
    </div>
  )
}

export default Students