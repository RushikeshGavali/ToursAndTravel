import React, {useEffect} from 'react'
import axios from 'axios'
import Card from '../CardUI/CardUi.js'
import hawamahal from '../../Assets/Historical/hawamahal.jpg'
import MysorePalace from '../../Assets/Historical/MysorePalace.jpg'
import Tajmahal from '../../Assets/Historical/Tajmahal.jpg'

const Historical=()=>{

    useEffect(() => {
        console.log("kfjadklfjlkadsjf");
    })
    axios.get('/hello').then(result => {
        console.log("Data from API--", result.data);
    }).catch(err => {
        console.log('error');
    });

    const historical=[
        {
            imageSrc:MysorePalace,
            type:"Historical",
            title:"MysorePalace",
            info:"North Goa is one of the two districts that make up the state of Goa in India.",
            location:"Mysore",
            adultPrice:6500,
            childPrice:3000,
            departureDate:"11/5/2021",
            noOfDays:3,
          },
          {
            imageSrc:Tajmahal,
            type:"Historical",
            title:"Tajmahal",
            info:"North Goa is one of the two districts that make up the state of Goa in India.",
            location:"Agra",
            adultPrice:5500,
            childPrice:2000,
            departureDate:"13/5/2021",
            noOfDays:2,
            },
            {
                imageSrc:hawamahal,
                type:"Historical",
                title:"hawamahal",
                info:"North Goa is one of the two districts that make up the state of Goa in India.",
                location:"Jaipur",
                adultPrice:7000,
                childPrice:3000,
                departureDate:"26/1/2021",
                noOfDays:3,
            }
    ]
    const data = historical.map((item) =>
    <div className="col-md-4  col-sm-12" key={item.title}><Card imgsrc={item.imageSrc} title={item.title} info={item.info }/></div>
    );
    return(
        <div>
              
              <div className="container-fluid d-flex justify-content-center">
                <div className="row" >
                    {data} 
                </div>
             </div>
        </div>
    )
}
export default Historical;
