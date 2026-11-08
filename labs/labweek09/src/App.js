import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header({ title, subtitle }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
}

function Student({ id, name, college }) {
  return (
    <>
      <h3>{id}</h3>
      <h4>{name}</h4>
      <h5>{college}</h5>
    </>
  );
}

function App() {
  const [student] = useState({
    id:'101539862',
    name:'Junyong Choi',
    college:'George Brown College, Toronto',
  });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header
          title ="Welcome to Fullstack Development - I"
          subtitle="React JS Programming Week09 Lab exercise"
        />
        <Student id={student.id} name={student.name} college={student.college} />
      </header>
    </div>
  );
}

export default App;
