import { useState } from 'react'
import './About-Style.css'
import FeatureBox from './FeatureBox'

export default function About() {
  let [featureBoxState, setFeature] = useState([
    { id: 1, title: 'غذاهای خوشمزه', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان', image: 'image/About/Feature/1.png' },
    { id: 2, title: 'محیط دوستانه', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان', image: 'image/About/Feature/2.png' },
    { id: 3, title: 'سفارش آنلاین غذا', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان', image: 'image/About/Feature/3.png' },
    { id: 4, title: 'ارسال رایگان', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان', image: 'image/About/Feature/4.png' },
  ])

  return (
    <div id='container-about'>
      <div className="cover-media-text">
        <div className='cover-media-about'>
          <video src="image/About/video.mp4" type='video/mp4' poster='image/About/cover-video.jpg' controls className='video-about'>شرمنده مرورگر شما از ویدیو پشتیبانی نمی کند!</video>
        </div>
        <div className='cover-text-about'>
          <span className='component-span-title'>- فضای متفاوت</span>
          <h1 className='component-h1-title'>درباره‌ ما</h1>
          <p className='p-in-about'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
            کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </p>
          <a href="id" className='btn btn-in-about'>رزرو میز</a>
          <img src="image/About/fruit.png" alt="" className='img-about-fruit' />
        </div>
      </div>
      <div className='cover-good-feature'>
        <img src="image/About/bg-about.jpg" alt="" className='bg-about-img' />
        <div className='cover-feature-box'>
          {
            featureBoxState.map(data => (
              <FeatureBox {...data} key={data.id} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
