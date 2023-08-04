import './App.css';
import { useState } from 'react';
import {Login} from "./component/Login";
import { Register } from "./component/Register"
import Cards from './component/Cards';


function App() {
  const [currentForm,setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
 
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
      <Cards/>
    </div>
  );
}

export default App;
