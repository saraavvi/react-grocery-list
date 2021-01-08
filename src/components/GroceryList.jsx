import React from "react";
import GroceryListItem from "./GroceryListItem";
import "../GroceryList.css";

function GroceryList({ items, removeItem, checkItemDone }) {
  // const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="GroceryList">
      {items.map((item, index) => {
        return (
          <GroceryListItem
            key={index}
            name={item.name}
            completed={item.completed}
            removeItem={removeItem}
            checkItemDone={checkItemDone}
            {...item}
          />
        );
      })}
    </div>
  );
}

export default GroceryList;
