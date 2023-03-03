import React from 'react'

const Slide = ({slide, width}) => {
  return (
    <div className='slide' style={{width: width}}>
        <img src={slide.img} alt="" />
        <div className="caption">
            {slide.text}
        </div>
    </div>
  )
}

export default Slide