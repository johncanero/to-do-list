const ToDoItem = (props) => {

// Create a const named handleClick to function the onClick line-through
const handleClick = event => {
    if (event.target.style.textDecoration) {
        event.target.style.removeProperty('text-decoration');
    } else {
        event.target.style.setProperty('text-decoration', 'line-through');
    }
    };

  return (
    // onClick referring to function: handleCLick
    <li onClick={handleClick}>{props.text}</li>
  )
}

export default ToDoItem