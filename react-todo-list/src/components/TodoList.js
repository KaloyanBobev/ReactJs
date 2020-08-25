import React from 'react';

function TodoList(props) {
    const complatedStyle = {
        fontStyle: 'italic',
        color: 'gray',
        textDecoration: 'line-through'
    }

    return (
        <div>
            <li className="todolist">
                <input type="checkbox"
                    checked={props.product.complated}
                    onChange={() => props.handleChange(props.product.id)}
                />
                <label style={props.product.complated ? complatedStyle : null}>Task {props.product.id}: {props.product.text}</label>

            </li>
        </div>
    )
}

export default TodoList;