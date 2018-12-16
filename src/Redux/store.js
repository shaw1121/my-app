import { createStore } from 'redux';
import todoApp from './reducers';
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions';

const store = createStore(todoApp);

// 可选择的第二个参数，这对于是客户机的状态和运行在服务器上的Redux 应用的 state 相匹配很有用
// const store = createStore(todoApp, window.STATE_FROM_SERVER)

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState));

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe()