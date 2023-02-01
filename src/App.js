import React, {useState, useEffect} from "react";
//Koska käytämme komponentissa useState funktiota joka tunnetaan myös ns. "koukkuna" (hook). Niin tämä täytyy importata.
import './App.css';
import Lomake from "./components/Lomake";
import Tehtavalista from "./components/Tehtavalista";

// ^Tuossa on ne importatut(haetut) komponentit

function App() {
//Tila(State)hommelit on tässä. inputText on arvo ja setInputText on funktio joka mahdollistaa inputText arvon muuttamisen.
  const [inputText, setInputText] = useState ("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

//Tästä alkaa funktiot(Functions)
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos (todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
          setFilteredTodos (todos.filter(todo => todo.completed === false));
        break;
        default:
          setFilteredTodos(todos);
        break
    }
  }

//HOOKS
//========
//Tässä ovat hookit joita käytetään sekä lisätessä, että haettaessa tietoa muistista/tallennustilasta sekä voidaksemme hyödyntää useState juttuja.
  useEffect (() => {
    filterHandler();
    setLocalTodos();
  }, [todos, status]);


  useEffect(() => {
    getLocalTodos();
  }, []);


//setItem():
//=====================================================================
//Tällä metodilla lisätään sekä avain, että arvo paikalliselle asemalle
//Tehtävien tallennus paikallisesti
//Eli tällä lisätään vietejä/tehtäviä paikalliseen tallennustilaan
const setLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

//getItem():
//========================================================================
//Tällä metodilla haetaan nimi/arvo paikalliselta asemalta käyttäen avainta
//Tällä taasen voidaan nähdä mitä tietoa ollaan lisätty/haettu (local)paikalliseen tallennustilaan
const getLocalTodos = () => {
  if(localStorage.getItem("todos") ===null) {
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
    let todoLocal = JSON.parse(localStorage.getItem("todos"))
    setTodos(todoLocal);
    // console.log("Paikalliset", todoLocal)
    //;Tällä voi katsoa onko kirjoitettu tieto tallentunut paikallisesti
  }
};

  return (
    <div className="App">
      <header>
      <h1>Tehtävälista</h1>
      </header>

      <Lomake 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
      />

      <Tehtavalista 
      filteredTodos={filteredTodos}
      setTodos= {setTodos} 
      todos={todos}/>
    </div>
  );
}

export default App;