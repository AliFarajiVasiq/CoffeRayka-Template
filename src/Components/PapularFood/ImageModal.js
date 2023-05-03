import React from 'react'

export default function ImageModal(props) {
    function closeModal(){
        props.onClick()
    }
  return (
    <div className='cover-modal-image' onClick={closeModal}>
        <img src={props.imgBig} alt="" className='img-modal-papular-food' />
    </div>
  )
}
