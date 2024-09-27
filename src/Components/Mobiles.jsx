import React from 'react'
import { mobileData } from '../data/mobiles'

const Mobiles = () => {
  const fristFivevariables = mobileData.slice(0,5)
  return (
   <>
   <div className = "ProTitle">
   <h2> Mobiles</h2>
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

export default Mobiles
