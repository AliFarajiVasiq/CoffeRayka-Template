import React, { useState } from 'react'
import './PapularFood-Style.css'
import PapularBox from './PapularBox'
export default function PapularFood() {
    let [dataPapular, setDataPapular] = useState([
      {id:1, name:'مرغ سوخاری', imageBig:'image/PapularsFood/1-big.jpg', imageSmall:'image/PapularsFood/1-small.jpg'},
      {id:2, name:'پاستا', imageBig:'image/PapularsFood/2-big.jpg', imageSmall:'image/PapularsFood/2-small.jpg'},
      {id:3, name:'کیک رویال', imageBig:'image/PapularsFood/3-big.jpg', imageSmall:'image/PapularsFood/3-small.jpg'},
      {id:4, name:'موهیتو', imageBig:'image/PapularsFood/4-big.jpg', imageSmall:'image/PapularsFood/4-small.jpg'},
      {id:5, name:'صبحانه آمریکایی', imageBig:'image/PapularsFood/5-big.jpg', imageSmall:'image/PapularsFood/5-small.jpg'},
      {id:6, name:'چیکن', imageBig:'image/PapularsFood/6-big.jpg', imageSmall:'image/PapularsFood/6-small.jpg'},
      {id:7, name:'سالاد سزار', imageBig:'image/PapularsFood/7-big.jpg', imageSmall:'image/PapularsFood/7-small.jpg'},
      {id:8, name:'نان تست', imageBig:'image/PapularsFood/8-big.jpg', imageSmall:'image/PapularsFood/8-small.jpg'},
    ])
  return (
    <div className='container-papular-food' id='container-papular-food'>
        <div className="component-cover-title">
            <span className='component-span-title'>- یک انتخاب فوق العاده</span>
            <h1 className='component-h1-title'>محبوب ترین غذاها</h1>
        </div>
        <div className='cover-box-papular-food'>
            {
              dataPapular.map(data =>(
                <PapularBox {...data}  key={data.id}/>
              ))
            }
        </div>
    </div>  
  )
}
