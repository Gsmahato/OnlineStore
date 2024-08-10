import React from 'react'
import Flash from '../../assets/Flash.jpeg'
import switches from '../../assets/switches.jpeg'
const FlashSale = () => {
  return (
    <div className='categories  w-[1188px] m-[0_auto] pt-[24px]'>
      <div className='card-header h-[38px] leading-[38px]'>
        <p className='card title text-customGray text-[22px] overflow-hidden text-ellipsis whitespace-nowrap'>Categories</p>
      </div>
      <div className='cardFsContent bg-white h-[375px]'>
        <div className='cardFsContent-header bg-cover border-b border-[#d5d5d5] flex h-[60px] justify-between mb-[10px] overflow-hidden'>
          <div className='cardFsContent-header-left items-center flex'>
            <div className='cardFsContent-header-left-status flex justify-center ml-[20px]'>
              <div className='text-[14px] font-medium text-primary'>On Sale Now</div>
            </div>
          </div>
          <a className='bg-transparent border border-[#6A1B9A] rounded-[2px] text-[#6A1B9A] text-[14px] font-medium h-[35px] leading-[35px] mr-[11px] mt-[13px] px-[10px] text-center cursor-pointer' href="#">
            <span className='text-[14px] text-[#6A1B9A] font-medium'>SHOP ALL PRODUCTS</span>
          </a>
        </div>
        <div className='cardFsContent-body flex'>
          <a className='h-[290px] mr-[12px] relative w-[188px] text-[#000] no-underline' href="#">
            <div className='cardFsImage-container h-[188px] mb-[4px] w-[188px]'>
              <div className='img-container h-[188px] w-[188px]'>
                <div className='picture-wrapper inline-flex items-center justify-center h-full w-full overflow-hidden'>
                  <img src={Flash} className='object-cover w-full h-full' alt='Image description' />
                </div>
              </div>
            </div>
            <div className='cardFs-text m-[4px_8px_0]'>
              <p className='title text-[14px] mb-[4px] line-clamp-2'>Lizards</p>
              <div className='fs-card-price text-[#6A1B9A] flex flex-row text-[18px] h-[22px] tracking-[-0.56px] leading-[22px] mb-[4px]'>
                <span className='currency text-[18px]'>Rs.</span>
                <span className='price text-[18px]'>4000</span>
              </div>
              <div className='fs-card-original-price flex flex-row leading-[12px] text-[#9e9e9e]'>
                <div className='text-[#9e9e9e] flex flex-row line-through'>
                  <span className='currency text-[12px]'>Rs.</span>
                  <span className='price text-[12px]'>4000</span>
                </div>
                <span className='itemDiscount text-[#212121] text-[12px] ml-[4px]'>-30%</span>
              </div>  
              <div className='fs-card-sold'></div>
            </div>
          </a>
          <a className='h-[290px] mr-[12px] relative w-[188px] text-[#000] no-underline' href="#">
            <div className='cardFsImage-container h-[188px] mb-[4px] w-[188px]'>
              <div className='img-container h-[188px] w-[188px]'>
                <div className='picture-wrapper inline-flex items-center justify-center h-full w-full overflow-hidden'>
                  <img src={Flash} className='object-cover w-full h-full' alt='Image description' />
                </div>
              </div>
            </div>
            <div className='cardFs-text m-[4px_8px_0]'>
              <p className='title text-[14px] mb-[4px] line-clamp-2'>Lizards</p>
              <div className='fs-card-price text-[#6A1B9A] flex flex-row text-[18px] h-[22px] tracking-[-0.56px] leading-[22px] mb-[4px]'>
                <span className='currency text-[18px]'>Rs.</span>
                <span className='price text-[18px]'>4000</span>
              </div>
              <div className='fs-card-original-price flex flex-row leading-[12px] text-[#9e9e9e]'>
                <div className='text-[#9e9e9e] flex flex-row line-through'>
                  <span className='currency text-[12px]'>Rs.</span>
                  <span className='price text-[12px]'>4000</span>
                </div>
                <span className='itemDiscount text-[#212121] text-[12px] ml-[4px]'>-30%</span>
              </div>  
              <div className='fs-card-sold'></div>
            </div>
          </a>
          <a className='h-[290px] mr-[12px] relative w-[188px] text-[#000] no-underline' href="#">
            <div className='cardFsImage-container h-[188px] mb-[4px] w-[188px]'>
              <div className='img-container h-[188px] w-[188px]'>
                <div className='picture-wrapper inline-flex items-center justify-center h-full w-full overflow-hidden'>
                  <img src={Flash} className='object-cover w-full h-full' alt='Image description' />
                </div>
              </div>
            </div>
            <div className='cardFs-text m-[4px_8px_0]'>
              <p className='title text-[14px] mb-[4px] line-clamp-2'>Lizards</p>
              <div className='fs-card-price text-[#6A1B9A] flex flex-row text-[18px] h-[22px] tracking-[-0.56px] leading-[22px] mb-[4px]'>
                <span className='currency text-[18px]'>Rs.</span>
                <span className='price text-[18px]'>4000</span>
              </div>
              <div className='fs-card-original-price flex flex-row leading-[12px] text-[#9e9e9e]'>
                <div className='text-[#9e9e9e] flex flex-row line-through'>
                  <span className='currency text-[12px]'>Rs.</span>
                  <span className='price text-[12px]'>4000</span>
                </div>
                <span className='itemDiscount text-[#212121] text-[12px] ml-[4px]'>-30%</span>
              </div>  
              <div className='fs-card-sold'></div>
            </div>
          </a>
          <a className='h-[290px] mr-[12px] relative w-[188px] text-[#000] no-underline' href="#">
            <div className='cardFsImage-container h-[188px] mb-[4px] w-[188px]'>
              <div className='img-container h-[188px] w-[188px]'>
                <div className='picture-wrapper inline-flex items-center justify-center h-full w-full overflow-hidden'>
                  <img src={Flash} className='object-cover w-full h-full' alt='Image description' />
                </div>
              </div>
            </div>
            <div className='cardFs-text m-[4px_8px_0]'>
              <p className='title text-[14px] mb-[4px] line-clamp-2'>Lizards</p>
              <div className='fs-card-price text-[#6A1B9A] flex flex-row text-[18px] h-[22px] tracking-[-0.56px] leading-[22px] mb-[4px]'>
                <span className='currency text-[18px]'>Rs.</span>
                <span className='price text-[18px]'>4000</span>
              </div>
              <div className='fs-card-original-price flex flex-row leading-[12px] text-[#9e9e9e]'>
                <div className='text-[#9e9e9e] flex flex-row line-through'>
                  <span className='currency text-[12px]'>Rs.</span>
                  <span className='price text-[12px]'>4000</span>
                </div>
                <span className='itemDiscount text-[#212121] text-[12px] ml-[4px]'>-30%</span>
              </div>  
              <div className='fs-card-sold'></div>
            </div>
          </a>
          <a className='h-[290px] mr-[12px] relative w-[188px] text-[#000] no-underline' href="#">
            <div className='cardFsImage-container h-[188px] mb-[4px] w-[188px]'>
              <div className='img-container h-[188px] w-[188px]'>
                <div className='picture-wrapper inline-flex items-center justify-center h-full w-full overflow-hidden'>
                  <img src={Flash} className='object-cover w-full h-full' alt='Image description' />
                </div>
              </div>
            </div>
            <div className='cardFs-text m-[4px_8px_0]'>
              <p className='title text-[14px] mb-[4px] line-clamp-2'>Lizards</p>
              <div className='fs-card-price text-[#6A1B9A] flex flex-row text-[18px] h-[22px] tracking-[-0.56px] leading-[22px] mb-[4px]'>
                <span className='currency text-[18px]'>Rs.</span>
                <span className='price text-[18px]'>4000</span>
              </div>
              <div className='fs-card-original-price flex flex-row leading-[12px] text-[#9e9e9e]'>
                <div className='text-[#9e9e9e] flex flex-row line-through'>
                  <span className='currency text-[12px]'>Rs.</span>
                  <span className='price text-[12px]'>4000</span>
                </div>
                <span className='itemDiscount text-[#212121] text-[12px] ml-[4px]'>-30%</span>
              </div>  
              <div className='fs-card-sold'></div>
            </div>
          </a>
          <a className='h-[290px] mr-[12px] relative w-[188px] text-[#000] no-underline' href="#">
            <div className='cardFsImage-container h-[188px] mb-[4px] w-[188px]'>
              <div className='img-container h-[188px] w-[188px]'>
                <div className='picture-wrapper inline-flex items-center justify-center h-full w-full overflow-hidden'>
                  <img src={Flash} className='object-cover w-full h-full' alt='Image description' />
                </div>
              </div>
            </div>
            <div className='cardFs-text m-[4px_8px_0]'>
              <p className='title text-[14px] mb-[4px] line-clamp-2'>Lizards</p>
              <div className='fs-card-price text-[#6A1B9A] flex flex-row text-[18px] h-[22px] tracking-[-0.56px] leading-[22px] mb-[4px]'>
                <span className='currency text-[18px]'>Rs.</span>
                <span className='price text-[18px]'>4000</span>
              </div>
              <div className='fs-card-original-price flex flex-row leading-[12px] text-[#9e9e9e]'>
                <div className='text-[#9e9e9e] flex flex-row line-through'>
                  <span className='currency text-[12px]'>Rs.</span>
                  <span className='price text-[12px]'>4000</span>
                </div>
                <span className='itemDiscount text-[#212121] text-[12px] ml-[4px]'>-30%</span>
              </div>  
              <div className='fs-card-sold'></div>
            </div>
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default FlashSale