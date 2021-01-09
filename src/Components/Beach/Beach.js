import React from 'react'
import Card from '../CardUI/CardUi.js'
import NorthGoa from '../../Assets/Beaches/NorthGoa.jpg'
import Ratnagiri from '../../Assets/Beaches/Ratnagiri.jpg'
import Tarkarli from '../../Assets/Beaches/Tarkarli.jpg'

const Beach=()=>{
    const beach=[
        {
            imageSrc:NorthGoa,
            title:"North Goa",
            info:"North Goa is one of the two districts that make up the state of Goa in India.",
            type:"beach",
            location:"Goa",
            adultPrice:5000,
            childPrice:2500,
            departureDate:"22/1/2021",
            noOfDays:5,
        },
        {
            imageSrc:Tarkarli,
            type:"beach",
            title:"Tarkarli",
            info:"North Goa is one of the two districts that make up the state of Goa in India.",
            location:"Tarakarali",
            adultPrice:4000,
            childPrice:2000,
            departureDate:"10/1/2021",
            noOfDays:3,
        },
        {
            imageSrc:Ratnagiri,
            type:"beach",
            title:"Ratnagiri",
            info:"North Goa is one of the two districts that make up the state of Goa in India.",
            location:"ratnagiri",
            adultPrice:6000,
            childPrice:3000,
            departureDate:"10/2/2021",
            noOfDays:5,
        }
    ]
    const data = beach.map((item) =>
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
export default Beach;