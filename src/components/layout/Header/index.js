import React from 'react'
import { Logo, Container, Button } from '@components/ui'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Navigation from './Navigation'
import { NextSeo } from 'next-seo'
const Header = ({}) => {
  return (
    <header className=''>
      <NextSeo title='Company' description='company' lan />
      <Container className='my-10'>
        <div className='flex justify-between items-center my-4'>
          <Logo />
          <div className='flex items-center gap-20'>
            <Navigation />
            <Bars3Icon className='w-6 h-6 text-MAIN ' />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
