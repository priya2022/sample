import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import './Listing.css'
import Calendar from '../Calendar/Calendar';


const Listing = ({month,mynewMonth}) => {
  var filteredData;
    const [mydata, setData] = useState([])
    const [calData,setCalData]=useState([])

    const callgetApi=async()=>{
      const response = await axios.get("https://646352d67a9eead6fae32f76.mockapi.io/months")
      setData(response.data)
    }
   
     useEffect(()=>{
       callgetApi()
     },[])

    
     const myCurrentMonth= Object.values({mynewMonth})[0]
     const myMonth= Object.values({month})[0]
     const selectedMonth = myMonth||myCurrentMonth

     useEffect(()=>{
      const initialData = mydata.filter((item)=> item.month ===selectedMonth)
      setCalData(initialData)
     },[selectedMonth,mydata])
     
     const dataReceiver = (data)=>{
      
      filteredData= mydata.filter((item)=>item.month === data)
      console.log("filteredData",filteredData)
      setCalData(filteredData)
     }
 
      filteredData= mydata.filter((item)=> item.month === selectedMonth )

       return (
       <>
       {console.log("listingData",calData)}
       <div className="myListingcontainer">      
        {
        
          calData.map((item)=>{
            return(
              
              <Card key ={item.id} className="myCard">

              <Card.Img  variant="left" className="cardimg"   src="https://i.ibb.co/6tGcWJ7/image-2023-05-18-172515117.png"  />
    
               <Card.Body className="cardBody">
                 <Card.Title>{item.title}</Card.Title>
                <Card.Text className="cardText">
                  {item.description}
                 </Card.Text>
                 <Card.Text className="text">
                   <span>{item.month} {item.day}</span>
                  <span className="icon"><i class="bi bi-arrow-right-short"></i></span>
                 </Card.Text>
                 
               </Card.Body>
             </Card> 
            )
          })
        }
        </div>       
        <Calendar items={calData} dataReceiver = {dataReceiver}/>
       </>
    
       )
     }

export default Listing

//  {/**/}