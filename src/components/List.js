import React, { useState } from 'react';

const List = () => {



    // Add const and useState to input a function for to-do-list
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);
  
    // Add a const named handleChange and event function
    // Inside add a const named newValue
    // setInputText
    const handleChange = (event) => {
        const newValue = event.target.value;
        setInputText(newValue);  
    }
    
    // Add a const named addItem and setItems function
    // setItems and inputText
    const addItem = () => {
        setItems(prevItems => {
        return [...prevItems, inputText];
        });

        setInputText("");
    }



  return (
    <div className="container">
        <div className="heading">
             <h1>To-Do List</h1>
        </div>

        <div className="form">
            <input 
                onChange={handleChange} 
                type="text" 
                value={inputText} />
            <button onClick={addItem}>
                <span>Add</span>
            </button>

        </div>
        <div>
            <ul>
                {items.map(todoItem => (
                <li>{todoItem}</li>
                ))}
            </ul>
        </div>
  </div>
  );
}

export default List