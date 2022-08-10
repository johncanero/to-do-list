const ToDoItem = (props) => {


const handleClick = event => {
    if (event.target.style.textDecoration) {
        event.target.style.removeProperty('text-decoration');
    } else {
        event.target.style.setProperty('text-decoration', 'line-through');
    }
    };

  return (
    <li onClick={handleClick}>{props.text}</li>
  )
}

export default ToDoItem