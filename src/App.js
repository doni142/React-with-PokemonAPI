import './App.css';
import { useState } from 'react';
// import Pokemon from './components/Pokemon';

const Array = [
  {
    name: "John",
    Expertise: " FrontEnd Developer",
    Experience: "3 years",
  },
  {
    name: "Mark",
    Expertise: " BackEnd Developer",
    Experience: "5 years",
  },
  {
    name: "John",
    Expertise: "DevOps Engineer",
    Experience: "7 years",
  },
];

function App() {
  return (
    <>
      <h1>Personal Information</h1>
      <h1>
        {Array.map((element) => {
          return element.Experience;
        })}
      </h1>      
    </>    
  );
}

export default App;

// <Pokemon />
// Array.map(currentValue, index, array) This is how it works!