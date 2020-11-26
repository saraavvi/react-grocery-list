import React from "react";
import "../GroceryListItem.css";

function GroceryListItem({ id, name, quantity, removeItem, updateQuantity }) {
  function remove() {
    removeItem(id);
  }

  function add() {
    const newQuantity = quantity + 1;
    updateQuantity(id, newQuantity);
  }

  function subtract() {
    const newQuantity = quantity - 1;
    updateQuantity(id, newQuantity);
  }

  return (
    <div className="GroceryListItem">
      <li>
        {name}
        <div className="GroceryListItem-change">
          <button onClick={subtract} disabled={quantity < 2}>
            -
          </button>
          {quantity}
          <button onClick={add}>+</button>
          <button onClick={remove}>x</button>
        </div>
      </li>
    </div>
  );
}

export default GroceryListItem;
