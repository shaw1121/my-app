import React from 'react';



/**
 * 状态提升
 * https://react.docschina.org/docs/lifting-state-up.html
 * @param {*} props 
 */
function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>would boiling</p>
    }
    
    return <p>will not boil</p>
    
}

//为什么这个不行呢？？？？
// class Calculator extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             temperature: ''
//         };
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e){
//         this.setState = ({
//             temperature: e.target.value
//         })
//     }

//     render(){
//         const temperature = this.state.temperature;
//         return(
//             <fieldset>
//                 <legend>enter a temperature</legend>
//                 <input 
//                     value={temperature} 
//                     onChange = {this.handleChange}/>
//                 <BoilingVerdict 
//                     celsius={parseFloat(temperature)}/>
//             </fieldset>
//         )
//     }
// }


class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            temperature: '',
            scale: 'c'
        }

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature){
        this.setState({
            scale: 'c',
            temperature: temperature //与只加 temperature的区别
        })
    }

    handleFahrenheitChange(temperature){
        this.setState({
            scale: 'f',
            temperature: temperature //与只加 temperature的区别？？
        })
    }

    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;

        const celsius = scale === 'f' ? tryConvert(temperature, toFahrenheit) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toCelsius) : temperature;

        return(
            <div>
                <TemperatureInput 
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange = {this.handleCelsiusChange} />
                <TemperatureInput 
                    scale='f'
                    temperature = {fahrenheit}
                    onTemperatureChange = {this.handleFahrenheitChange}/>
                
                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
            </div>
        )
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = {temperature: ''};
    }
  
    handleChange(e) {
        // this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }
  
    render() {
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;

        const scale = this.props.scale;
        return (
            <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input
                value={temperature}
                onChange={this.handleChange} />

            </fieldset>
        );
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default {
    Calculator
}