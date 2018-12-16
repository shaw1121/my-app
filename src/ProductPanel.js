import React from 'react';
import ReactDOM from 'react-dom';



class GoodsItem extends React.Component{

    
    render(){
        const name = this.props.stoceked ? this.props.name : <span style={{color: 'red'}}>{this.props.name}</span>;

        return(
            <tr>
                <td>
                    {name}
                </td>
                <td>{this.props.price}</td>
            </tr>
    )}
}

class GoodsCategory extends React.Component{
    render(){
        return(
            <tr><th colSpan="2">{this.props.category}</th></tr>
        )
    }
}

class GoodsPanel extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         category: '',
    //         price: '',
    //         stoceked: false,
    //         name: ''
    //     }
    // }

    render(){
        const rows = [];
        let lastCategory = null;

        this.props.data.forEach(product => {
            if(product.name.indexOf(this.props.filterText) === -1 || (!product.stoceked && this.props.inStockOnly)){
                return
            }

            if(product.category !== lastCategory){
                rows.push(<GoodsCategory category = {product.category} key = {product.category}/>)
            }
            rows.push(<GoodsItem name = {product.name} price = {product.price} key={product.price}/>);
            lastCategory = product.category;
        });
        
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {rows}
                </tbody>

            </table>
        )
    }
}

class SearchPanel extends React.Component{
    
    constructor(props){
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleInstockInputChange = this.handleInstockInputChange.bind(this);
    }

    handleFilterTextInputChange(event){
        this.props.onFilterTextInput(event.target.value);
    }

    handleInstockInputChange(event){
        this.props.onInstockInput(event.target.checked)
    }
    
    render(){
        return(
            <form>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={this.props.filterText} 
                    onChange={this.handleFilterTextInputChange}/>
                <p>
                    <input 
                        type="checkbox" 
                        checked={this.props.inStockOnly} 
                        onChange = {this.handleInstockInputChange}/>
                    {' '}Only show products in stock
                </p>
                            
            </form>
        )
    }
}

class ProductPanel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }

        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleInstockInput = this.handleInstockInput.bind(this);
    }

    handleFilterTextInput(filterText){
        this.setState = {
            filterText: filterText
        }
    };

    handleInstockInput(inStockOnly){
        this.setState = {
            inStockOnly: inStockOnly
        }
    };

    render(){
        return(
            <div>
                ddd
                <SearchPanel 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextInput = {this.handleFilterTextInput}
                    onInstockInput = {this.handleInstockInput}/>
                <GoodsPanel 
                    data={this.props.data}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly} />
            </div>
        )
    }
}

// const data = [
//     {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
//     {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
//     {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
//     {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
//     {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
//     {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
//     {category: "Sporting Goods", price: "$29.99", stocked: true, name: "ball"}
// ];

export {
    ProductPanel
}



// ReactDOM.render(<ProductPanel data={data}/>, document.getElementById('root'));