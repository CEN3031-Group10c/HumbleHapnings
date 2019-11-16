import React from 'react';
import './Home.css';
import Header from "../../components/Header/Header.js"
import ChurchDirectory from "../../components/ChurchDirectory/ChurchDirectory.js"
//Maybe?
import Events from '../Events/Events';

//From: Kevin
/*
this function randomly picks a background 
and returns the classname of the background image in css
*/
function randomImage(){
    var backgroundImages = ['book1-background', 'cathedral1-background', 'field1-background'];
    var randomIndex = Math.floor(Math.random() * backgroundImages.length);
    var randomImg = backgroundImages[randomIndex];
    return randomImg;
}    
//To: Kevin

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0
        }
    }
    // Updates the selected tab value so that the information on screen can switch based on what tab is pressed
    selectedUpdate(id) {
        this.setState({
            selectedTab: id
        })
    }

    render() {
        
        return (
            <div>
                <Header
                    selectedUpdate={this.selectedUpdate.bind(this)}
                />

                <div className={randomImage()}>

                    <ChurchDirectory
                        selectedTab={this.state.selectedTab}
                    />
                    <Events
                        selectedTab={this.state.selectedTab}
                    />


                </div>
            </div>
        );
    }
}

export default Home;
