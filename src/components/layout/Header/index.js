import React from 'react'
import { Logo, Container } from '@components/ui'
import Navigation from './Navigation'
import { NextSeo } from 'next-seo'
import { Bar } from '@images/svg'
const Header = ({}) => {
  return (
    <header className=''>
      <NextSeo title='Company' description='company' lan />
      <Container type='large' className='my-10'>
        <div className='flex justify-between items-center my-4'>
          <Logo />
          <div className='flex items-center gap-20'>
            <Navigation />
            <Bar />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
