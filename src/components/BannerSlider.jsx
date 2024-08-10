import React from 'react'
import banner from '../assets/banner.jpg'

const BannerSlider = () => {
  return (
    <section className='BannerSlider block'>
      <div className='carousel-banner w-[1188px] m-[0_auto] relative flex h-[344px] overflow-hidden'>
        <div className='carousel-left w-[230px] border-[1.5px] border-gray-300 rounded-[12px] py-2 bg-white shadow-custom'>
        </div>
        <div className='carousel-space w-[24px]'>
        </div>
        <div className='carousel-container w-[938px]'>
        <a href="#">
            <img src={banner} className='rounded-[12px]' />
          </a>
        </div>
      </div>
      </section>
  )
}

export default BannerSlider