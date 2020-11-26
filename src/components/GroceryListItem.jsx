import React from "react";

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
    <div>
      <li>
        {name}
        <button onClick={subtract} disabled={quantity < 1}>
          -
        </button>
        {quantity}
        <button onClick={add}>+</button>
        <button onClick={remove}>x</button>
      </li>
    </div>
  );
}

export default GroceryListItem;
