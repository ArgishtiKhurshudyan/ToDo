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

    let changeValue = useRef();

    const handleAdd = () => {
        if (title !== "" || date !== "" || desc !== "") {
            setState([
                ...state,
                {
                    id: Date.now(),
                    title,
                    desc,
                    date
                },
            ])
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
        <form>
            <div className="input-item-div modal">
                <input
                    className="title"
                    placeholder="Title"
                    name="Title"
                    value={isEditing ? currentTodo.title : title}
                    onChange={isEditing ? handleEditInputChangeTitle : (e) => setTitle(e.target.value)}
                />
                <input
                    className="desc"
                    placeholder="Description"
                    value={isEditing ? currentTodo.desc : desc}
                    name="Desc"
                    onChange={isEditing ? handleEditInputChangeDesc : (e) => setDesc(e.target.value)}
                />
                <input
                    className="date"
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
                <button type="submit" onClick={isEditing ? handleUpdateTodo : handleAdd}>{isEditing ? "Update" :
                    <AddIcon/>}</button>
            </div>
        </form>
    )
}

export default OpenModal;