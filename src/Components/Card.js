import React from 'react'
import Katie from '../images/Katie.png'
import Star from '../images/Star.png'
import '../index.css'
export default function Card(props) {
  
  let badgeText

  if(props.openSpots ===0 ){
    badgeText = "SOLD OUT"
  }
  else{
    badgeText="ONLINE"
  }


  return (

    <div className='card'>
  <div className='card--badge'>{badgeText}</div>
        <img src={props.img} className='card--image' alt="" />
        <div className="card--stats">
            <img src={Star} className='card--star' alt="" />
            <span className=''>{props.rating}</span>
            <span className='gray'>({props.reviewCount}) •  </span>
            <span className='gray'>{props.country}</span>
        </div>

        <p className='card--title'>{props.title}</p>
        <p><span className='bold'>From ${props.price}</span> / person</p>

    </div>
     
  )
}
