import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()}; // 构造函数初始化状态
  }

  //3. 当 Clock 的输出插入到 DOM 中时，React 调用 componentDidMount() 生命周期钩子
  componentDidMount(){
    this.timerId = setInterval(
      () => this.tick(), 1000 //4.浏览器每秒钟调用 tick() 方法
    )
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  //5.一旦Clock组件被从DOM中移除，React会调用componentWillUnmount()这个钩子函数，定时器也就会被清除。
  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  //2 React 然后调用 Clock 组件的 render() 方法。这时 React 了解屏幕上应该显示什么内容，
  // 然后 React 更新 DOM 以匹配 Clock 的渲染输出。
  render(){
    return(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default {
    Clock
}

// 1. 当 <Clock /> 被传递给 ReactDOM.render() 时，React 调用 Clock 组件的构造函数。 
//   由于 Clock 需要显示当前时间，所以使用包含当前时间的对象来初始化 this.state 。 我们稍后会更新此状态。
// 
// 2. React 然后调用 Clock 组件的 render() 方法。这是 React 了解屏幕上应该显示什么内容，
//   然后 React 更新 DOM 以匹配 Clock 的渲染输出。

// 3. 当 Clock 的输出插入到 DOM 中时，React 调用 componentDidMount() 生命周期钩子。 
//   在其中，Clock 组件要求浏览器设置一个定时器，每秒钟调用一次 tick()。

// 4.  浏览器每秒钟调用 tick() 方法。 在其中，Clock 组件通过使用包含当前时间的对象调用 setState() 
// 来调度UI更新。 通过调用 setState() ，React 知道状态已经改变，并再次调用 render() 方法来确定屏幕上
// 应当显示什么。 这一次，render() 方法中的 this.state.date 将不同，所以渲染输出将包含更新的时间，
// 并相应地更新DOM。

// 5. 一旦Clock组件被从DOM中移除，React会调用componentWillUnmount()这个钩子函数，定时器也就会被清除。
