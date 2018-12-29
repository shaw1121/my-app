import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {toggleTodo} from '../actions'

// 监听 Redux store 变化并处理如何过滤出要显示的数据
// 根据当前显示的状态来对 todo 列表进行过滤，并渲染 TodoList。

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
      case 'SHOW_ALL':
      default:
        return todos
    }
}

// 指定如何把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

// connect 的第二个参数是 mapDispatchToProps，它的功能是，将 action 作
// 为 props 绑定到组件上
const mapDispatchToProps = dispatch => ({
        toggleTodo: id => dispatch(toggleTodo(id)) 
})

// 连接React组件与 Redux store
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)


export default VisibleTodoList