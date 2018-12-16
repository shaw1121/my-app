import { combineReducers } from "redux";
import {VisibilityFilters} from './actions'
import {SET_VISIBILITY_FILTER} from './actions'
import {ADD_TODO} from './actions'
import {TOGGLE_TODO} from './actions'

// reducers
const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

const { SHOW_ALL } = VisibilityFilters.SHOW_ALL;

// 将一个大的 reducer 分为两个小的 reducer，各自控制自己的 state
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return  state.map((todo, index) => {
                        if(index === action.index){
                            return Object.assign({}, todo, {
                                completed: !todo.completed
                            })
                        }
                        return todo
                    })
        default:
            return state
    }
}

function todoApp(state = {}, action){
    
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}

export default todoApp

// todoApp 等价于下面的


// const todoApp = combineReducers({
//     visibilityFilter,
//     todos
// })

// 甚至写成下面这样的, key --> value
// export const todoApp = combineReducers( {
//     visibilityFilter: visibilityFilter,
//     todos: todos      
// })

// note: While combineReducers() is a handy helper utility, 
//      you don't have to use it; feel free to write your own root reducer!