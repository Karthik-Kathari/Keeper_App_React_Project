import React, { useState } from "react";
import "./styles1.css";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="create-area">
      <form className="form">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="this is title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote} className="add-button">
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
