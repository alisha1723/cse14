
import React from 'react';
import Student from './Student';
import './App.css';
function App() {
  return (
    <div className="container">
      <div className="list-container">
        <h1 className="title">Student Information</h1>
        
        <Student 
          name="Rahul Sharma" 
          course="Computer Science" 
          marks="85" 
        />
        
        <Student 
          name="Anita Verma" 
          course="Information Technology" 
          marks="92" 
        />
        
        <Student 
          name="Rohan Gupta" 
          course="Electronics" 
          marks="78" 
        />
      </div>
    </div>
  );
}
export default App;