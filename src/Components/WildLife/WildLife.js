import React from 'react'
import Card from '../CardUI/CardUi.js'
import Bhimashankar from '../../Assets/WildLife/Bhimashankar.jpg'
import GirGJ from '../../Assets/WildLife/GirGJ.jpg'
import Kaziranga from '../../Assets/WildLife/Kaziranga.jpg'

const WildLife=()=>{
    const wildlife=[
        {
            imageSrc:GirGJ,
            type:"Wildlife",
            title:"GirGJ",
            info:"North Goa is one of the two districts that make up the state of Goa in India.",
            location:"Gujrat",
            adultPrice:8000,
            childPrice:4000,
            departureDate:"23/2/2021",
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
            departureDate:"16/3/2021",
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
            departureDate:"21/1/2021",
            noOfDays:2,
            }
    ]
    const data = wildlife.map((item) =>
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
export default WildLife;