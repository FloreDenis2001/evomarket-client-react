import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow hidden w-[15rem] mx-3'>
       
       <div className="h-[13rem] w-[10rem]">
        <img className='object-cover object-top w-full h-full' src="https://1.grgs.ro/images/products/1/5747/2288243/thumbnails/162-macbook-pro-16-liquid-retina-xdr-apple-m1-pro-chip-10-core-cpu-16gb-512gb-ssd-apple-m1-pro-16-core-gpu-macos-monterey-silver-int-keyboard-fb722d20be0909bc5063fea62f9dfb2a.jpg" alt="" />
       </div>
        
        <div className="p-4">
            <h3 className='text-lg font-medium text-gray-900'>Laptop Apple MacBook Pro 14" cu procesor Apple M2 Pro, 10 nuclee CPU and 16 nuclee GPU, 16 GB, 512GB SSD, Space Grey, INT KB</h3>
        <p></p>
        </div>
    </div>
  )
}

export default HomeSectionCard