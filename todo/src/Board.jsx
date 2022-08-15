import "./components/modal/openModal.scss"
import React, {useRef} from "react"


const Board = ({title, desc, date, checked}) => {
    let deleteDiv = useRef()
    const handleClick = () => {

    }


    return (
        <div className="boards" ref={deleteDiv}>
            <h3>{title}</h3>
            <h3>{desc}</h3>
            <h3>{date}</h3>
            <h3>{checked}</h3>

            <button onClick={handleClick}>Delete</button>
        </div>
    )
}


export default Board;