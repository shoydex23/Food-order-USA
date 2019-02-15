import React, {Component} from 'react';
import {Card, CardTitle, CardText,Button} from 'reactstrap';
class RenderDishes extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            dishes: this.props.dishes,
        }
    }

    componentDidMount()
    {
        this.setState({dishes: this.props.dishes});
    }

    checkIndex(dish)
    {
        var index=this.props.dishSelected.indexOf(dish.id);
        return (index>=0);
    }

    removeDish(index)
    {
        var par=this.props.dishSelected;
        var ind=this.props.dishSelected.indexOf(index);
        par.splice(ind,1);
        this.props.handleChange(par,0);
    }

    render()
    {
        var menu = this.state.dishes.map((dish) => {
                if (this.checkIndex(dish))    
                {   return (
                    <div key={dish.id} className="col-12 m-1">
                        <Card key={dish.id}>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.id}</CardText>
                        <CardText>{dish.category}</CardText>
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
}

export default RenderDishes;