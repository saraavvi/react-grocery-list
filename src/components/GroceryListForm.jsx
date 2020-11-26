import React, { useState } from "react";

function GroceryListForm({ addItem }) {
  //state for inputvalue that is a new todo
  const [value, setValue] = useState({ newItem: "" });
  // update state based on input change
  function handleChange(event) {
    setValue({ newItem: event.target.value });
  }
  //gets the value from state
  function handleAddClick() {
    addItem(value);
    setValue({ newItem: "" });
  }

  return (
    <div>
      <input
        placeholder="New todo..."
        type="text"
        onChange={handleChange}
        value={value.newItem}
      ></input>
      <button type="button" onClick={handleAddClick}>
        Add
      </button>
    </div>
  );
}

export default GroceryListForm;
