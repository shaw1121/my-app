import React from 'react';


//表单
class NameForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        value: ''
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event){
      this.setState({value: event.target.value.toUpperCase()});
    }
  
  
    handleSubmit(event){
      alert('a name was submited: ' + this.state.value);
      event.preventDefault();
    };
  
    render(){
      return(
        <form onSubmit = {this.handleSubmit}>
          <label>
            name:
            <input type="text" value = {this.state.value} onChange = {this.handleChange} />
            <input type="submit" value = "submit" />
          </label>
        </form>
      )
    }
}

//非受控组件
class NameFormUnchecked extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event){
    alert('a name was submited: ' + this.input.value);
    event.preventDefault();
  };

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <label>
          name:
          <input 
            defaultValue = "xiao" //在 React 的生命周期中，表单元素上的 value 属性将会覆盖 DOM 中的值。使用非受控组件时，
                                  //通常你希望 React 可以为其指定初始值，但不再控制后续更新。要解决这个问题，你可以指定
                                  //一个 defaultValue 属性而不是 value
            type="text"
            ref = {(input) => this.input = input} />
          <input type="submit" value = "submit" />
        </label>
      </form>
    )
  }
}

export default {
    NameForm
}