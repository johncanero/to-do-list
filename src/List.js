import React, { useState } from 'react';
import ToDoItem from './components/ToDoItem';


const List = () => {

    // Create a const and useState to input a function for to-do-list
    // const [name, function]
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);
  
    // Create a const named handleChange and event function
    // Inside add a const named newValue
    // setInputText
    const handleChange = (event) => {
        const newValue = event.target.value;
        setInputText(newValue);  
    }
    
    // Add a const named addItem and setItems function for the button
    // setItems and inputText
    // JavaScript Operator
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
            {/* inputText */}
            {/* handleChange - function */}
            <input 
                onChange={handleChange} 
                type="text" 
                value={inputText} />
                
            {/* Call a Function = addItem */}
            <button onClick={addItem}>
                <span>Add</span>
            </button>
        </div>
        
        <div>
            {/* items */}
            <ul>
                {items.map(todoItem => (
                    <ToDoItem text={todoItem} />))}
            </ul>
        </div>
  </div>
  );
}

export default List