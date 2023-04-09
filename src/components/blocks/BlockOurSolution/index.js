import { Container } from '@components/ui'
import { solutions } from '@data/solution'
import Image3 from '@images/blocks/Image3.jpg'
import { Check, OrnamentCicle, OrnamentNet2 } from '@images/svg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  CONTAINER,
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_LEFT_ANIMATION_VARIANTS,
} from '@data/constants'
export default function BlockOurSolution() {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      layoutScroll
      viewport={{ once: true }}
      variants={CONTAINER}
      className='relative mt-20 lg:mt-32'>
      <div className='w-full h-full'>
        <div className='bg-MAIN absolute bottom-0 h-1/4 w-full lg:w-2/5 lg:h-full -z-10' />
        <div className='bg-CARD2 absolute w-3/5 h-full -z-10 right-0 hidden lg:block' />
      </div>
      <Container type='medium'>
        <div className='flex flex-col lg:flex-row lg:pt-20 pb-16 gap-10'>
          <motion.div
            variants={FADE_LEFT_ANIMATION_VARIANTS}
            className='flex-1 order-2 lg:order-1 relative'>
            <Image
              src={Image3}
              alt={'img'}
              className='rounded-[50px] object-cover h-80 lg:h-full'
              priority={true}
              quality={50}
              sizes='(max-width: 768px) 100%,
              (max-width: 1200px) 666px,
              666px'
            />
            <div className='absolute -bottom-7 -left-7'>
              <OrnamentNet2 />
            </div>
            <div className='absolute -top-12 -right-5 -z-10'>
              <OrnamentCicle color='white' className='w-24 h-24' />
            </div>
          </motion.div>
          <div className='flex-1 order-1 lg:order-2'>
            <div className='flex items-start lg:justify-center lg:items-center flex-col h-full'>
              <div>
                <motion.h2
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                  className='text-2xl lg:text-5xl font-bold'>
                  {solutions.title}
                </motion.h2>
                <div className='mt-12 flex flex-col gap-7'>
                  {solutions.solutions.map((item) => {
                    return (
                      <motion.div
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                        key={item.title}
                        className='flex gap-5'>
                        <Check className='text-MAIN' />
                        <div className='flex flex-col gap-5 font-bold'>
                          <h3 className='text-xl lg:text-2xl'>{item.title}</h3>
                          <p className='max-w-sm'>{item.description}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
