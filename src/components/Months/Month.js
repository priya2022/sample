import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Listing from '../Listing/Listing';
import './Month.css'
const initialMonth = [
  "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
]

export const MonthContext = createContext()
const Month = () => {
  
  const [month,setMonth]= useState('')
 const [mynewMonth,setmyMonth]= useState(initialMonth)
 
  const [data,setData]=useState([])


  useEffect(()=>{
    
    let d = new Date();
    let current = mynewMonth[d.getMonth()]
    setmyMonth(current)

  },[])

    

  const callgetApi=async()=>{
   const response = await axios.get("https://646352d67a9eead6fae32f76.mockapi.io/year")
   setData(response.data)
 }

  useEffect(()=>{
    callgetApi()
  },[])
  
  const handleChange=(month)=>{
    setMonth(month.month)
  }
  
  return (
    <MonthContext.Provider value={data}>
    <div className="new">
      
    <div className= "myMon" direction="horizontal" gap={2} style={{"marginTop":"3%"}}>

    {

      data.map((month)=>{
        return(         
          <Button className="monthBtn" variant="outline-warning" onClick={handleChange.bind(this, month)}>{month.month}</Button>
        )
       
      })
    }

    </div>
    </div>

<Listing month={month} mynewMonth={mynewMonth}/> 

    </MonthContext.Provider>
  )
}

export default Month