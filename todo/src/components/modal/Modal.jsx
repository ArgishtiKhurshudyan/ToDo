import React from "react";
import "./modal.scss";
const Modal = ({
                   handleEditInputChangeTitle,
                   handleEditInputChangeDate,
                   handleEditInputChangeDesc,
                   currentTodo,
                   handleUpdateTodo
               }) => {
    return (
        <div className="modal">)
            <input className="title" placeholder="Title" name="editTitle" value={currentTodo.title}

                   onChange={handleEditInputChangeTitle}/>
            <input className="desc" placeholder="Description" name="editDesc" value={currentTodo.desc}
                   onChange={handleEditInputChangeDesc}/>
            <input className="date" type="date" placeholder="Date" name="editDate" value={currentTodo.date}
                   onChange={handleEditInputChangeDate}/>

            <button type="submit" onClick={handleUpdateTodo}>Update</button>
        </div>
    )
}

export default Modal

