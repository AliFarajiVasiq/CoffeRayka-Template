import React from 'react'
import './Footer-Style.css'
export default function Footer() {
  return (
    <div className='container-footer'>
        <div className="cover-info-footer">
            <h1 className="title-info-footer">آدرس</h1>
            <div className="line-info-footer"></div>
            <p className="info-text-footer">آدرس مورد نظر شما... ​<br /> ​ادامه آدرس</p>
        </div>
        <div className="cover-info-footer">
            <h1 className="title-info-footer">ساعت کاری</h1>
            <div className="line-info-footer"></div>
            <p className="info-text-footer">شنبه تا چهار شنبه 10 تا 24 <br /> پنج شنبه و جمعه 8 تا 2 بامداد</p>
        </div>
        <div className="cover-info-footer">
            <h1 className="title-info-footer">تماس با ما</h1>
            <div className="line-info-footer"></div>
            <p className="info-text-footer">تلفن: ۰۹۱۲۱۲۳۴ <br /> تلگرام: YourID@ </p>
        </div>
    </div>
  )
}