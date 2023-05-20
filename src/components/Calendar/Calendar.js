import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import './myCalendar.css'
import { MonthContext } from '../Months/Month';
import { useContext } from 'react';
import { useState } from 'react';



const Calendar=({items})=> {
  
  const mydata = useContext(MonthContext)
  const [next,setNext]= useState(mydata)
 

  const uniqueMonth =[...new Set(items.map(item=>item.month))]
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
  const position = filteredData.map(item=>item.id )
 

  const handleLeft=()=>{
   

  }         
  const handleRight=()=>{
  //  const nextMonth =next.map(item=>item.month+1)
  //  console.log("next",nextMonth)
  //  setNext(nextMonth)
  }

  return (
    <>
  
    <div className="myCalCont">
    <div  className="table">
  
        <div className='monthdisplay'>
        <h3>{uniqueMonth }</h3>

          <span>
        <i class="bi bi-arrow-left-short left" onClick ={handleLeft}></i>
        <i class="bi bi-arrow-right-short right" onClick={handleRight}></i>
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








