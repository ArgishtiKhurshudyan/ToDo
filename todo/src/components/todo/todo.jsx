import "./todo.scss"
import OpenModal from "../modal/OpenModal";
import React, {useEffect, useRef, useState} from "react";
import Board from "../../Board";
import EditTodo from "../editTodo/EditTodo";

const Todo = () => {
    const [inputValueTitle, setInputValueTitle] = useState("");
    const [inputValueDesc, setInputValueDesc] = useState("");
    const [inputValueDate, setInputValueDate] = useState("");
    const [inputValueCheck, setInputValueCheck] = useState("");
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

    let changeValue = useRef()

    const handleAdd = () => {
        setState([
            ...state,
            {
                id: Date.now(),
                "title": inputValueTitle,
                "desc": inputValueDesc,
                "date": inputValueDate,
                "checked": inputValueCheck,
            }
        ])
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

    function handleUpdateTodo() {
        const updatedItem = state.map((todo) => {
            return todo.id === currentTodo.id ? currentTodo : todo;
        });
        setIsEditing(false);
        setState(updatedItem);
    }

    return (
        <>(
            <h1>To Do</h1>
            <OpenModal changeValue={changeValue} setInputValueTitle={setInputValueTitle}
                       setInputValueDesc={setInputValueDesc} setInputValueDate={setInputValueDate}
                       setInputValueCheck={setInputValueCheck} handleAdd={handleAdd}/>

            {state.map((item) => <Board handleUpdateTodo={handleUpdateTodo}
                                        key={item.id} item={item} title={item.title}
                                        desc={item.desc} date={item.date}
                                        checked={item.checked} handleDeleteClick={handleDelete}
                                        handleEditClick={handleEditClick}/>)
            })

            <EditTodo isEditing={isEditing} currentTodo={currentTodo}
                      setCurrentTodo={setCurrentTodo}
                      setInputValueCheck={setInputValueCheck}
                      changeValue={changeValue}
                      handleUpdateTodo={handleUpdateTodo}
            />
        </>


    )
}

export default Todo;