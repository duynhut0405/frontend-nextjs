import React from 'react'
import Link from 'next/link'
import { ArrowLongRightIcon, Bars3Icon } from '@heroicons/react/24/solid'
import imgFacebook from '@images/social/Facebook.svg'
import imgInstangram from '@images/social/Instangram.svg'
import imgLinkedIn from '@images/social/LinkedIn.svg'
import imgTwitter from '@images/social/Twitter.svg'
import { Image } from '@components/common'
const menu = [
  { name: 'Home', slug: '/' },
  { name: 'Menu', slug: '/menu' },
  { name: 'About Us', slug: '/about-us' },
  { name: 'Our Story', slug: '/our-story' },
  { name: 'Blog', slug: '/blog' },
  { name: 'Contact', slug: '/contact' },
]

const Footer = () => {
  return (
    <footer>
      <div className='border-b-[#535353] border-b-[1px] pb-3'>
        <div className='center'>
          <div className='flex flex-col items-center'>
            <p className='text-3xl text-DARK_HIGHLIGHT font-bold mb-10'>coffee.</p>
            <div className='hidden items-center gap-10 lg:flex'>
              {menu.map((item) => {
                return (
                  <Link key={item.slug} href={item.slug} className='text-base text-WHITE'>
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-7'>
        <div className='center'>
          <div className='flex-1'>
            <p>© 2021 Finsweet | All rights reserved.</p>
          </div>
          <div className='center flex-1 gap-5'>
            <Image src={imgFacebook} className='w-3 h-3' />
            <Image src={imgInstangram} className='w-3 h-3' />
            <Image src={imgLinkedIn} className='w-3 h-3' />
            <Image src={imgTwitter} className='w-3 h-3' />
          </div>
          <div className='flex items-center justify-end  flex-1'>
            <p className='font-medium text-WHITE'>Contact Us</p>
            <ArrowLongRightIcon className='w-[20px] ml-2 text-DARK_HIGHLIGHT' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
