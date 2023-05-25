import React from 'react'

const SelectedAnimation = (props) => {
    
  return (
    <div className='absolute w-[100px] h-[100px] animate-expanding  '>
        <div className='absolute bottom-0 right-0  w-0 h-0 border-white
        border-r-[11px] 
        border-t-[11px] border-t-transparent 
        '></div>
        <div className='absolute bottom-0 left-0 rotate-90 w-0 h-0 border-white
        border-r-[11px] 
        border-t-[11px] border-t-transparent 
        '></div>
        <div className='absolute rotate-180 w-0 h-0 border-white
        border-r-[11px] 
        border-t-[11px] border-t-transparent 
        '></div>
        <div className='absolute top-0 right-0 -rotate-90 w-0 h-0 border-white
        border-r-[11px] 
        border-t-[11px] border-t-transparent 
        '></div>
   
    </div>
  )
}

export default SelectedAnimation