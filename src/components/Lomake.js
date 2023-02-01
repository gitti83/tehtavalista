//Tämä on Lomake komponentti
//Lomake kohta näkyy sivustolla 2 kenttänä kun sivusto avataan. Eli tekstikenttä ja valikkokenttä.
import React from "react"; 

//Tänne tulee funktioita
const Lomake = ({setInputText, todos, setTodos, inputText, setStatus}) => {
  const InputTextHandler = (e) => {
    //console.log(e.target.value); Kun kirjoitan tekstikenttään jotain, niin se näkyy console.log:in tulosteessa.
    setInputText(e.target.value)
  }

const submitTodoHandler = (e) => {
  e.preventDefault();
  //^ Tällä voidaan estää sivuston automaattinen päivitys kun painan (+) lisääkseni uuden tehtävän listaan.
  //Toi (e) on lyhenne tapahtumasta (eventistä)
  setTodos([
    ...todos, 
    {text: inputText, completed: false, id: Math.random() * 1000 }
  ]);
  setInputText("");
};
const statusHandler = (e) => {
  setStatus(e.target.value);

}
return (
<form>
    <input value={inputText} onChange={InputTextHandler} type="text" className="todo-input" placeholder="Lisää tehtävä" />
    <button onClick={submitTodoHandler} className="todo-button" type="submit">
      <i className="fas fa-plus-circle"></i>
    </button>

{/* Tässä alkaa se valikko eli se drop-down/nuolivalikko hommeli käyttäen Select-elementtiä*/}

    <div className="select">
      <select onChange={statusHandler} name="todos" className="filter-todo">
        <option value="all">Näytä kaikki</option>
        <option value="completed">Suoritettu</option>
        <option value="uncompleted">Ei suoritettu</option>
      </select>
    </div>
  </form>
)
}
//Tässä exporttaan Lomakkeen, jotta oikea komponentti haetaan kun sille tulee tarve
export default Lomake;