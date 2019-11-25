import React from 'react';
import './Home.css';
import Header from "../../components/Header/Header.js"
import {randomImage} from '../../components/RandomImage/randomImage'


class Home extends React.Component {
    // Updates the selected tab value so that the information on screen can switch based on what tab is pressed


    render() {
        
        return (
            <div>
                <Header/>
                <div className={randomImage()}/>
            </div>
        );
    }
}

export default Home;
