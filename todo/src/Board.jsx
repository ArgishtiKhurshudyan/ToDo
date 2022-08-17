import "./components/modal/openModal.scss";
import React from "react"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const Board = ({title, desc, date, checked, handleDeleteClick, item, handleEditClick}) => {

    return (
        <div className="boards" key={item.id}>
            <div className="item">
                <span>Title</span>
                <h3>{title}</h3>
            </div>
            <div className="item">
                <span>Description</span>
                <h3>{desc}</h3>
            </div>
            <div className="item">
                <span>Date</span>
                <h3>{date}</h3>
            </div>
            <div className="item">
                <span>Status</span>
                <h3>{checked}</h3>
            </div>
            <div>
                <button className="edit-btn" onClick={() => handleEditClick(item)}><EditIcon/></button>
                <button onClick={() => handleDeleteClick(item.id)}><DeleteForeverIcon/></button>
            </div>

        </div>
    )
}


export default Board;