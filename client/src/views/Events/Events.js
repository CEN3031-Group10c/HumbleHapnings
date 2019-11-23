import React from 'react';
import './Events.css';
import Header from '../../components/Header/Header'
import StripeCheckout from 'react-stripe-checkout'
import Axios from 'axios';
import { throwStatement } from 'babel-types';
import {toast} from 'react-toastify';
import randomImage from '../../components/RandomImage/randomImage'

toast.configure()
import "../Home/Home.css"

// Sebastian and Diego

// Creating the event front end



class Events extends React.Component{

    render(){

        // creating the test array for the mapping 
        const events = [{name: "Church Meeting",
        date: "11/15", 
        location: "Conference Room",
        description: "Discussing upcoming fair",
        hostChurch: "Our-Church",
        tags: ["Discussion, ", "Social commitment, ", "Planning"]},

        {name: "6 PM Sunday Mass",
        date: "11/13",
        location: "Main Church",
        description: "Mass, praying",
        hostChurch: "Your-Church",
        tags: ["Weekly mass, ", "Devotion, ", "Social"]}]

        function randomImage(){

            var backgroundImages = ['book1-background', 'field1-background'];
            var randomIndex = Math.floor(Math.random() * backgroundImages.length);
            var randomImg = backgroundImages[randomIndex];
            if(randomIndex == 0) //passing in the variable that is part of this class to be changed if the background is dark
                 letterColor = "white";
            return randomImg;
        }  

        //mapping the elements of the array
        //outline 
        const eventMaping = events.map(event => {
            return (
                
                <div class="columnEvents" style={{padding: '0px'}, {paddingBottom: '20px'}, {paddingTop: '0px'}, 
                                {display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <div class="containerEvent">
                        <h1>{event.name}</h1>
                        <tr>By: {event.hostChurch}</tr>
                        <tr>{event.location}</tr>
                        <tr>{event.date}</tr>
                        <tr>Description: {event.description}</tr>
                        <tr>Related to: {event.tags.map ( tag => {
                            return (
                                <text style={{fontWeight: "bold"}}>{tag}</text>
                            )
                        })}
                    </tr>
                </div>
            </div>
            );
        });

        var letterColor = "black";
        // Megan - worked on code formatting plus changed return to proper format to work with linking to webpages vs. 
        // puting component over top of home page


        //Kevin: token handler function 
        const eventPrice = 100;
        async function handleToken(token){
            console.log({token})
            const response = await Axios.post("/api/Events/checkout", {
                token,
                eventPrice
            });
            const {status} = response.data;
            if (status === 'success'){
                console.log('success')
                toast('Purchase Successful', {
                    type: "success"});
                }else{
                    console.log('fail')
                toast("Payment is unsuccessful", {
                    type: "error"
                });
            }
        }
        return (
            <div>
                <Header/>
                <div className={randomImage()}>
                    <div class="container">
                        <StripeCheckout
                            name="Event Payment"
                            stripeKey="pk_test_8o2KG0ESrNywOAbv3v3OWG3s00HIu8oWDs"
                            token={handleToken}
                            billingAddress
                            amount={eventPrice}
                        />
                    </div> 
                </div>
            </div>
            // <div>
            //     <Header/>
            //     <body className="Events">
            //         <div className={randomImage()}> 
            //             <div class="container">
            //                 <h1 style={{color: letterColor, fontSize: 70,  display: 'flex',  justifyContent:'center', alignItems:'center'}}>Events</h1>
            //                 <text style={{color: letterColor, fontSize: 30,  display: 'flex',  justifyContent:'center', alignItems:'center'}}>Check out these awesome events happening in your community!</text>
            //                     <form>
            //                         <div style={{paddingBottom: '30px'}}>{"   "}</div>
            //                         <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center'}}>{eventMaping}</div>
            //                     </form>                              
            //             </div>
            //         </div>
            //     </body>
            // </div>
        )
    }
}

export default Events;