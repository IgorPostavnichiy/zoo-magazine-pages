import React, { Component } from "react";
import './product.css';
import CartState from "../cart-state/cart-state";
import pic1 from '../item-page/images/pic1.jpg';
import pic2 from '../item-page/images/pic2.jpg';
import pic3 from '../item-page/images/pic3.jpg';
import pic4 from '../item-page/images/pic4.jpg';
import pic5 from '../item-page/images/pic5.jpg';
import pic6 from '../item-page/images/pic6.jpg';
import pic7 from '../item-page/images/pic7.jpg';
import pic8 from '../item-page/images/pic8.jpg';
import pic9 from '../item-page/images/pic9.jpg';
import pic10 from '../item-page/images/pic10.jpg';
import pic11 from '../item-page/images/pic11.jpg';
import pic12 from '../item-page/images/pic12.jpg';


export default class Product extends Component {

    render() {

        return (
            <div className="product">
                <img src={this.props.item.img} />
                <h3>{this.props.item.title}</h3>
                <p>{this.props.item.desc}</p>
                <p>{this.props.item.status}</p>
                <CartState />
            </div>
        )
    }
}