// App.js
import React, { useState } from 'react';
import Formulario from './components/form';
import StudentCard from './components/studentCard';
import "./App.css"
function App() {
  const [students, setStudents] = useState([]);

  return (
    <div className="App">
      <Formulario setStudents={setStudents} />
      <div>
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  );
}

export default App;