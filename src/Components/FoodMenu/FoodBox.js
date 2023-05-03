import React from 'react'

export default function FoodBox(props) {
  return (
    <div className='box-menu'>
        <div className='menu-price'>{props.price} ت</div>
        <h2 className='menu-title'>{props.title}</h2>
        <p className='menu-info'>{props.info}</p>
        <p className='menu-contents'><span>محتویات</span> {props.contents}</p>
    </div>
  )
}
