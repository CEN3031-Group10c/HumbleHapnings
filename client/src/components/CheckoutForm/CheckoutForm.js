import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';
import './CheckoutForm.css'

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
        if (status === 'success'){
            this.setState({complete: true});
        }
    }

    handleChange = ({error}) => {
        if (error){
            this.setState({errorMessage: error.message});
        }
    };


    render(){
        if (this.state.complete){
            return (
                <div className="checkout-card">
                    <h1> Purchase Complete </h1>
                </div>
            )
        }
        else{
            return(
                <div className="checkout-card">
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
            )
        }
    }

}

export default injectStripe(CheckOutForm);