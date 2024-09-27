import React from 'react'
import { computerData } from '../data/computers'

const Computerpage = () => {
  return (
    <>
    
     <div className="pageSection">
         {computerData.map((item)=>{
             return(
                 <div>
                     <div className="pageImage">
                         <img src={item.image} alt="" />
                     </div>
                     <div className="promodel">
                         {item.company},{item.model}
                     </div>
                 </div>
             )
         })}
       
     </div>
 
     </>
  )
}

export default Computerpage
