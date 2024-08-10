import React from 'react'
import logo from '../assets/logo.png'
import { Search, User, ChevronDown, Globe, ShoppingCart } from 'lucide-react'

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
                      <button className='flex w-[50px] h-[28px] border-none rounded-lg shadow-none p-[10px_12px] top-[5px] relative right-[11px] bg-contain bg-center bg-no-repeat bg-purple-200 box-border align-top items-center justify-center'><Search size={18} color='#6A1B9A' />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className='loginContainer text-white text-[12px] inline-flex h-[38px] absolute ml-[12px] box-border z-[1111] font-normal'>
                <ul className='flex flex-row items-center float-left relative p-0 mr-[25px] mt-0 mb-0 box-content text-[12.5px] font-[700] h-full'>
                  <li className='flex pl-[1em] justify-center items-center'>
                    <User size={20} />
                    <a href="#" className='pl-[5px]'>Login</a>
                  </li>
                  <li className='mx-5'>|</li>
                  <li className='flex items-center'>
                    <a href="#">Sign Up</a>
                  </li>
                </ul>
                <div className='z-[1] h-[38px] text-white pr-0 relative text-[12.5px] font-[700]'>
                  <ul className='relative flex p-0 h-full cursor-pointer'>
                    <li className='flex text-[14px] uppercase items-center'>
                      <Globe size={20} className='mr-[5px]' />
                      en
                    </li>
                    <li className='flex items-center ml-[2px]'>
                      <ChevronDown size={14} />
                    </li>
                  </ul>
                </div>
              </div>
              <div className='nav-cart inline-block h-[38px] w-[40px] absolute right-[-3px] m-[-5px_0_0] z-[1111] text-white box-content p-0'>
                <a className='flex items-center h-full' href="#">
                  <span>
                    <ShoppingCart size={30} />
                  </span>
                  <span className='absolute right-[-4px] top-0 text-primary bg-white text-center  box-content font-[400] text-[8px] min-w-[14px] leading-[14px] rounded-[50%] border-[3px] border-primary'>1</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header