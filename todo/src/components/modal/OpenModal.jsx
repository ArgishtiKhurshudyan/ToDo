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
                     setCurrentTodo,
                   }) => {
  const [type, setType] = useState({
    title: "",
    desc: "",
    date: "",
  });

  const [err, setErr] = useState({
    title: "",
    desc: "",
    date: "",
  })
  const [error, setError] = useState();
  let changeValue = useRef();

  const handleChange = (e) => {
    setType({
      ...type,
      [e.target.name]: e.target.value
    })

    if (isEditing) {
      setCurrentTodo({
        ...currentTodo,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleAdd = (e) => {
    e.preventDefault()
    if (!isEditing) {
      if (type.title.length === 5 && type.desc.length === 8 && type.date !== "") {
        setState([
          ...state,
          {
            id: Date.now(),
            ...type,
          },
        ])
      }
    } else if (isEditing) {
      return handleUpdateTodo()
    }
  }


  function changeCheckbox(e) {
    setCurrentTodo({
        ...currentTodo,
        "checkbox": e.target.value ? changeValue = "done" : null,
      }
    )
  }

  function onBlurEvent(e) {
    if (e.target.value === "") {
      setError({
        border: "2px solid red"
      })
    }
    if (type.title.length !== 5) {
      setErr({
        ...err,
        title: "max size 5",
      })
    } else if (type.desc.length !== 8) {
      setErr({
        ...err,
        desc: "max size 8",
      })
    } else {
      setErr({
        ...err,
        title: "",
        desc: ""
      })
    }
  }

  return (
    <form onSubmit={handleAdd}>
      <div className="input-item-div modal">
        {!isEditing ? err.title && <span style={{color: "red"}}>Title will be 5 digits</span> : ""}
        <input
          placeholder="Title"
          name="title"
          style={type.title === "" ? error : {}}
          value={isEditing && currentTodo.title}
          onChange={handleChange}
          onBlur={onBlurEvent}
        />
        {!isEditing ? err.desc && <span style={{color: "red"}}>Description will be 8 digits</span> : ""}
        <input
          placeholder="Description"
          style={type.desc === "" ? error : {}}
          value={isEditing && currentTodo.desc}
          name="desc"
          onChange={handleChange}
          onBlur={onBlurEvent}
        />
        <input
          type="date"
          name="date"
          value={isEditing && currentTodo.date}
          placeholder="Date"
          style={type.date === "" ? error : {}}
          onChange={handleChange}
          onBlur={onBlurEvent}
        />
        {isEditing &&
        <input
          className="date"
          type="checkbox"
          value={changeValue}
          onChange={changeCheckbox}
        />
        }
        <button type="submit">
          {isEditing ? "Update" : <AddIcon/>}
        </button>
      </div>
    </form>
  )
}

export default OpenModal;