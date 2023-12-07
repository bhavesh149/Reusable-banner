import React from 'react'
import "./index.css"

const BannerCardItem = (props) => {
    const {items} = props
    const {headerText,description,className} = items
    
  return (
    <div>
        <li className={`${className} banner-card-item`}>
            <div>
                <h1 className='heading'>{headerText}</h1>
                <p className='description'>{description}</p>
                <button className='show-more-btn' type='button' >Show More</button>
            </div>
        </li>
    </div>
  )
}

export default BannerCardItem