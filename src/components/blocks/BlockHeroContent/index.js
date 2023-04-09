import { Button, Container } from '@components/ui'
import Image from 'next/image'
import Image1 from '@images/blocks/Image1.jpg'
import Image2 from '@images/blocks/Image2.jpg'
import Wire from '@images/png/Image1.png'
import Wire2 from '@images/png/Image4.png'
import WorldClass from '@images/png/Image2.png'
import { OrnamentCicle, OrnamentStar, PlayVideo } from '@images/svg'
import { motion } from 'framer-motion'
import { CONTAINER, FADE_DOWN_ANIMATION_VARIANTS } from '@data/constants'
export default function BlockHeroContent() {
  return (
    <motion.div
      layoutScroll
      viewport={{ once: true }}
      initial='hidden'
      whileInView='visible'
      variants={CONTAINER}>
      <Container className='relative' type='large'>
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className='absolute bottom-0 lg:top-32'>
          <OrnamentStar className='w-6 h-6 lg:w-14 lg:h-14' />
        </motion.div>
        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='absolute -top-10 right-12 lg:top-0 lg:right-44'>
          <OrnamentStar className='w-6 h-6 lg:w-14 lg:h-14' />
        </motion.div>
        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='hidden lg:block absolute right-0 -z-10'>
          <Image src={Wire} alt='img' priority={100} quality={75} />
        </motion.div>
        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='block lg:hidden absolute right-4 -z-10'>
          <Image src={Wire2} alt='img' priority={100} quality={75} />
        </motion.div>
        <div className='flex justify-center items-center flex-col'>
          <div className='relative'>
            <div className='absolute top-8 -left-10 lg:top-20 lg:-left-56 w-[130px] h-[80px] lg:w-[240px] lg:h-auto'>
              <Image
                src={WorldClass}
                alt='img'
                priority={true}
                quality={75}
                className='-rotate-[25deg] w-[95px] lg:w-auto'
              />
            </div>
            <h1 className='font-bold ml-14 lg:ml-0 text-[70px] md:text-[100px] lg:text-[10rem] mb-4 lg:mb-0 leading-none'>
              Digital
            </h1>
          </div>
          <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-0'>
            <motion.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='w-[250px] h-[300px] relative lg:mr-20 mt-[25%] self-start order-2 lg:order-1'>
              <Image
                src={Image2}
                fill
                alt='img'
                priority={true}
                quality={50}
                className='rounded-[30px] object-cover'
              />
              <div className='absolute -bottom-[25%] -right-[25%] text-white -z-10'>
                <OrnamentCicle color={'white'} />
              </div>
            </motion.div>

            <div className='block lg:flex order-1 lg:order-2 gap-2'>
              <div>
                <h1 className='font-bold text-7xl md:text-[100px] lg:text-[150px] leading-none'>
                  Agency
                </h1>
                <motion.p
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                  className='text-2xl leading-10 max-w-[500px] font-normal text-CARD mt-6 lg:mt-10'>
                  Full-service design support that growing B2B companies need. World leading agency.
                </motion.p>
                <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
                  <Button className='mt-6 lg:mt-14'>Our Projects</Button>
                </motion.div>
              </div>
              <div className='w-full lg:w-[466px] h-[333px] lg:h-[475px] relative mt-14'>
                <Image
                  src={Image1}
                  fill
                  alt='img'
                  priority={true}
                  quality={100}
                  className='rounded-[50px] object-cover'
                />
                <motion.div
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                  className='absolute -bottom-20 right-10'>
                  <PlayVideo />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
