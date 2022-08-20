import "./components/modal/openModal.scss";
import React from "react"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Popup from "reactjs-popup";
import OpenModal from "./components/modal/OpenModal";

const Board = ({
                   title,
                   desc,
                   date,
                   checked,
                   handleDeleteClick,
                   item,
                   handleEditClick,
                   currentTodo,
                   setCurrentTodo,
                   handleUpdateTodo,
                   isEditing
               }) => {

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

                <Popup
                    trigger={<button className="edit-btn"><EditIcon onClick={() => handleEditClick(item)}/></button>}>
                    {isEditing && <div className="modal-div">
                        <OpenModal
                            currentTodo={currentTodo}
                            setCurrentTodo={setCurrentTodo}
                            handleUpdateTodo={handleUpdateTodo}
                            isEditing={isEditing}
                        />
                    </div>
                    }
                </Popup>
                <button onClick={() => handleDeleteClick(item.id)}><DeleteForeverIcon/></button>
            </div>
        </div>
    )
}

export default Board;