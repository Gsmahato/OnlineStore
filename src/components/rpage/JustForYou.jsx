import React from 'react'
import Flash from '../../assets/Flash.jpeg'

const JustForYou = () => {
  return (
    <div className='categories  w-[1188px] m-[0_auto] pt-[24px]'>
      <div className='card-header h-[38px] leading-[38px]'>
        <p className='card title text-customGray text-[22px] overflow-hidden text-ellipsis whitespace-nowrap'>Just For You</p>
      </div>
      <div className='cardContent'>
        <div className='JFYItems'>
          <div className='JFY-wrapper flex flex-row flex-wrap w-full'>
            <a className='bg-[#fff] h-full mb-[20px] mr-[7px] min-h-[189px] w-[189px] text-[#000] no-underline cursor-pointer' href="">
              <div className='image-container w-full h-[189px] flex items-center justify-center'>
                <div className='picture-wrapper inline-flex items-center justify-center h-full w-full overflow-hidden'>
                  <img src={Flash} alt='Image description' className='h-full w-full max-h-full max-w-full inline-block border-0 object-cover' />
                </div>
              </div>
              <div className='card-description bg-[#fff] p-[4px_8px_12px]'>
                <div className='jfy-title text-[14px] h-[36px] leading-[18px] line-clamp-2'>Lizard</div>
                <div className='hp-mod-price flex mt-[4px]'>
                  <div className='hp-mod-price-first text-[18px] h-[22px] leading-[22px] text-[#6A1B9A]'>
                    <span className='currency text-[#6A1B9A] text-[18px] leading-[22px]'>Rs.</span>
                    <span className='price text-[#6A1B9A] text-[18px] leading-[22px]'>4000</span>
                    <span className='discount-left text-[#212121] text-[12px] ml-[4px] opacity-[0.8]'>-68%
                    </span>
                  </div>
                </div>
                <div className='card-jfy-footer mt-[8px] relative'>
                  <div className='flex flex-row'>
                    <div className='jfy-rating relative'>
                      <div className='top-layer-checked overflow-hidden absolute whitespace-nowrap z-[2] w-[76%] inline-block'>
                        <span>*</span>
                      </div>
                    </div>
                    <div className='jfy-rating-comment'></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JustForYou