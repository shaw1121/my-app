

// state shape -->  把 state 当成数据库
// {
//     visibilityFilter: "SHOW_ALL",
//     todos: [
//         {
//             text: 'consider using redux',
//             completed: true
//         },
//         {
//             text: 'keep all state in a single tree',
//             completed: false
//         }
//     ]
// }

// action types
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
}

// action creators, return action
export function addToDo(text){
    return {
        type: ADD_TODO,
        text // es6风格通过使用属性初始化的简写语法可以消除属性名称和局部变量之间的重复书写，当一个对象的属性与本地变量同名时，
             // 不必再写冒号和值，只写属性名即可
    }
}

export function toggleTodo(index){
    return {
        type: TOGGLE_TODO,
        index
    }
}

export function setVisibilityFilter(filter){
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}