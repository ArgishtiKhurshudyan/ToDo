import "./openModal.scss"
import React, {useRef} from "react"
import {useState} from "react";
import AddIcon from '@mui/icons-material/Add';


const OpenModal = ({
                       setState,
                       state,
                       isEditing,
                       handleUpdateTodo,
                       currentTodo,
                       setCurrentTodo
                   }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [desc, setDesc] = useState("");
    const [value, setValue] = useState("");

    let changeValue = useRef();
    const handleAdd = (e) => {
        e.preventDefault()
        if (title !== "" && date !== "" && desc !== "") {
            setState([
                ...state,
                {
                    id: Date.now(),
                    title,
                    desc,
                    date
                },
            ])
        } else {
            setValue("pls fil out all fields")
        }
    }

    function handleEditInputChangeDesc(e) {
        setCurrentTodo({
                ...currentTodo,
                "desc": e.target.value,
            }
        )
    }

    function handleEditInputChangeTitle(e) {
        setCurrentTodo({
                ...currentTodo,
                "title": e.target.value,
            }
        )
    }

    function handleEditInputChangeDate(e) {
        setCurrentTodo({
                ...currentTodo,
                "date": e.target.value,

            }
        )
    }

    function handleEditInputChangeCheckbox(e) {
        setCurrentTodo({
                ...currentTodo,
                "checkbox": e.target.value ? changeValue = "done" : null,
            }
        )
    }


    return (
        <form onSubmit={handleAdd}>
            <div className="input-item-div modal">
                <label style={{color:"red"}}>{value}</label>
                <input
                    placeholder="Title"
                    name="Title"
                    value={isEditing && currentTodo.title}
                    onChange={isEditing ? handleEditInputChangeTitle : (e) => setTitle(e.target.value)}
                />
                <input
                    placeholder="Description"
                    value={isEditing && currentTodo.desc}
                    name="Desc"
                    onChange={isEditing ? handleEditInputChangeDesc : (e) => setDesc(e.target.value)}
                />
                <input
                    type="date"
                    name="Date"
                    value={isEditing ? currentTodo.date : date}
                    placeholder="Date"
                    onChange={isEditing ? handleEditInputChangeDate : (e) => setDate(e.target.value)}
                />
                {isEditing &&
                <input
                    className="date"
                    type="checkbox"
                    value={changeValue}
                    onChange={handleEditInputChangeCheckbox}
                />
                }
                <button type="submit" onClick={isEditing ? handleUpdateTodo : null}>{isEditing ? "Update" :
                    <AddIcon/>}</button>
            </div>
        </form>
    )
}

export default OpenModal;