import React from 'react'
import { computerData } from '../data/computers'
const Computers = () => {
 const fristFivevariables = computerData.slice(0,5)

 return (
   <>
  <div className = "ProTitle">
   <h2> Computers</h2>
   <h2> laptopsss</h2>
   </div>
 <div className="proSection">
        {
         fristFivevariables.map((item)=>{
              return(
               <div className="imageBox">
                 <img className="proImage"
                  src={item.image} alt=""/>
                </div>
              )

         })
        }
    </div>
  </>
  )
}

export default Computers
