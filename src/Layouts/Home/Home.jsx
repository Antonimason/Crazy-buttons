import React from 'react';
import Card from '../../Components/Card/Card';
import { GiButtonFinger } from "react-icons/gi";
import { RiCarouselView } from "react-icons/ri";
import { BsMenuButtonWide } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import './Home.css';

function Home(){
    return(
        <>
            <section className="home-container">
                <article className="home-welcome">
                    <h2 className="home-title">Welcome to MyComponents webpage</h2>
                    <p className="home-text">This web site will help you providing some components that you can use to build your desired webpage</p>
                </article>
                <div className="home-map">
                    <Card logo={<GiButtonFinger/>} title="Buttons" description="Create your button as you wish or you can use some templates"/>
                    <Card logo={<RiCarouselView/>} title="Carousels" description="Differents carousels to make your landpage unique"/>
                    <Card logo={<BsMenuButtonWide/>} title="Navbars" description="Customize your navigation bar to fit your website's design or choose from pre-made templates."/>
                    <Card logo={<FiAlertCircle/>} title="Modals" description="Present content in a popup modal window. Select the appearance, behavior, and content of the modal to suit your website"/>
                    <Card logo={<GiButtonFinger/>} title="Buttons" description="Create your button as you wish or you can use some templates"/>
                    <Card logo={<GiButtonFinger/>} title="Buttons" description="Create your button as you wish or you can use some templates"/>
                </div>
            </section>
        </>
    )
}

export default Home;