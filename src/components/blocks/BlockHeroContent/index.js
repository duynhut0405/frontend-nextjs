import { Button, Container } from '@components/ui'
import Image from 'next/image'
import Image1 from '@images/blocks/Image1.jpg'
import Wire from '@images/png/Image1.png'
import WorldClass from '@images/png/Image2.png'
export default function BlockHeroContent() {
  return (
    <Container className='relative' type='large'>
      <div className='absolute right-0 -z-10'>
        <Image src={Wire} width={700} height={750} alt='img' priority={100} quality={75} />
      </div>
      <div className='flex'>
        <Image src={WorldClass} width={240} height={120} alt='img' priority={100} quality={75} />
        <h1 className='font-bold text-[70px] md:text-[100px] lg:text-[10rem] leading-none'>
          Digital
        </h1>
      </div>
      <div className='flex'>
        <div>
          <p className='font-bold text-7xl md:text-[100px] lg:text-[150px] leading-none'>Agency</p>
          <p className='text-2xl leading-10 max-w-[500px] font-normal text-CARD mt-10'>
            Full-service design support that growing B2B companies need. World leading agency.
          </p>
          <Button className='mt-14'>Our Projects</Button>
        </div>
        <div className='w-[466px] h-[475px] relative mt-11'>
          <Image
            src={Image1}
            fill
            alt='img'
            priority={100}
            quality={100}
            className='rounded-[50px] object-cover'
          />
        </div>
      </div>
    </Container>
  )
}
