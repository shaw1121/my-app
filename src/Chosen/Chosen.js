import React from 'react';
import $ from 'jquery';

import 'chosen-js/chosen.css';
import 'chosen-js/chosen.jquery.js';
import './Chosen.css'; //导入 css 文件

class Chosen extends React.Component{

    componentDidMount(){
        this.$el = $(this.el);
        this.$el.chosen();

        this.handleChange = this.handleChange.bind(this);
        this.$el.on('change', this.handleChange);
    }

    componentWillUnmount(){
        this.$el.off('change', this.handleChange)
        this.$el.chosen('destroy');
    }

    componentDidUpdate(prevProps){
        if(prevProps.children !== this.props.children){
            this.$el.trigger('chosen:updated')
        }
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render(){
        return(
            <div>
                <select className="Chosen-select" ref={el => this.el = el}>
                    {this.props.children}
                </select>
            </div>
        )

        
    }
}

function Example() {
    return(
        <Chosen onChange={value => console.log(value)}>
            <option >xiao</option>
            <option >yuan</option>
            <option >bao</option>
        </Chosen>
    )
}

export default {
    Example
}