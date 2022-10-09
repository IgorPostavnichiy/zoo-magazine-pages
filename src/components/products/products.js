import React, { Component } from "react";
import Product from "../product/product";
import './products.css';

export default class Products extends Component {
    render() {
        return (
            <main>
                {this.props.items.map(el => (
                    <Product key={el.id} item={el} />
                ))}
            </main>
        )
    }
}