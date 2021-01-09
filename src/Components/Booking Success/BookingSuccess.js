import React from 'react';
import '../Forms/Form.css'
export default function BookingSuccess(props){

    const homeHandler=()=>{
        props.history.push("/")
    }
return(
<div className="booking-success-box">
 <h1 style={{color: "green"}}>Enjoy tour with your Loved Once..!!</h1>
 <div className="booking-datails">
 <h3 className="booking-datails-text">Booking Details</h3>
 <p>Places to Visit:{props.match.params.location}</p>
  <p>Seats Reserved : {props.match.params.noOfChild}-Kids {props.match.params.noOfAdults}-Adults</p>
 <p>Date of Departure: {props.match.params.date}</p>
 <p>Departure Venue:Pune</p>
 <h6 ><b><i><span style={{color: "green"}}>H</span>
 <span style={{color: "red"}}>A</span>
 <span style={{color: "yellow"}}>P</span>
 <span style={{color: "blue"}}>P</span>
 <span style={{color: "green"}}>Y</span>
 <span style={{color: "green"}}> </span>
 <span style={{color: "red"}}>J</span>
 <span style={{color: "yellow"}}>O</span>
 <span style={{color: "blue"}}>U</span>
 <span style={{color: "orange"}}>R</span>
 <span style={{color: "aqua"}}>N</span>
 <span style={{color: "blue"}}>E</span>
 <span style={{color: "green"}}>Y</span>
 <span style={{color: "blue"}}> !!</span>
</i></b><span style={{color: "green"}}><span className="emoji">☺</span></span></h6>
<button onClick={homeHandler} className="button button1"> Back To Home</button>
 </div>

</div>
)
}