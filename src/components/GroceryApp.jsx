import React, { useState } from "react";
import GroceryListForm from "./GroceryListForm";
import GroceryList from "./GroceryList";
import "../GroceryApp.css";

function GroceryApp() {
  const initialItems = [];
  const [items, setItems] = useState(initialItems);

  function addItem(value) {
    let newItem = {
      name: value.newItem,
      completed: false,
      quantity: 1,
    };
    let newItems = items.concat(newItem);
    newItems.map((item, index) => {
      return (item.id = index);
    });

    setItems(newItems);
  }

  function removeItem(id) {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItems);
  }

  function updateQuantity(id, newQuantity) {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });
    setItems(newItems);
  }

  return (
    <div className="GroceryApp">
      <h2 className="GroceryApp-title">Grocery List</h2>
      <div className="GroceryApp-form">
        <GroceryListForm addItem={addItem} />
      </div>
      <div className="GroceryApp-list">
        <GroceryList
          items={items}
          removeItem={removeItem}
          updateQuantity={updateQuantity}
        />
      </div>
    </div>
  );
}

export default GroceryApp;

/*
- grocery app
  - form
  - list 
    - Item



each item will have
  id
  
  completed
*/
