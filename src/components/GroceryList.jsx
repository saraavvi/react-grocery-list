import React from "react";
import GroceryListItem from "./GroceryListItem";

function GroceryList({ items, removeItem, updateQuantity }) {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <GroceryListItem
            key={index}
            name={item.task}
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
