import React from "react";

const Modal = ({handleEditInputChange, currentTodo, changeValue, setInputValueCheck, handleUpdateTodo}) => {
    return (
        <div>
            <input className="title" placeholder="Title" value={currentTodo.title}
                   onChange={handleEditInputChange}/>
            <input className="desc" placeholder="Description" value={currentTodo.desc}
                   onChange={handleEditInputChange}/>
            <input className="date" type="date" placeholder="Date" value={currentTodo.date}
                   onChange={handleEditInputChange}/>
            <input className="date" type="checkbox" placeholder="Date"
                   onChange={(e) => setInputValueCheck(e.target.value ? changeValue = "done" : changeValue = "")}/>
            <button onClick={handleUpdateTodo}>update</button>
        </div>
    )
}

export default Modal