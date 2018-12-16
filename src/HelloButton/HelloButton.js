import $ from 'jquery';
import React from 'react';

function Button(props){
    return(
        <button onClick = {props.onClick}>
            Say hello
        </button>
    )
}

function HelloButton(){
    function handleClick(){
        alert('hello');
    }

    return(
        <Button onClick={handleClick} />
    )
}

export default{
    HelloButton
}
