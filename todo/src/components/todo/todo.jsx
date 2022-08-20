import "./todo.scss"
import OpenModal from "../modal/OpenModal";
import React, {useEffect, useState} from "react";
import Board from "../../Board";
import Popup from "reactjs-popup";

const Todo = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});
    const [state, setState] = useState(() => {
        const savedTodos = localStorage.getItem("state");
        if (savedTodos) {
            return JSON.parse((savedTodos))
        } else {
            return []
        }
    });

    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state));
    }, [state]);

    function handleUpdateTodo() {
        const updatedItem = state.map((todo) => {
            return todo.id === currentTodo.id ? currentTodo : todo
        });
        setIsEditing(false);
        setState(updatedItem);
    }

    const handleDelete = (id) => {
        const removeItem = state.filter((todo) => {
            return todo.id !== id
        });
        setState(removeItem)
    }

    function handleEditClick(todo) {
        setIsEditing(true);
        setCurrentTodo({...todo})
    }


    return (
        <>
            <h1>To Do</h1>

            {state.map((item) => <Board key={item.id} item={item} title={item.title}
                                        desc={item.desc} date={item.date}
                                        checked={item.checkbox} handleDeleteClick={handleDelete}
                                        handleEditClick={handleEditClick}
                                        setCurrentTodo={setCurrentTodo}
                                        currentTodo={currentTodo}
                                        handleUpdateTodo={handleUpdateTodo}
                                        isEditing={isEditing}
            />)
            })

            <Popup trigger={<button className="popup-btn">Open Modal</button>}
                   position="top left"
                   className="popup-content"
                   closeOnDocumentClick>
                <div className="modal-div">
                    <OpenModal setState={setState} state={state}/>
                </div>
            </Popup>
        </>
    )
}

export default Todo;
