import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Head from 'next/head'
import { Logo } from '@components/common'
import SliderOvers from './SlideOvers'
import DarkModeToggle from './DarkModeToggle'
import Navigation from './Navigation'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header
    // className='fixed w-full border-b-2 border-b-grey z-50 bg-DARK_BG_1'
    >
      <Head>
        <title>coffee.</title>
        <link rel='icon' sizes='96x96' href='/logo.jpg' />
        <meta property='og:image' content='/logo.jpg' />
      </Head>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-7'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-grow justify-center lg:flex-grow-0 items-center order-2 lg:order-1'>
            <Logo />
          </div>
          <div className='flex-grow-0 lg:flex-grow order-2'>
            <Navigation />
          </div>
          <div className='order-1 lg:order-2 lg:flex gap-5'>
            <DarkModeToggle />
          </div>
          <div className='block order-3 lg:hidden'>
            <Bars3Icon
              className='h-6 w-6 text-DARK_HIGHLIGHT cursor-pointer'
              aria-hidden='true'
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>
      <SliderOvers open={open} setOpen={setOpen} />
    </header>
  )
}

export default Header
