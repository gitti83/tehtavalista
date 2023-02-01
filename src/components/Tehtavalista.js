import React from "react";
import Tehtava from "./Tehtava";


const Tehtavalista = ({todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
        <Tehtava 
        setTodos= {setTodos} 
        todos={todos} 
        key= {todo.id}
        todo={todo} 
        text={todo.text} 
        />
        ))}
      </ul>
    </div>
    );
};

export default Tehtavalista;