import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, Button, CardGroup, Col, Row} from 'reactstrap';
import Cart from './Cart/cart';
import {DISHES} from '../shared/dishes';
class Menu extends Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.state={ 
            dishSelected: [],
            dishes: DISHES,
        }
    }

    onSelect(selected)
    {
        const index = this.state.dishSelected.indexOf(selected);
        if(index<0)
        {
            this.state.dishSelected.push(selected);
        }
        this.setState({dishSelected: this.state.dishSelected}); //TO UPDATE in Cart we need to call this function
    }

    handleChange(dishSelectedUpdated)
    {
        this.setState({dishSelected: dishSelectedUpdated});
    }

    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-4">
                    <Card key={dish.id} color="primary" className="col-12 m-1">
                        <CardImg top width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardSubtitle>{dish.category}</CardSubtitle>
                        <CardText>{dish.description}</CardText>
                        <Button id={"button"+dish.id} onClick={() => this.onSelect(dish.id)}>Add to Cart</Button>
                        </CardBody>
                    </Card>
                </div>
            );
        });

    return (
        <div>
            <Row>
                <Col md="9">
                    <CardGroup>
                        { menu } 
                    </CardGroup> 
                </Col>
                <Col md="3">
                    <Cart dishSelected={this.state.dishSelected} handleChange={this.handleChange}/>
                </Col>
            </Row>
        </div>

    );
  }
}
export default Menu;
