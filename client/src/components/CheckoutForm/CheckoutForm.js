import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';
import './CheckoutForm.css'
import {Link} from 'react-router-dom';


const createOptions = () => {
    return {
      style: {
        base: {
          fontSize: '16px',
          color: '#424770',
          fontFamily: 'Open Sans, sans-serif',
          letterSpacing: '0.025em',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#c23d4b',
        },
      }
    }
  };

class CheckOutForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            complete: false,
            errorMessage: '',
        };
    }
    //updating state of parent's show (in EventCreation)
    onClose = (event) => {
        this.props.onClose && this.props.onClose(event)
        this.setState({complete: false});
        
    }

    //updating state of parent's purchaseComplete after the backend of stripe sends confirmation
    onPurchase = (event) =>{
        //if payments has been processed by stripe, return true to parent component
        if (this.state.complete === true){
            this.props.onPurchase && this.props.onPurchase(true)
        }
        //else return false to parent
        else{
            this.props.onPurchase && this.props.onPurchase(false)
        }
    }

    makeAnotherEvent = (event)=>{
        this.props.makeAnotherEvent && this.props.makeAnotherEvent(event)
        this.setState({complete: false});
    }


    //if user clicked submit
    async handleSubmit(event){
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const eventPrice = 100;
        //tokenize card information
        const {token} = await this.props.stripe.createToken();
        //send token to server
        const response = await axios.post("/api/Events/checkout", {
            token,
            eventPrice,
            name,
            email,
        });
        const {status} = response.data;
        console.log("stripe status",status);
        if (status === 'success'){
            this.setState({complete: true});
            //if successful send back purchase confirmation to eventcreation.js (parent component)
            this.onPurchase()
            
        }
    }

    handleChange = ({error}) => {
        if (error){
            this.setState({errorMessage: error.message});
        }
    };



    render(){
        if(!this.props.show){
            return null;
        }
        else{
            if(!this.state.complete){
                return(
                    <div className="checkout-bg-modal">
                        <div className="checkout-card">
                            <div className="checkout-content">
                                <div className="checkout-close" id="checkout-close" onClick={(event) => {this.onClose(event)}}>+</div>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div>
                                        <label>
                                            Name
                                            <input
                                                name="name"
                                                type="text"
                                                placeholder="Jane Smith"
                                                className="checkoutInput"
                                                required
                                            />
                                        </label>
                                        <label>
                                            Email
                                            <input
                                                name="email"
                                                type="email"
                                                placeholder="example@example.com"
                                                className="checkoutInput"
                                                required
                                            />
                                        </label>
                                    </div>
                                    <label>
                                        Card details
                                        <CardElement 
                                            {...createOptions()}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                    <div className="error" role="alert">
                                        {this.state.errorMessage}
                                    </div>
                                    <div>
                                        <button className="checkoutButton">Create Event For $1</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className="checkout-bg-modal">
                        <div className="checkout-card-complete">
                        <div className="checkout-close" id="checkout-close" onClick={(event) => {this.onClose(event)}}>+</div>
                            <div>
                                <h3> Purchase Completed </h3>
                                <div checkout-button-box>
                                <button className="checkoutButton-complete" onClick={(event) => {this.makeAnotherEvent(event)}}>Create Another Event</button>
                                <Link to="/Events"><button className="checkoutButton-complete">See Events</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
        
    }

}

export default injectStripe(CheckOutForm);