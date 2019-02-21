import React, { Component } from "react";
import {Card, CardText, CardTitle} from 'reactstrap';
import {Button} from "react-bootstrap";
import axios from 'axios';
import {Cookies} from 'react-cookie';
import { instanceOf } from "prop-types";

export default class Admin extends Component {
  
  static propTypes = {
    cookies: instanceOf(Cookies)
  };

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      username: "",
      password: "" ,
    };
  }

  fetchOrders()
  {
    const cookies = new Cookies();
    var name= cookies.get("name");
    var pass= cookies.get("pass");
    if(name==="admin" && pass==="password")
    {
      var abcd = btoa(name+":"+pass);
      axios.get('http://localhost:3001/admin',{headers: {"Authorization": `Basic ${abcd}`}})
      .then((response) => {
          const ord = this.handleOrder(response.data);
          ord.reverse();
          this.setState({orders: ord});
      })
      .catch(error => {
      console.log(error);
      this.props.history.push("/");
      });

    }
    else{
      this.props.history.push('/');
    }
  }

  handleOrder(order)
  {
    const ord = order.map((orda) => 
    {
        const x = [0].map(() => {return(<div key="-1">Order no. {order.indexOf(orda)}</div>)});
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
        return xyz;
    });
    return ord;
  }

  render() {

    return (
        <div>
            <div>{this.state.orders}</div>
            <Button onClick={() => {this.fetchOrders()}}>Display</Button>
        </div>
    );
  }
}