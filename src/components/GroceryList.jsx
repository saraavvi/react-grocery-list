import React from "react";
import GroceryListItem from "./GroceryListItem";
import "../GroceryList.css";

function GroceryList({ items, removeItem, updateQuantity }) {
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
    </div>
  );
}

export default GroceryList;
