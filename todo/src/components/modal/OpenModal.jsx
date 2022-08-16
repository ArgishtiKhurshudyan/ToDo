import "./openModal.scss"
import React, {useEffect} from "react"
import {useState, useRef} from "react";
import Board from "../../Board";
import Modal from "./Modal";

const OpenModal = () => {
    const [clicked, setClicked] = useState(false);
    const [click, setClick] = useState(false);
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

    const [index, setIndex] = useState(0);

    const handleAddClick = () => {
        setClicked(true)
    }
    let changeValue = useRef()
    let checked = useRef()


    const handleAdd = () => {
        setIndex(prev => prev + 1)
        setState([
            ...state,
            {
                id: index,
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

    function handleUpdateTodo(id, updatedTodo) {
        const updatedItem = state.map((todo) => {
            return todo.id === id ? updatedTodo : todo;
        });
        setIsEditing(false);
        setState(updatedItem);
        console.log(updatedItem)
        console.log(currentTodo)
    }

    function handleEditInputChange(e) {
        setCurrentTodo({
                ...currentTodo,
                "title":e.target.value,
                "desc": e.target.value,
                "date": e.target.value,
            }
        )

    }

    return (
        <div>
            <button className="btn-add-todo" onClick={handleAddClick}>Show modal</button>
            {clicked && <div>
                <input className="title" placeholder="Title"  onChange={(e) => setInputValueTitle(e.target.value)}/>
                <input className="desc" placeholder="Description" onChange={(e) => setInputValueDesc(e.target.value)}/>
                <input className="date" type="date" placeholder="Date"
                       onChange={(e) => setInputValueDate(e.target.value)}/>
                <input className="date" type="checkbox" value={changeValue} placeholder="Date"
                       onChange={(e) => setInputValueCheck(e.target.value ? changeValue = "done" : changeValue = "")}/>
                <button onClick={handleAdd}>Add</button>
            </div>
            }

            {state.map((item) => <Board key={item.id} item={item} title={item.title} desc={item.desc} date={item.date}
                                        checked={item.checked} handleClick={handleDelete}
                                        handleEditClick={handleEditClick}/>)
            }

            <div>
                {isEditing && <Modal handleEditInputChange={handleEditInputChange} handleUpdateTodo={handleUpdateTodo}
                                     currentTodo={currentTodo} setInputValueCheck={setInputValueCheck}
                                     changeValue={changeValue}/>}

            </div>
        </div>)
}

export default OpenModal;