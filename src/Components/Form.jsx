import React, { useState } from 'react';

const Form = () => {
  // 3. Objeto: Manejando un formulario con varios campos y la posibilidad de agregar, editar y eliminar
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const addField = () => {
    setFormData(prevData => ({
      ...prevData,
      age: '' // Añadiendo un nuevo campo
    }));
  };

  const updateField = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const removeField = (field) => {
    const updatedFormData = { ...formData };
    delete updatedFormData[field];
    setFormData(updatedFormData);
  };

  return (
    <div>
      {/* Object Example */}
      <h2>Object (Form Data with Add/Edit/Remove Fields)</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {formData.age !== undefined && (
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleInputChange}
        />
      )}
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      {formData.age !== undefined && <p>Age: {formData.age}</p>}

      {/* Modify the object state */}
      <button onClick={() => updateField('name', 'Updated Name')}>Update Name</button>
      <button onClick={() => addField()}>Add Age Field</button>
      <button onClick={() => removeField('age')}>Remove Age Field</button>
    </div>
  );
};

export default Form;
