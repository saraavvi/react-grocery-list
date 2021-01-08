import React, { useState } from "react";
import GroceryListForm from "./GroceryListForm";
import GroceryList from "./GroceryList";
import "../GroceryApp.css";

function GroceryApp() {
  const initialItems = [
    { name: "bananas", completed: false, quantity: 3, id: 1 },
    { name: "chicken", completed: false, quantity: 1, id: 2 },
    { name: "milk", completed: true, quantity: 2, id: 3 },
  ];
  const [items, setItems] = useState(initialItems);

  function addItem(value) {
    let newItem = {
      name: value,
      completed: false,
      quantity: 1,
    };
    let newItems = [newItem, ...items];
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

  // function updateQuantity(id, newQuantity) {
  //   const newItems = items.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, quantity: newQuantity };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setItems(newItems);
  // }

  function checkItemDone(id) {
    const newItems = items.map((item) => {
      if (item.id === id) {
        console.log(item.completed);
        if (!item.completed) {
          return { ...item, completed: true };
        } else {
          return { ...item, completed: false };
        }
      } else {
        return item;
      }
    });

    newItems.sort(function (a, b) {
      return a.completed - b.completed;
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
          checkItemDone={checkItemDone}
        />
      </div>
    </div>
  );
}

export default GroceryApp;
