import { Button, Container } from '@components/ui'
import Image2 from '@images/blocks/Image2.jpg'
import { OrnamentCicle, OrnamentCol } from '@images/svg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  CONTAINER,
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_LEFT_ANIMATION_VARIANTS,
  FADE_RIGHT_ANIMATION_VARIANTS,
} from '@data/constants'
export default function BlockAboutUs() {
  return (
    <Container type='small' className='mt-32'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        layoutScroll
        viewport={{ once: true }}
        variants={CONTAINER}
        className='flex flex-col lg:flex-row gap-10'>
        <div className='flex flex-col gap-10 flex-1'>
          <motion.h2 variants={FADE_DOWN_ANIMATION_VARIANTS} className='text-5xl max-w-[400px]'>
            We are a creative digital agency
          </motion.h2>
          <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS}>
            Dalio started with a vision for building an agency to solve the business problems of the
            future, and that requires a different model. We’re not a branding agency that dabbles in
            tech, and we’re not a development shop that leaves you hanging when it’s time to go to
            market.
          </motion.p>
          <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS}>
            Dalio started with a vision for building an agency to solve the business problems of the
            future, and that requires a different model. We’re not a branding agency that dabbles in
            tech, and we’re not a development shop that leaves you hanging when it’s time to go to
            market.
          </motion.p>
          <Button className='w-[170px]'>Contact Us</Button>
        </div>
        <div className='flex gap-6 flex-1 justify-center'>
          <motion.div
            variants={FADE_LEFT_ANIMATION_VARIANTS}
            className='flex flex-col gap-6 items-end'>
            <Image
              src={Image2}
              alt='img'
              className='rounded-tl-[50px] w-[260px] h-[260px] object-cover'
              priority={100}
              quality={100}
            />
            <Image
              src={Image2}
              alt='img'
              className='rounded-bl-[50px] w-[220px] h-[220px] object-cover'
              priority={100}
              quality={100}
            />
          </motion.div>
          <motion.div variants={FADE_RIGHT_ANIMATION_VARIANTS} className='flex flex-col gap-6'>
            <div className='relative'>
              <div className='absolute left-10 -z-10'>
                <OrnamentCol />
              </div>
              <Image
                src={Image2}
                alt='img'
                className='rounded-tr-[50px] w-[220px] h-[220px] object-cover mt-14'
                priority={100}
                quality={100}
              />
            </div>
            <div className='relative'>
              <Image
                src={Image2}
                alt='img'
                className='rounded-bl-[50px] w-[260px] h-[260px] object-cover'
                priority={100}
                quality={100}
              />
              <div className='absolute -bottom-12 -right-4 -z-10'>
                <OrnamentCicle color='white' />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  )
}
