import React, { useState } from "react";
import "../GroceryListForm.css";

function GroceryListForm({ addItem }) {
  //state for inputvalue that is a new grocery item
  const [value, setValue] = useState({ newItem: "" });
  // update state based on input change
  function handleChange(event) {
    setValue({ newItem: event.target.value });
  }
  //gets the current value from state
  function handleAddClick(e) {
    addItem(value);
    setValue({ newItem: "" });
    e.preventDefault();
  }

  function handleKeypress(e) {
    if (e.keyCode === 13) {
      handleAddClick();
    }
  }

  return (
    <form className="GroceryListForm">
      <input
        placeholder="New item..."
        type="text"
        onChange={handleChange}
        value={value.newItem}
        onKeyPress={handleKeypress}
      ></input>
      <button onClick={handleAddClick}>Add</button>
    </form>
  );
}

export default GroceryListForm;
