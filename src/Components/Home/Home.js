import React, {useEffect, useState} from "react";
import Card from "../CardUI/CardUi.js";
import NorthGoa from "../../Assets/Beaches/NorthGoa.jpg";
import Ratnagiri from "../../Assets/Beaches/Ratnagiri.jpg";
import Tarkarli from "../../Assets/Beaches/Tarkarli.jpg";
import hawamahal from "../../Assets/Historical/hawamahal.jpg";
import MysorePalace from "../../Assets/Historical/MysorePalace.jpg";
import Tajmahal from "../../Assets/Historical/Tajmahal.jpg";
import Bhimashankar from "../../Assets/WildLife/Bhimashankar.jpg";
import GirGJ from "../../Assets/WildLife/GirGJ.jpg";
import Kaziranga from "../../Assets/WildLife/Kaziranga.jpg";
import ImageSlider from "../Slider/ImageSlider";
import {SliderData} from "../Slider/SliderData";
import TravelCard from "../TravelCard/TravelCard";
import axios from "axios";

const Home = () => {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get('/toursInfo').then(response => {
            const toursInfo = response.data;
            setInfo([
                {
                    imageSrc: MysorePalace,
                    tourInfo: toursInfo[0]
                },
                {
                    imageSrc: NorthGoa,
                    tourInfo: toursInfo[1]
                },
                {
                    imageSrc: Tajmahal,
                    tourInfo: toursInfo[2]
                },
                {
                    imageSrc: GirGJ,
                    tourInfo: toursInfo[3]
                },
                {
                    imageSrc: Kaziranga,
                    tourInfo: toursInfo[4]
                },
                {
                    imageSrc: Bhimashankar,
                    tourInfo: toursInfo[5]
                },
                {
                    imageSrc: Tarkarli,
                    tourInfo: toursInfo[6]
                },
                {
                    imageSrc: hawamahal,
                    tourInfo: toursInfo[7]
                },
                {
                    imageSrc: Ratnagiri,
                    tourInfo: toursInfo[8]
                },
            ]);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    const data = info.map((item, index) => (
        <div className="col-md-6  col-sm-12 col-lg-4" key={item.tourInfo.title}>
            <Card
                imgsrc={item.imageSrc}
                title={item.tourInfo.title}
                info={item.tourInfo.info}
                index={index}
            />
        </div>
    ));
    return (
        <div>
            <ImageSlider slides={SliderData}></ImageSlider>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">{data}</div>
            </div>
            <TravelCard/>
        </div>
    );
};

export default Home;
