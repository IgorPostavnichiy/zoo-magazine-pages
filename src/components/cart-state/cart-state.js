import React, {Component } from "react";
import './cart-state.css';
import IconSucces from "../icon-success/icon-success";
import IconRemove from "../icon-remove/icon-remove";
import { ChangeGreeting } from "./ChangeGreeting";


export default class CartState extends Component {

    constructor(props) {
        super(props);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleAddnotClick = this.handleAddnotClick.bind(this);
        this.state = {isAddedIn: false};

      }
    
      handleAddClick() {
        this.setState({isAddedIn: true});
      }
    
      handleAddnotClick() {
        this.setState({isAddedIn: false});
      }

    render() {

        const isAddedIn = this.state.isAddedIn;
        let button;
    
        if (isAddedIn) {
          button = <AddnotButton onClick={this.handleAddnotClick} />;
        } else {
          button = <AddButton onClick={this.handleAddClick} />;
        }

        return (
            <>
        <span className='todo-list-item'>
                <div className="added-block">
                  <Greeting isAddedIn={isAddedIn} />
                  {button}
                </div>
                <button 
                    type="button"
                    className="btn btn-outline-danger">
                    <i className="fa fa-trash-o" />
                </button>
        
                <button 
                    type="button"
                     className="btn btn-info">
                    <i className="fa fa-search"></i>View
                </button>
        </span>
            </>
    
        );
    };  
}

  function AddGreeting(props) {
    const style = {
        background: '#AFEEEE',
        color: '#DC143C',
        fontSize: 15,
        width: 170,
        margin: 'auto',
        padding: 10
        
    };
    return <h1 style={style}>Not added</h1>;
  }
  
  function Greeting(props) {
    const isAddedIn = props.isAddedIn;
    if (isAddedIn) {
      return <ChangeGreeting />;
    }
    return <AddGreeting />;
  }
  
  function AddButton(props) {
    return (
      <button 
      className="btn btn-outline-success"
      onClick={props.onClick}>
        <IconSucces />
      </button>
    );
  }
  
  function AddnotButton(props) {
    return (
      <button
      className="btn btn-secondary" 
      onClick={props.onClick}>
        <IconRemove />
      </button>
    );
  }