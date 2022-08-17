import "./openModal.scss"
import React from "react"
import {useState} from "react";
import AddIcon from '@mui/icons-material/Add';


const OpenModal = ({
                       setInputValueTitle,
                       setInputValueDesc,
                       setInputValueDate,
                       setInputValueCheck,
                       handleAdd,
                       changeValue
                   }) => {
    const [clicked, setClicked] = useState(false);
    const handleAddClick = () => {
        setClicked(true)
    }

    const styleCheckbox = {
        width: "34px",
        height: "30px",
    }

    return (
        <div>
            <button className="btn-add-todo" onClick={handleAddClick}>Show modal</button>
            {clicked && <div className="input-item-div">
                <input className="title" placeholder="Title" onChange={(e) => setInputValueTitle(e.target.value)}/>
                <input className="desc" placeholder="Description" onChange={(e) => setInputValueDesc(e.target.value)}/>
                <input className="date" type="date" placeholder="Date"
                       onChange={(e) => setInputValueDate(e.target.value)}/>
                <input style={styleCheckbox} className="checkbox" type="checkbox" value={changeValue} placeholder="Date"
                       onChange={(e) => setInputValueCheck(e.target.value ? changeValue = "done" : changeValue = "")}/>
                <button onClick={handleAdd}><AddIcon/></button>
            </div>
            }
        </div>
    )
}

export default OpenModal;