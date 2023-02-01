import React from "react";

//todos = (parametrit?)nimikkeet nuolivalikossa (Näytä kaikki, Suoritettu, Ei suoritettu)
//todo =  eli ne (parametrit?)nimikkeet jotka ilmestyvät siihen alle ilmestyvään listaan (siinä =  se check-merkki ja roskis merkki)

const Tehtava = ({ text, todo, todos, setTodos }) => {
    //Events eli tapahtumat
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
    }));
}
    return (
        <div className="todo">
            <li className = {`todo-item ${todo.completed ? "completed" : '' }`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn" >
                <i className="fas fa-check"></i>
                </button>
            <button onClick={deleteHandler} className="trash-btn"> 
                <i className="fas fa-trash"></i>
                </button>
        </div>
);
};
export default Tehtava;