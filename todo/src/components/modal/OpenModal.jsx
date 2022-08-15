import  "./openModal.scss"
import {useRef, useState} from "react";
import {logDOM} from "@testing-library/react";


const OpenModal = () => {
    const  [clicked, setClicked] = useState(false);
    const  [click, setClick] = useState(false);
    const  [inputValueTitle, setInputValueTitle] = useState("");
    const  [inputValueDesc, setInputValueDesc] = useState("");
    const  [inputValueDate, setInputValueDate ]= useState("");
    const  [obj, setObj] = useState([]);

    // const inputValue = useRef();
let addItems = false;
    const handleAddClick = () => {
        setClicked(true)
    }
    const handleAdd = () => {
        // setClicked(false)
        setClick(true)
        obj.title = inputValueTitle;
        obj.desc = inputValueDesc;
        obj.date = inputValueDate;

        console.log(obj)
    }



    return (
        <>
         <button className="btn-add-todo" onClick={handleAddClick}>Add todo</button>
            {clicked && <div>
                <input className="title" placeholder="Title"   onChange={(e) => setInputValueTitle(e.target.value)}/>
                <input className="desc" placeholder="Description"   onChange={(e) => setInputValueDesc(e.target.value)}/>
                <input className="date" type="date"  placeholder="Date"   onChange={(e) => setInputValueDate(e.target.value)}/>
                <button onClick={handleAdd}>Add</button>
            </div>
            }
            <>
                {click && obj.map((item) => <h1>{item}</h1>)}
            </>


        </>
    )
}

export  default OpenModal;