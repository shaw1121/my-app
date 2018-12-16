import React from 'react';


// 为 DOM 元素添加 Ref
class CustomTextInput extends React.Component{
    constructor(props){
        super(props);
        // 创建 ref 存储 textInput DOM 元素
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
            // 直接使用原生 API 使 text 输入框获得焦点
            // 注意：通过 "current" 取得 DOM 节点
        this.textInput.current.focus();
    }

    render(){
        return(
            // 告诉 React 我们想把 <input> ref 关联到构造器里创建的 `textInput` 上
            <div>
                <input type = "text" ref = {this.textInput} />
                <input type = "button" value = "focus the text input" onClick = {this.focusTextInput} />
            </div>
        )
    }
}

/**
 * 想要包装上面的 CustomTextInput ，来模拟挂载之后立即被点击的话，
 * 可以使用 ref 来访问自定义输入，并手动调用它的 focusTextInput 方法
 * 
 * 为类组件添加 Ref
 */
class AutoFocusTextInput extends React.Component{
    constructor(props){
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount(){
        this.textInput.current.focusTextInput();
    }

    render(){
        return(
            <CustomTextInput ref = {this.textInput} />
        )
    }
}

export default {
    CustomTextInput,
    AutoFocusTextInput
}