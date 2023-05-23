import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import './myCalendar.css'
import { MonthContext } from '../Months/Month';
import { useContext } from 'react';
import { useState } from 'react';


const Calendar=({items,dataReceiver})=> {
  
  const uniqueMonth =[...new Set(items.map(item=>item.month))]
  const currentMonth = uniqueMonth[0]
  const mydata = useContext(MonthContext)
  const [next,setNext]= useState([])
  const [prev, setPrev]=useState([])
const [current, setCurrent]= useState()

 
useEffect(() => {
 setCurrent(currentMonth)
}, [currentMonth])

  
  var days =(items.map(item=> {return item.day}))
  const [data,setData]= React.useState([])

  useEffect(() => {
   callGetApi()
  }, [])

  

  const callGetApi=async()=>{
    const response = await axios.get("https://646476cc127ad0b8f89f469a.mockapi.io/days")
    setData(response.data)
  }


  const handleLeft=()=>{   
   mydata.map((item,index)=>{ 
    
      if(item.month === current)  
      {
        let prevIndex= index-1
        if(prevIndex < 0)
        {
          prevIndex = mydata.length-1
        }
        const myPrev = mydata[prevIndex].month
        setCurrent(myPrev)
        dataReceiver(myPrev)
      }
   })
  }         
  const handleRight=()=>{       
    
    mydata.map((item,index)=>{ 
    
      if(item.month === current)  
      {
        let nextIndex= index+1
        if(nextIndex >= 12)
        {
          nextIndex = 0
        }
        const myNext = mydata[nextIndex].month
        setCurrent(myNext)     
        dataReceiver(myNext)   
      }

   })

  }

  return (
    
    <>
  {console.log("jfds",currentMonth)}
    <div className="myCalCont">
    <div  className="table"> 
        <div className='monthdisplay'>    
             
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








