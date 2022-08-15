import "./openModal.scss"
import React from "react"
import {useState} from "react";
import Board from "../../Board";

const OpenModal = () => {
    const [clicked, setClicked] = useState(false);
    const [click, setClick] = useState(false);
    const [inputValueTitle, setInputValueTitle] = useState("");
    const [inputValueDesc, setInputValueDesc] = useState("");
    const [inputValueDate, setInputValueDate] = useState("");
    const [inputValueCheck, setInputValueCheck] = useState("");
    const [state, setState] = useState([]);


    const handleAddClick = () => {
        setClicked(true)
    }
    const handleAdd = () => {
        setClicked(false)
        setClick(true)
        setState([
            ...state,
            {
                title: inputValueTitle,
                desc: inputValueDesc,
                date: inputValueDate,
                checked: inputValueCheck,
            }
        ])
    }

    return (
        <div>
            <button className="btn-add-todo" onClick={handleAddClick}>Add todo</button>
            <div>
                <input className="title" placeholder="Title" onChange={(e) => setInputValueTitle(e.target.value)}/>
                <input className="desc" placeholder="Description" onChange={(e) => setInputValueDesc(e.target.value)}/>
                <input className="date" type="date" placeholder="Date"
                       onChange={(e) => setInputValueDate(e.target.value)}/>
                <input className="date" type="checkbox" placeholder="Date"
                       onChange={(e) => setInputValueCheck(e.target.value)}/>
                <button onClick={handleAdd}>Add</button>
            </div>


            {state.map((item) => <Board title={item.title} desc={item.desc} date={item.date} checked={item.checked}/>)}

        </div>)
}

export default OpenModal;