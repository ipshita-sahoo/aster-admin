import { useState } from 'react';

function Teachers() {
  const [teachers, setTeachers] = useState([
    { id: 'T001', name: 'Anita Sharma', subject: 'Mathematics', email: 'anita@gmail.com' },
    { id: 'T002', name: 'Rahul Das', subject: 'Computer Science', email: 'rahul@gmail.com' },
    { id: 'T003', name: 'Priya Roy', subject: 'English', email: 'priya@gmail.com' }
  ]);

  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: '',
    subject: '',
    email: ''
  });

  const handleSave = () => {
    if (!form.name.trim() || !form.subject.trim() || !form.email.trim()) {
      alert('Please fill all fields');
      return;
    }

    if (editId) {
      setTeachers(teachers.map(t =>
        t.id === editId ? { ...t, ...form } : t
      ));
    } else {
      setTeachers([...teachers, {
        id: 'T00' + (teachers.length + 1),
        ...form
      }]);
    }

    setForm({ name: '', subject: '', email: '' });
    setEditId(null);
    setShowModal(false);
  };

  const handleEdit = (teacher) => {
    setForm({
      name: teacher.name,
      subject: teacher.subject,
      email: teacher.email
    });
    setEditId(teacher.id);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this teacher?')) {
      setTeachers(teachers.filter(t => t.id !== id));
    }
  };

  const filteredTeachers = teachers.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="management-page">

      <h1>Teacher Management</h1>
      <p>Manage all teachers information here.</p>

      <div className="management-toolbar">
        <input
          type="text"
          placeholder="Search teachers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => {
          setForm({ name: '', subject: '', email: '' });
          setEditId(null);
          setShowModal(true);
        }}>
          + Add Teacher
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Teacher ID</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredTeachers.map(teacher => (
              <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>{teacher.name}</td>
                <td>{teacher.subject}</td>
                <td>{teacher.email}</td>
                <td>
                  <button onClick={() => handleEdit(teacher)}>Edit</button>
                  <button onClick={() => handleDelete(teacher.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="student-modal">

            <h2>{editId ? 'Edit Teacher' : 'Add New Teacher'}</h2>

            <input
              type="text"
              placeholder="Teacher Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <button onClick={handleSave}>Save Teacher</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Teachers;