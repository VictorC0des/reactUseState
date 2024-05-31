// components/StudentCard.jsx
import React from 'react';


function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h2 className="student-name">{student.name}</h2>
    </div>
  );
}

export default StudentCard;