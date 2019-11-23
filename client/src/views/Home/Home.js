import React from 'react';
import './Home.css';
import Header from "../../components/Header/Header.js"
import {randomImage} from '../../components/RandomImage/randomImage'


class Home extends React.Component {

    render() {
        
        return (
            <div>
                <Header/>
                <div className={randomImage()}>
                </div>
            </div>
        );
    }
}

export default Home;
