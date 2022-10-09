import React from "react";
import dog from './images/dogs.jpg';
import cat from './images/cats.jpg';
import bird from './images/birds.jpg';
import rodent from './images/rodents.jpg';
import aqua from './images/aqua.jpg';
import exotic from './images/exotic.jpg';
import veterinary from './images/veterinary.jpg';
import grooming from './images/grooming.jpg';
import { Link } from 'react-router-dom';
import './menu-block.css';


const MenuBlock = () => {

    return (
        <>
                <h2>Welcome to ZOO Master</h2>

                <div className="block-item">
                    <div><Link to='/dogs'><img src={dog} alt="dogblock" /></Link></div>
                    <h5>Dogs</h5>
                </div>

                <div className="block-item">
                    <div><img src={cat} alt="catblock" /></div>
                    <h5>Cats</h5>
                </div>

                <div className="block-item">
                    <div><img src={bird} alt="birdblock" /></div>
                    <h5>Birds</h5>
                </div>

                <div className="block-item">
                    <div><img src={rodent} alt="rodentblock" /></div>
                    <h5>Rodents</h5>
                </div>

                <div className="block-item">
                    <div><img src={aqua} alt="aquablock" /></div>
                    <h5>Aqua</h5>
                </div>

                <div className="block-item">
                    <div><img src={exotic} alt="exoticblock" /></div>
                    <h5>Exotic</h5>
                </div>

                <div className="block-item">
                    <div><img src={veterinary} alt="veterinaryblock" /></div>
                    <h5>Veterinary Pharmacy</h5>
                </div>

                <div className="block-item">
                    <div><img src={grooming} alt="groomingblock" /></div>
                    <h5>Grooming</h5>
                </div>    
           
         </>  
    );
}

export default MenuBlock;