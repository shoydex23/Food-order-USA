import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardTitle, CardText,Button} from 'reactstrap';
import {DISHES} from '../../shared/dishes';
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
        console.log("Component Mounted"+this.props.dishSelected);
    }

    checkIndex(dish)
    {
        var index=this.props.dishSelected.indexOf(dish.id);
        if(index<0){
            return false;
        }
        else{
            return true;
        }
    }

    renderHeading()
    {
        if(this.props.dishSelected.length>0)
        {
            return(
                <div>
                    <h3>Order Summary</h3>
                </div>
            )
        }
        else
        {
            return null;
        }
    }

    renderSubmit()
    {
        if(this.props.dishSelected.length>0)
        {
            return(
                <div>
                    <Card>
                    <Button onClick={() => this.props.handleChange([])}>Place your order</Button>
                    </Card>
                </div>
            )
        }
        else
        {
            return null;
        }
    }

    removeDish(index)
    {
        var par=this.props.dishSelected;
        var ind=this.props.dishSelected.indexOf(index);
        par.splice(ind,1)
        this.props.handleChange(par);
    }

    renderDishes()
    {
        var menu = this.state.dishes.map((dish) => {
                if (this.checkIndex(dish))    
                {   return (
                    <div key={dish.id} className="col-12 m-1">
                        <Card key={dish.id}>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.id}</CardText>
                        <Button onClick={()=>this.removeDish(dish.id)}>Remove from Cart</Button>
                        </Card>
                    </div>
                    );
                }
                else{
                    return null;
                }
            });
        
        return menu;
    }

    render() {
        
        return (
            <div>
            <div>
                {this.renderHeading()}
                {this.renderDishes()}
                {console.log(this.props.dishSelected)}
                {this.renderSubmit()}
            </div>
            </div>
        );
    }
}

export default Cart;
