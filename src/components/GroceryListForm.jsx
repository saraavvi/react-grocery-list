import React, { useState } from "react";
import "../GroceryListForm.css";

function GroceryListForm({ addItem }) {
  //state for inputvalue that is a new grocery item
  const [value, setValue] = useState("");
  // update state based on input change
  function handleChange(event) {
    setValue(event.target.value);
  }
  //gets the current value from state
  function handleAddClick(e) {
    if (value !== "") {
      addItem(value);
      setValue("");
    }

    e.preventDefault();
  }

  function handleKeypress(e) {
    if (e.keyCode === 13) {
      handleAddClick();
    }
  }

  return (
    <form onSubmit={handleAddClick} className="GroceryListForm">
      <input
        maxLength="18"
        placeholder="New item..."
        type="text"
        onChange={handleChange}
        value={value}
        onKeyPress={handleKeypress}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default GroceryListForm;
