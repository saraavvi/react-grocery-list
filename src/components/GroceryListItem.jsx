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
          <button
            className="GroceryListItem-qty-btn"
            onClick={subtract}
            disabled={quantity < 2}
          >
            -
          </button>
          {quantity}
          <button className="GroceryListItem-qty-btn" onClick={add}>
            +
          </button>
          <button className="GroceryListItem-rm-btn" onClick={remove}>
            x
          </button>
        </div>
      </li>
    </div>
  );
}

export default GroceryListItem;
