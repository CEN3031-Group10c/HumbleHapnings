import React from 'react';
import './Home.css';
import Header from "../../components/Header/Header.js"
import ChurchDirectory from "../../components/ChurchDirectory/ChurchDirectory.js"
//Maybe?
import ChurchDirectoryCreation from "../../views/ChurchDirectoryCreation/ChurchDirectoryCreation.js"
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

    render() {
        
        return (
            <div className={randomImage()}>
                <Header/>
            </div>
        );
    }
}

export default Home;
