import React from 'react'
import './Reservation-Style.css'
export default function Reservation() {
    return (
        <div className='container-reservation' id='container-reservation'>
            <div className='cover-form-reservation'>
                <i className='component-span-title'>-رزرواسیون</i>
                <h1 className='component-h1-title' style={{ color: 'white' }}>رزرو میز</h1>
                <form action="post">
                    <input type="text" className="input-reservation" placeholder='نام شما *' />
                    <input type="email" className="input-reservation" placeholder='ایمیل *' />
                    <input type="text" className="input-reservation" placeholder='شماره تماس *' maxLength={11} />
                    <textarea type="text" className="input-reservation text" placeholder='روز و ساعت مورد نظر و توضیحات تکمیلی' />
                    <button type='submit' className='btn'>رزرو کن</button>
                </form>
            </div>
            <div className="cover-img-reservation">
                <img src="image/Reservation/1.jpg" alt="" className='img-reservation' />
            </div>
        </div>
    )
}
