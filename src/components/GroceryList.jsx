import React from "react";
import GroceryListItem from "./GroceryListItem";
import "../GroceryList.css";

function GroceryList({ items, removeItem, updateQuantity }) {
  // calculate total items in grocery list
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="GroceryList">
      {items.map((item, index) => {
        return (
          <GroceryListItem
            key={index}
            name={item.name}
            removeItem={removeItem}
            quantity={item.quantity}
            updateQuantity={updateQuantity}
            {...item}
          />
        );
      })}
      <div className="GroceryList-total">
        <h2>Total: {totalItems}</h2>
      </div>
    </div>
  );
}

export default GroceryList;
