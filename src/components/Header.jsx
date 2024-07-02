import React from 'react'
import logo from '../assets/logo.png'
import { Search} from 'lucide-react'

const Header = () => {
  return (
    <div className='header w-full bg-primary'>
      <div className='h-[90px] mb-[10px]'>
        <div className='header-content'>
          <div className='link-bar relative min-w-[1006px] text-left'>
            <div className='link-list mx-auto w-[1188px] min-w-[1188px] flex text-white box-content p-0'>
              <div className='top-link-item relative inline-block text-left text-xs h-[25px] leading-[25px] whitespace-nowrap cursor-pointer mr-[22px] pl-0'>
                <a className='text-white hover:text-gray-300 transition duration-200' href="#">Become a Seller</a>
              </div>
              <div className='top-link-item relative inline-block text-left text-xs h-[25px] leading-[25px] whitespace-nowrap cursor-pointer mr-[22px] pl-0'>
                <a className='text-white hover:text-gray-300 transition duration-200' href="#">Payments & Recharge</a>
              </div>
              <div className='top-link-item relative inline-block text-left text-xs h-[25px] leading-[25px] whitespace-nowrap cursor-pointer mr-[22px] pl-0'>
                <a className='text-white hover:text-gray-300 transition duration-200' href="#">Help & Support</a>
              </div>
              <div className='top-link-item relative inline-block text-left text-xs h-[25px] leading-[25px] whitespace-nowrap cursor-pointer mr-[22px] pl-0'>
                <a className='text-white hover:text-gray-300 transition duration-200' href="#">Online Store Logistic Partner</a>
              </div>
            </div>
          </div>
          <div className='logo-bar h-[66px] box-border pt-[11px]'>
            <div className='logo-content relative mx-auto w-[1188px] min-w-[1188px] justify-between items-start'>
              <div className='relative inline-block w-[140px] h-[48px] bottom-[7px] align-top z-[1111]'>
                <a href="/">
                  <img className='w-[120px] h-[48px]' src={logo} alt='logo' />
                </a>
              </div>
              <div className='nav-search w-[746px] inline-block z-[1111] relative leading-[38px] bg-white rounded-xl h-[38px] box-content'>
                <form action="" method='GET' autoComplete='off'>
                  <div className='search-box relative w-[100%] h-[45px] box-border'>
                    <div className='h-[38px] box-border absolute top-0 left-0 w-[100%]'>
                      <input type="search" placeholder='Search in OnlineStore' className='bg-white rounded-xl absolute top-0 right-0 bottom-0 left-0 w-[100%] text-[14px] p-[13px_19px] leading-[1] tracking-tight shadow-none border-none' tabIndex={1} value="" />
                    </div>
                    <div className='absolute right-0 top-0 w-[45px]'>
                      <button className='flex w-[50px] h-[28px] border-none rounded-lg shadow-none p-[10px_12px] top-[5px] relative right-[11px] bg-contain bg-center bg-no-repeat bg-purple-200 box-border align-top items-center justify-center'><Search size={18} color='#6A1B9A'/>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className='loginContainer text-white text-[12px] inline-block h-[38px] absolute ml-[12px] box-border z-[1111] font-normal'>
                <ul className='flex float-left relative p-0 mr-[25px] mt-0 mb-0 box-content'></ul>
              </div>
              <div nav-cart></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header