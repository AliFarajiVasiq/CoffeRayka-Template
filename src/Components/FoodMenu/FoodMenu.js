import React, { useState } from 'react'
import FoodBox from './FoodBox'
import './FoodMenu.css'
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
export default function FoodMenu() {
    let [menuData, setMenuData] = useState([
        { id: 1, title: "سیب زمینی تنوری", info: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", contents: "سیب زمینی، سینه مرغ کنتاکی، سس بالزامیک، زیتون سیاه، گوجه فرنگی", price: 20 },
        { id: 2, title: "سیب زمینی تنوری", info: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", contents: "سیب زمینی، سینه مرغ کنتاکی، سس بالزامیک، زیتون سیاه، گوجه فرنگی", price: 20 },
        { id: 3, title: "سیب زمینی تنوری", info: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", contents: "سیب زمینی، سینه مرغ کنتاکی، سس بالزامیک، زیتون سیاه، گوجه فرنگی", price: 20 },
        { id: 4, title: "سالاد سزار", info: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", contents: "سیب زمینی، سینه مرغ کنتاکی، سس بالزامیک، زیتون سیاه، گوجه فرنگی", price: 20 },
        { id: 5, title: "سالاد سزار", info: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", contents: "سیب زمینی، سینه مرغ کنتاکی، سس بالزامیک، زیتون سیاه، گوجه فرنگی", price: 20 },
        { id: 6, title: "سالاد سزار", info: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", contents: "سیب زمینی، سینه مرغ کنتاکی، سس بالزامیک، زیتون سیاه، گوجه فرنگی", price: 20 },
    ])
    let [foodMenuData, setFoodMenuData] = useState([
        { id: 1, name: 'کوبیده', price: 120, isGray: '' },
        { id: 2, name: 'جوجه کباب', price: 100, isGray: 'td-gray-food' },
        { id: 3, name: 'باقالی پلو با ماهیچه', price: 300, isGray: '' },
        { id: 4, name: 'خوراک کوبیده', price: 90, isGray: 'td-gray-food' }
    ])
    return (
        <div className='container-foodmenu' id='container-foodmenu'>
            <div className='component-cover-title'>
                <span className='component-span-title'>- محبوب ترین غذاها</span>
                <h1 className='component-h1-title'>منوی ما</h1>
            </div>
            <div className='cover-box-menu'>
                {menuData.map(data => (
                    <FoodBox {...data} key={data.id} />
                ))}
            </div>
            <div className='container-main-course'>
                <div className='component-cover-title'>
                    <span className='component-span-title'>- فوق العاده</span>
                    <h1 className='component-h1-title' style={{color:'white'}}>خوشمزگی</h1>
                </div>
                <div className='cover-media-main-course'>
                    <div className='cover-slider-in-main-course'>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" dir='ltr'>
                            <SwiperSlide><img src="image/FoodMenu/1.jpg" alt="" className='img-slider-in-main-course' /></SwiperSlide>
                            <SwiperSlide><img src="image/FoodMenu/2.jpg" alt="" className='img-slider-in-main-course' /></SwiperSlide>
                            <SwiperSlide><img src="image/FoodMenu/3.jpg" alt="" className='img-slider-in-main-course' /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='cover-table-in-main-course'>
                        <span className='span-in-foodmenu'>- غذاهای اصلی</span>
                        <table className='food-menu-table'>
                            <thead>
                                <tr className='food-menu-head-tr'>
                                    <td className='food-menu-head-td'>نام غذا</td>
                                    <td className='food-menu-head-td'>قیمت</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    foodMenuData.map(data => (
                                        <tr className={`tr-food`} key={data.id}>
                                            <td className={`td-food ${data.isGray}`}>{data.name}</td>
                                            <td className={`td-food ${data.isGray}`}>{data.price}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
