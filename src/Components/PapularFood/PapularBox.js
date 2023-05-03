import React, { useState } from 'react'
import ImageModal from './ImageModal'

export default function PapularBox(props) {
  let [showModal, setShowModal] = useState( { isShow:false } )
  function openModalHandler(){
    if(showModal.isShow){
      setShowModal( { isShow:false } )
    }
    else if(!showModal.isShow){
      setShowModal( { isShow:true } )
    }
  }
  return (
    <>
      <div className='papular-box' onClick={openModalHandler}>
          <img src={props.imageSmall} alt="" className='img-papular-food' />
          <div className='bg-dark-papular-food'>
              <h1 className='name-papular-food'>{props.name}</h1>
          </div>
      </div>
      { showModal.isShow && 
        <ImageModal imgBig={props.imageBig} onClick={openModalHandler} />
      }
    </>
  )
}
