import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import Clock from './Clock';
import Form from './Form';
import {ProductPanel} from './ProductPanel';
import StateUp from './Calculator';
import JsxIndepth from './JsxIndepth';
import Ref from './Ref';

import ContextDemo from './ContextDemo/context-app';

import Chosen from './Chosen/Chosen';
import $ from 'jquery';
import HelloButton from './HelloButton/HelloButton';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './Redux/reducers'
import ReduxApp from './Redux/components/App'


/**
 * 组合
 * @param {*} props 
 */
function FancyBorder(props){
    return(
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function WelcomDialog(){
    return(
        <FancyBorder color = "blue">
            <h1 className="Dialog-title">
                welcom
            </h1>
            <p className="Dialog-message">
                thank you for visting our spacecraft!
            </p>
        </FancyBorder>
    )
}


function App() {
  return (
    <div>
      <Clock.Clock />
      <Form.NameForm />
      <br/>
      <StateUp.Calculator/>
      <WelcomDialog />
      =====================
      {/* <ProductPanel data={data}/>  //为什么不能调用: 导入的是一个对象，要从其中取出组件 */}
      <JsxIndepth.TodoList />
      {/* <JsxIndepth.ListOfTenThings /> */}
      <Ref.CustomTextInput />
      <Ref.AutoFocusTextInput />
      {/* <ContextDemo.ContextApp /> */}
      <Chosen.Example />
    </div>
  );
}

//1. 当 <Clock /> 被传递给 ReactDOM.render() 时，React 调用 Clock 组件的构造函数
// ReactDOM.render(<ProductPanel data={data}/>, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(<HelloButton.HelloButton />,document.getElementById('container'));
// registerServiceWorker();

function UserInfo(props){
    return (
        <div className="UserInfo">
            {/* <Avatar user={props.user} /> */}
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

function Welcom(props){
    return <h1>hello, {props.name}</h1>
}

const element = <Welcom name = "shaw"/>




let store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>,
  document.getElementById('redux')
)

// ReactDOM.render(element, document.getElementById('redux'));


const data = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
