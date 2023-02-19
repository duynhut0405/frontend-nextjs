import React from 'react'
import Icon from '@images/png/Icon.png'
import Image from 'next/image'
import { OrnamentNet3 } from '@images/svg'
import { Container } from '@components/ui'
const Footer = () => {
  return (
    <footer>
      <div className='mt-32 bg-CARD2'>
        <Container type='small' className='py-10 px-6 lg:py-12 lg:px-20'>
          <div className='flex flex-col lg:flex-row gap-8'>
            <div className='flex-1 px-12 py-14 lg:py-20 bg-MAIN rounded-[30px] relative max-w-xl'>
              <div className='border-b-2 border-b-TEXT'>
                <p className='text-TEXT font-bold'>Sign Up to Receive Product Updates and More</p>
                <div className='flex justify-between'>
                  <p className='text-TEXT'>youremail@gmail.com</p>
                  <p className='text-TEXT'>{`>`}</p>
                </div>
              </div>
              <div className='hidden lg:block absolute -top-8 -left-8'>
                <OrnamentNet3 />
              </div>
            </div>
            <div className='flex-1 flex flex-col lg:flex-row justify-center items-center gap-8'>
              <div className='flex flex-col gap-4 item-center lg:items-start text-center flex-1'>
                <span className='font-bold'>Office</span>
                <span className='text-center lg:text-start max-w-[180px]'>
                  545, Street 11, Block F California, U.S.A
                </span>
              </div>
              <div className='flex flex-col gap-4 item-center lg:items-start text-center flex-1'>
                <span className='font-bold'>Contact</span>
                <span>+84 123 123 123</span>
                <span>email@gmail.com</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center gap-10 lg:flex-row mt-10 justify-between'>
            <p className='order-3 lg:order-1'>Copyright 2022. All Rights Reserved</p>
            <p className='hidden lg:block'>Terms & Conditions Privacy</p>
            <div className='flex flex-col text-center gap-2 lg:hidden'>
              <p>Terms</p>
              <p>& conditions</p>
              <p>Privacy</p>
            </div>
            <div>
              <Image src={Icon} alt='icon' />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
