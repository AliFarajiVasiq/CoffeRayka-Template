import React, { useState } from 'react'
import './Chefs-Style.css'
export default function Chefs() {
  let [chefInfo, setChefInfo] = useState([
    {
      id: 1,
      name: 'هومن محمدی',
      job: '- سرآشپز ارشد',
      info: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
      image: 'image/Chefs/1.jpg',
      signature: 'image/Chefs/signature.png',
      isReverse: ''
    },

    {
      id: 2,
      name: 'حمید پورتراب',
      job: '- سرآشپز ارشد',
      info: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
      image: 'image/Chefs/1.jpg',
      signature: 'image/Chefs/signature.png',
      isReverse: 'reverse-chef-info'
    }
  ])
  return (
    <div className='container-chefs' id='container-chefs'>
      <div className='component-cover-title'>
        <span className='component-span-title'>-نیروهای متخصص و حرفه ای</span>
        <h1 className='component-h1-title'>سرآشپزها</h1>
      </div>
      <div className='father-chef-cart'>
        {
          chefInfo.map(data => (
            <div className={`cover-chef-info ${data.isReverse}`} key={data.id}>
              <div className='cover-img-chef'>
                <img src={data.image} alt="" />
              </div>
              <div className='cover-text-chef'>
                <h1 className='name-chef'>{data.name}</h1>
                <span className='job-chef'>{data.job}</span>
                <p className='info-chef'>{data.info}</p>
                <img src={data.signature} alt="" className='signature-chef' />
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}
