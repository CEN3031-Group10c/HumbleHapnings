import React from 'react';
import './Home.css';
import Header from "../../components/Header/Header.js"
function randomImage(){
    var backgroundImages = ['book1-background', 'cathedral1-background', 'field1-background'];
    var randomIndex = Math.floor(Math.random() * backgroundImages.length);
    var randomImg = backgroundImages[randomIndex];
    return randomImg;
}    

class Home extends React.Component {

    render() {
        return (
            <div>
                <div className={randomImage()}>
                    <Header/>
                </div>
            </div>
        );
    }
}

export default Home;
