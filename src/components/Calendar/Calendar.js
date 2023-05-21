import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import './myCalendar.css'
import { MonthContext } from '../Months/Month';
import { useContext } from 'react';
import { useState } from 'react';


const Calendar=({items})=> {

  const uniqueMonth =[...new Set(items.map(item=>item.month))]
  
  const mydata = useContext(MonthContext)
  const [next,setNext]= useState([])
  const [prev, setPrev]=useState([])
  const [current, setCurrent]= useState(uniqueMonth)
 

  
  var days =(items.map(item=> {return item.day}))
  const [data,setData]= React.useState([])

  useEffect(() => {
   callGetApi()
  }, [])

  const callGetApi=async()=>{
    const response = await axios.get("https://646476cc127ad0b8f89f469a.mockapi.io/days")
    setData(response.data)
  }

  const filteredData= mydata.filter(item=>item.month === uniqueMonth.toString() )
  
 

  const handleLeft=()=>{
    
   
   mydata.map((item,index)=>{ 
    
      if(item.month === current.toString())  
      {
        
        const myPrev = mydata[index-1].month
        setCurrent(myPrev)
        
      }

   })

  }         
  const handleRight=()=>{
    mydata.map((item,index)=>{ 
    
      if(item.month === current.toString())  
      {
        
        const myPrev = mydata[index+1].month
        setCurrent(myPrev)
        
      }
    
   
   })
  }

  return (
    
    <>
  
    <div className="myCalCont">
    <div  className="table">
  
        <div className='monthdisplay'>
        {/* <h3>{prev }</h3> */}
        <h4>{current}</h4>
          <span>
        <i className="bi bi-arrow-left-short left" onClick ={handleLeft}></i>
        <i className="bi bi-arrow-right-short right" onClick={handleRight}></i>
        </span>

        </div>

        <ul>
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>

      <div className="myCalendarcontainer">

      {data.map((item,index)=>{
        return(
         
          <div key={index} >          
            <div  className={days.includes(item.day)? 'highlight':''}>
            {item.day}
          </div>
          </div>
        )
      })}
      </div>
       
      </div>
      </div>
    </>
  );
}
export default Calendar








