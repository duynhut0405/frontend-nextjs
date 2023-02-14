import React from 'react'
import { Logo, Container, Button } from '@components/ui'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Navigation from './Navigation'
const Header = ({}) => {
  return (
    <header className=''>
      <Container className='mt-8'>
        <div className='flex justify-between items-center my-4'>
          <Logo />
          <div className='gap-10 hidden lg:flex'>
            <div className='flex items-center gap-8'>
              <Navigation />
            </div>
            <Button>Contact us</Button>
          </div>
          <Bars3Icon className='w-6 h-6 text-MAIN lg:hidden' />
        </div>
      </Container>
    </header>
  )
}

export default Header
