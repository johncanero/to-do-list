import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import InputArea from './InputArea';


const List = () => {

   
    const [items, setItems] = useState([]);
  
   
    
    // Add a const named addItem and setItems function for the button
    // setItems and inputText
    // JavaScript Operator
    const addItem = (inputText) => {
        setItems(prevItems => {
        return [...prevItems, inputText];
        });
    }

    // Delete on Clicked
    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
              return index !== id;
            });
       });
    }




  return (
    <div className="container">
        <div className="heading">
             <h1>To-Do List</h1>
        </div>

        <InputArea 
            onAdd={addItem}
        />
        
        <div>
            {/* items */}
            <ul>
                {items.map((todoItem, index) => (
                    <ToDoItem 
                    key={index}
                    id={index}
                    text={todoItem}
                    onChecked={deleteItem}
                     />
                ))}
            </ul>
        </div>
  </div>
  );
}

export default List