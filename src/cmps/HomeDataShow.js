


import React from 'react';


const HomeDataShow = (props) => {
  const {data} = props
  
  return (
  
  
  <div className="flex-row justify-evenly size-6 pad-top-2rem">
        {
            data.map( (d,index)=> <span key={index} className={d.style}>{d.text}</span> )
        }
    
  
        
    </div>
    
    )
  
  ;
};
export default HomeDataShow;