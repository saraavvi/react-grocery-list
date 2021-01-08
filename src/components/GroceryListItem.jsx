import React from "react";
import "../GroceryListItem.css";

function GroceryListItem({ id, name, removeItem, completed, checkItemDone }) {
  function remove() {
    removeItem(id);
  }

  // function add() {
  //   const newQuantity = quantity + 1;
  //   updateQuantity(id, newQuantity);
  // }

  // function subtract() {
  //   const newQuantity = quantity - 1;
  //   updateQuantity(id, newQuantity);
  // }

  function handleCheck() {
    checkItemDone(id);
  }

  return (
    <div className="GroceryListItem">
      {completed ? (
        <li className="GroceryListItem-completed">
          <box-icon
            onClick={handleCheck}
            name="check-circle"
            type="solid"
            color="#ffffff"
          ></box-icon>
          {name}
          <button className="GroceryListItem-rm-btn" onClick={remove}>
            <box-icon name="trash"></box-icon>
          </button>
        </li>
      ) : (
        <li>
          <box-icon
            onClick={handleCheck}
            name="circle"
            type="solid"
            color="#ffffff"
          ></box-icon>
          {name}
          <button className="GroceryListItem-rm-btn" onClick={remove}>
            <box-icon name="trash"></box-icon>
          </button>
        </li>
      )}
    </div>
  );
}

export default GroceryListItem;
