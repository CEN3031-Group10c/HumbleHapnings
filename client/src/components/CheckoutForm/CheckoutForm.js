import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckOutForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {complete: false};
        this.submit = this.submit.bind(this);
    }
    //if user clicked submit
    async submit(ev){
        //tokenize card information
        let {token} = await this.props.stripe.createToken({name: "Name"});
        //send token to server
        let response = await fetch("/api/Events/checkout", {
            method: "POST",
            headers: {"Content-Type": "text/plain"},
            body: token.id,
            
        });
        //if 
        if (response.ok){
            this.setState({complete: true});
            console.log("Purchase Complete!")
        }
    }

    render(){
        if (this.state.complete){
            return (
                <h1> Purchase Complete </h1>
            )
        }
        return(
            <div className="checkout">
                <p>Would you like to complete the purchase?</p>
                <CardElement/>
                <button onClick={this.submit}>Purchase</button>
            </div>
        )
    }

}

export default injectStripe(CheckOutForm);