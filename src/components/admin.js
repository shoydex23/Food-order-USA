import React, { Component } from "react";
import {Card, CardText, CardTitle} from 'reactstrap';
import {Button} from "react-bootstrap";
import axios from 'axios';

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: []
    };
  }

  componentDidMount()
  {
      this.displayOrders();
  }

  displayOrders()
  {
    axios.get('http://localhost:3001/order')
    .then((response) => {
        const ord = this.handleOrder(response.data);
        ord.reverse();
        this.setState({orders: ord});
        console.log(response.data);
        console.log(this.state.orders);
    })
    .catch(error => {
    console.log(error);
    });
  }

  handleOrder(order)
  {
    const ord = order.map((orda) => 
    {
        //console.log(this.state.orders.indexOf(order));
        console.log(orda);
        const x = [0].map(() => {return(<div key="-1">{orda._id}</div>)});
        console.log(x);
        const abc = orda.orders.map((dish)=> {
               return (
                <div key={dish.id} className="col-4 m-1">
                    <Card key={dish.id}>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.id}</CardText>
                    </Card>
                </div>
            )
        });
        const y= [0].map(() => {return(<div key="-2"><br></br></div>)});
        var bca = x.concat(abc);
        var xyz = bca.concat(y);
        console.log(xyz);
        return xyz;
    });
    return ord;
  }

  render() {

    const menu = this.state.orders.map((order) => {return(this.handleOrder([]))});
    
    return (
        <div>
            <div>{this.state.orders}</div>
            <div>{menu}</div>
            <Button onClick={()=>this.displayOrders()}>Display</Button>
        </div>
    );
  }
}