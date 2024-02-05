import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

function Todolist(props) {
  return (
    <li className="list-item">
      {props.item}
      <span className='icons'>
        <i className="fas fa-trash icon-delete" 
          onClick={() => {
            props.deleteItem(props.index);
          }}
        ></i>
      </span>
    </li>
  );
}

export default Todolist;
 




