import { useState } from "react";

const InputArea = (props) => {

    // Create a const and useState to input a function for to-do-list
    // const [name, function]
    const [inputText, setInputText] = useState("");

    // Create a const named handleChange and event function
    // Inside add a const named newValue
    // setInputText
    const handleChange = (event) => {
        const newValue = event.target.value;
        setInputText(newValue);  
    }

  return (
    <div className="form">
        <input
            id="toDoItem" 
            onChange={handleChange} 
            type="text" 
            value={inputText} />
            
        <button 
            onClick={() => {
            props.onAdd(inputText);
            setInputText("");
          }}
        >
            <span>Add</span>
        </button>
</div>
    
  )
}

export default InputArea