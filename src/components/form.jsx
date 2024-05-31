// components/Formulario.jsx
import React, { useState } from 'react';


function Formulario({ setStudents }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents((prevStudents) => [...prevStudents, { name }]);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <button type="submit">Agregar estudiante</button>
    </form>
  );
}

export default Formulario;