const ToDoItem = (props) => {

// 1. Create a const named handleClick to function the onClick line-through

// const handleClick = event => {
//     if (event.target.style.textDecoration) {
//         event.target.style.removeProperty('text-decoration');
//     } else {
//         event.target.style.setProperty('text-decoration', 'line-through');
//     }
//     };


// 2. Create a Function to Delete an Item when clicked

  return (
    // onClick referring to function: handleCLick
    <div
        onClick={() => {
        props.onChecked(props.id);
        }}>
        <li>{props.text}</li>
  </div>
  )
}

export default ToDoItem