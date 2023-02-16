import { Button, Container } from '@components/ui'
import Image from 'next/image'
import Image1 from '@images/blocks/Image1.jpg'
import Image2 from '@images/blocks/Image2.jpg'
import Wire from '@images/png/Image1.png'
import WorldClass from '@images/png/Image2.png'
import { OrnamentCicle, OrnamentCicleWhite, PlayVideo } from '@images/svg'
export default function BlockHeroContent() {
  return (
    <Container className='relative' type='large'>
      <div className='absolute right-0 -z-10'>
        <Image src={Wire} width={700} height={750} alt='img' priority={100} quality={75} />
      </div>
      <div className='flex justify-center items-center flex-col'>
        <div className='relative'>
          <div className='absolute -left-[50%]'>
            <Image
              src={WorldClass}
              width={240}
              height={100}
              alt='img'
              priority={100}
              quality={75}
            />
          </div>
          <h1 className='font-bold text-[70px] md:text-[100px] lg:text-[10rem] leading-none'>
            Digital
          </h1>
        </div>
        <div className='flex flex-col lg:flex-row justify-between gap-5'>
          <div className='w-[250px] h-[300px] relative mr-20 self-end mt-[25%] order-2 lg:order-1'>
            <Image
              src={Image2}
              fill
              alt='img'
              priority={100}
              quality={100}
              className='rounded-[30px] object-cover'
            />
            <div className='absolute -bottom-[25%] -right-[25%] text-white'>
              <OrnamentCicleWhite />
            </div>
          </div>

          <div className='block lg:flex order-1 lg:order-2'>
            <div>
              <p className='font-bold text-7xl md:text-[100px] lg:text-[150px] leading-none'>
                Agency
              </p>
              <p className='text-2xl leading-10 max-w-[500px] font-normal text-CARD mt-10'>
                Full-service design support that growing B2B companies need. World leading agency.
              </p>
              <Button className='mt-14'>Our Projects</Button>
            </div>
            <div className='w-full lg:w-[466px] h-[333px] lg:h-[475px] relative mt-11'>
              <Image
                src={Image1}
                fill
                alt='img'
                priority={100}
                quality={100}
                className='rounded-[50px] object-cover'
              />
              <div className='absolute -bottom-20 right-10'>
                <PlayVideo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
