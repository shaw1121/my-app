import React from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'
import toggleTodo  from '../actions';

const TodoList = ({todos, toggleTodo}) => (
    <ul>
        {/* onTodoClick(index: number) 当 todo 项被点击时调用的回调函数 */}
        {todos.map((todo, index) =>(
            
            <Todo key={todo.id} {...todo} onClick = {() => toggleTodo(todo.id)} />    // 使用箭头函数无需再使用 this.handleClick = this.handleClick.bind(this);
            
        ))}
    </ul>
)

TodoList.prototype = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ),
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList