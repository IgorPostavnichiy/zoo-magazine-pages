import React, { Component } from "react";
import Products from "../products/products";
import './item-page.css';
import Categories from "../categories/categories";
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic3.jpg';
import pic4 from './images/pic4.jpg';
import pic5 from './images/pic5.jpg';
import pic6 from './images/pic6.jpg';
import pic7 from './images/pic7.jpg';
import pic8 from './images/pic8.jpg';
import pic9 from './images/pic9.jpg';
import pic10 from './images/pic10.jpg';
import pic11 from './images/pic11.jpg';
import pic12 from './images/pic12.jpg';



{/* <img src={cat} alt="catblock" /> */}

export default class ItemPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentItems: [],
            items: [
                {
                    
                    id: 1,
                    title: 'Savory',
                    img: `${pic1}`,
                    desc: 'Dry dog food',
                    category: 'added'

                },
                {
                    id: 2,
                    title: 'Juststaff',
                    img: `${pic2}`,
                    desc: 'Carrier bag',
                    category: 'added'

                },

                {
                    id: 3,
                    title: 'Sweet dreams',
                    img: `${pic3}`,
                    desc: 'Lawn chair',
                    category: 'not added'

                },

                {
                    id: 4,
                    title: 'French Bulldog',
                    img: `${pic4}`,
                    desc: 'Medallion',
                    category: 'not added'

                },

                {
                    id: 5,
                    title: 'Collar-fast',
                    img: `${pic5}`,
                    desc: 'Roulette',
                    category: 'added'

                },
                {
                    id: 6,
                    title: 'Dog not danger',
                    img: `${pic6}`,
                    desc: 'Muzzle',
                    category: 'not added'

                },
                {
                    id: 7,
                    title: 'Laxary',
                    img: `${pic7}`,
                    desc: 'Dog collar',
                    category: 'not added'

                },
                {
                    id: 8,
                    title: 'Pitch dog',
                    img: `${pic8}`,
                    desc: 'Flying saucer',
                    category: 'added'

                },
                {
                    id: 9,
                    title: 'Acana',
                    img: `${pic9}`,
                    desc: 'Dry dog food',
                    category: 'added'

                },
                {
                    id: 10,
                    title: 'Autumn season',
                    img: `${pic10}`,
                    desc: 'Dog waistcoat',
                    category: 'not added'

                },

                {
                    id: 11,
                    title: 'Aport play',
                    img: `${pic11}`,
                    desc: 'Game bone',
                    category: 'added'

                },

                {
                    id: 12,
                    title: 'Relax',
                    img: `${pic12}`,
                    desc: 'Relax chair',
                    category: 'added'

                },

            ]
        }
        this.state.currentItems = this.state.items
        this.chooseCategory = this.chooseCategory.bind(this)
    }

    render() {
        return (
            
            <>
            <h2>Our products</h2>
            <div className="products-page">
            <Categories chooseCategory={this.chooseCategory} />
            <div className="wrapper">
                <Products items={this.state.currentItems} />
            </div>
            </div></>
        )
    }

    chooseCategory(category) {

        if(category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }

        this.setState({
            currentItems: this.state.items.filter(el =>el.category === category)
        })
    }
}