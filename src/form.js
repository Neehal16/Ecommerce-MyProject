import React, { useState } from 'react';

function App() {

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      
      alert('Form submitted successfully!');
    }
  };


  const validateForm = (values) => {
    const errors = {};

   
    if (!values.name) {
      errors.name = 'Name is required';
    } else if (values.name.length < 3) {
      errors.name = 'Name must be at least 3 characters long';
    }

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Invalid email format';
    }

   
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <div className="container" style={{ width: '400px' }}>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formValues.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-danger">{errors.name}</span>}
        </div>

        <div className="col-md-12">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>

        <div className="col-12">
          <label htmlFor="mobile" className="form-label">Mobile:</label>
          <input
            type="number"
            className="form-control"
            id="mobile"
            value={formValues.mobile}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {errors.password && <span className="text-danger">{errors.password}</span>}
        </div>

        <div className="col-md-12">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword}</span>}
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default App;
