import React from 'react';
import Modal from "../modal/Modal";

const EditTodo = ({isEditing, currentTodo, setCurrentTodo, setInputValueCheck, changeValue, handleUpdateTodo}) => {

    function handleEditInputChangeTitle(e) {
        setCurrentTodo({
                ...currentTodo,
                "title": e.target.value,
            }
        )
    }

    function handleEditInputChangeDesc(e) {
        setCurrentTodo({
                ...currentTodo,
                "desc": e.target.value,
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

    return (
        <>

            <div>
                {isEditing && <Modal handleEditInputChangeTitle={handleEditInputChangeTitle}
                                     handleEditInputChangeDate={handleEditInputChangeDate}
                                     handleEditInputChangeDesc={handleEditInputChangeDesc}
                                     handleUpdateTodo={handleUpdateTodo}
                                     currentTodo={currentTodo}
                                     setInputValueCheck={setInputValueCheck}
                                     changeValue={changeValue}/>}
            </div>
        </>
    );
};

export default EditTodo;