import React from 'react'

import './ViewDetails.css'
import NorthGoa from '../../Assets/Beaches/NorthGoa.jpg'
import Ratnagiri from '../../Assets/Beaches/Ratnagiri.jpg'
import Tarkarli from '../../Assets/Beaches/Tarkarli.jpg'
import hawamahal from '../../Assets/Historical/hawamahal.jpg'
import MysorePalace from '../../Assets/Historical/MysorePalace.jpg'
import Tajmahal from '../../Assets/Historical/Tajmahal.jpg'
import Bhimashankar from '../../Assets/WildLife/Bhimashankar.jpg'
import GirGJ from '../../Assets/WildLife/GirGJ.jpg'
import Kaziranga from '../../Assets/WildLife/Kaziranga.jpg'
function ViewDetails(props) {
    const info=[
        {
          imageSrc:MysorePalace,
          type:"Historical",
          title:"MysorePalace",
          info:"North Goa is one of the two districts that make up the state of Goa in India.",
          location:"Mysore",
          adultPrice:6500,
          childPrice:3000,
          departureDate:"11-5-2021",
          noOfDays:3,
        },
        {
        imageSrc:NorthGoa,
        title:"North Goa",
        info:"North Goa is one of the two districts that make up the state of Goa in India.",
        type:"beach",
        location:"Goa",
        adultPrice:5000,
        childPrice:2500,
        departureDate:"22-1-2021",
        noOfDays:5,
        },
        {
        imageSrc:Tajmahal,
        type:"Historical",
        title:"Tajmahal",
        info:"North Goa is one of the two districts that make up the state of Goa in India.",
        location:"Agra",
        adultPrice:5500,
        childPrice:2000,
        departureDate:"13-5-2021",
        noOfDays:2,
        }
        ,
        {
        imageSrc:GirGJ,
        type:"Wildlife",
        title:"GirGJ",
        info:"North Goa is one of the two districts that make up the state of Goa in India.",
        location:"Gujrat",
        adultPrice:8000,
        childPrice:4000,
        departureDate:"23-2-2021",
        noOfDays:3,
        }
       ,
        {
        imageSrc:Kaziranga,
        type:"Wildlife",
        title:"Kaziranga",
        info:"North Goa is one of the two districts that make up the state of Goa in India.",
        location:"Assam",
        adultPrice:9000,
        childPrice:4500,
        departureDate:"16-3-2021",
        noOfDays:6,
        },
        {
        imageSrc:Bhimashankar,
        type:"Wildlife",
        title:"Bhimashankar",
        info:"North Goa is one of the two districts that make up the state of Goa in India.",
        location:"Maharashtra",
        adultPrice:4000,
        childPrice:2000,
        departureDate:"21-1-2021",
        noOfDays:2,
        },{
          imageSrc:Tarkarli,
          type:"beach",
          title:"Tarkarli",
          info:"North Goa is one of the two districts that make up the state of Goa in India.",
          location:"Tarakarali",
          adultPrice:4000,
          childPrice:2000,
          departureDate:"10-1-2021",
          noOfDays:3,
          },
        {
        imageSrc:hawamahal,
        type:"Historical",
        title:"hawamahal",
        info:"North Goa is one of the two districts that make up the state of Goa in India.",
        location:"Jaipur",
        adultPrice:7000,
        childPrice:3000,
        departureDate:"26-1-2021",
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
        departureDate:"10-2-2021",
        noOfDays:5,
        }
        ]
        const bookNowHandler=()=>{
            
            props.history.push({pathname:"/BookNow/"+info[props.match.params.id].adultPrice+"/"+info[props.match.params.id].childPrice
            +"/"+info[props.match.params.id].location+"/"+info[props.match.params.id].departureDate
          })
        }
    return (
        <div>
          <h1 className="viewHeading">Tour Details</h1><br></br>
            <div className="viewContainer">
              <div >
                <img src={info[props.match.params.id].imageSrc} alt="North goa" className="viewImage" ></img>
              </div>
            

            <div className="viewData" >
              <h2 className="viewDetails">Details...</h2><br></br>
              <h5>Travel type : {info[props.match.params.id].type}</h5>
              <h5>Location : {info[props.match.params.id].location}</h5>
              <h5>Price for a adult  :{info[props.match.params.id].adultPrice}</h5>
              <h5>Price for a child : {info[props.match.params.id].childPrice}</h5>
              <h5>Departure date : {info[props.match.params.id].departureDate}</h5>
              <h5>Number of days : {info[props.match.params.id].noOfDays}</h5><br></br>
              <button className="btn btn-dark" onClick={bookNowHandler}>BOOK NOW</button>
            </div>
            </div>
            </div>
        
    )
}

export default ViewDetails
