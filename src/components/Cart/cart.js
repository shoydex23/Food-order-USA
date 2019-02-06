import React, { Component } from 'react';
import {DISHES} from '../../shared/dishes';
import RenderHeading from './RenderHeading';
import RenderDishes from './RenderDishes';
import RenderSubmit from './RenderSubmit';
class Cart extends Component {
    constructor(props){
        super(props);
        console.log(this.props.dishSelected);
        this.state={
            dishes: DISHES,
        }
    }

    componentDidMount()
    {
        this.setState({dishes: DISHES});
        
    }
    
    render() {
        
        return (
            <div>
            <div>
                <RenderHeading dishSelected={this.props.dishSelected}/>
                <RenderDishes dishes={this.state.dishes} dishSelected={this.props.dishSelected} handleChange={this.props.handleChange} />
                <RenderSubmit dishSelected={this.props.dishSelected} handleChange={this.props.handleChange} />
            </div>
            </div>
        );
    }
}

export default Cart;
