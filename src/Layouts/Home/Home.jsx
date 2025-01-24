import React from 'react';
import Card from '../../Components/Card/Card';
import { GiButtonFinger } from "react-icons/gi";
import { RiCarouselView } from "react-icons/ri";
import { BsMenuButtonWide } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import { BsPostcard } from "react-icons/bs";
import { RiLoader2Line } from "react-icons/ri";
import './Home.css';

function Home(){
    return(
        <>
            <section className="home-container">
                <article className="home-welcome">
                    <h2 className="home-title">Welcome to MyComponents</h2>
                    <p className="home-text">This web site will help you providing some components that you can use to build your desired webpage</p>
                </article>
                <article className="home-map">
                    <Card logo={<GiButtonFinger/>} title="Buttons" description="Create your button as you wish or you can use some templates"/>
                    <Card logo={<RiCarouselView/>} title="Carousels" description="Differents carousels to make your landpage unique"/>
                    <Card logo={<BsMenuButtonWide/>} title="Navbars" description="Customize your navigation bar to fit your website's design or choose from pre-made templates."/>
                    <Card logo={<FiAlertCircle/>} title="Modals" description="Present content in a popup modal window. Select the appearance of the modal to suit your website"/>
                    <Card logo={<BsPostcard/>} title="Cards" description="Create your button as you wish or you can use some templates"/>
                    <Card logo={<RiLoader2Line/>} title="Loaders" description="Create your button as you wish or you can use some templates"/>
                </article>
            </section>
        </>
    )
}

export default Home;