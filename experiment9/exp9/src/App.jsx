
import { useState, useEffect } from 'react';
import './App.css';
function App() {
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // API Data State
  const [users, setUsers] = useState([]);
  // Step 7: Fetch API data using useEffect
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (formData.password.length < 6) tempErrors.password = "Password must be 6+ chars";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Logic to add the new user to the list locally for display
      const newUser = { id: Date.now(), name: formData.name, email: formData.email };
      setUsers([newUser, ...users]);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsSubmitted(false);
  };
  return (
    <div className="container">
      <div className="form-card">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="input-group">
            <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="input-group">
            <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit" className="register-btn">Register</button>
        </form>
        {isSubmitted && <p className="success-msg">Registration Successful!</p>}
        <div className="user-list-section">
          <h3>Registered Users</h3>
          <ul className="user-list">
            {users.map(user => (
              <li key={user.id}>
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App;