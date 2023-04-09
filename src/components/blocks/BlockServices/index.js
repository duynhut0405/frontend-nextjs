import { Button, Container } from '@components/ui'
import { services } from '@data/servies'
import Link from 'next/link'
import Slider from 'react-slick'
import ServiceCard from './ServiceCard'
import { motion } from 'framer-motion'
import {
  CONTAINER,
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_LEFT_ANIMATION_VARIANTS,
  FADE_RIGHT_ANIMATION_VARIANTS,
} from '@data/constants'
const settings = {
  infinite: true,
  centerPadding: '40px',
  slidesTovisible: 1,
  speed: 500,
  dots: false,
  arrows: false,
}

export default function BlockServices() {
  return (
    <Container type='small' className='mt-32'>
      <motion.div
        layoutScroll
        viewport={{ once: true }}
        initial='hidden'
        whileInView='visible'
        variants={CONTAINER}
        className='flex justify-between items-center mb-10'>
        <motion.h3
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='font-bold text-2xl lg:text-5xl max-w-[200px] lg:max-w-sm leading-7 lg:leading-[58px] capitalize'>
          Service we can help you
        </motion.h3>
        <div className='hidden lg:block'>
          <Button type='primary'>See all</Button>
        </div>
        <div className='block lg:hidden'>
          <Link className='text-MAIN' href={''}>
            See all
          </Link>
        </div>
      </motion.div>
      <motion.div
        layoutScroll
        viewport={{ once: true }}
        initial='hidden'
        whileInView='visible'
        variants={CONTAINER}
        className='hidden lg:flex gap-7'>
        <div className='flex flex-col gap-7'>
          <motion.div variants={FADE_LEFT_ANIMATION_VARIANTS}>
            <ServiceCard
              key={services[0].title}
              title={services[0].title}
              description={services[0].description}
              className='rounded-tl-[50px]'
            />
          </motion.div>
          <motion.div variants={FADE_LEFT_ANIMATION_VARIANTS}>
            <ServiceCard
              key={services[1].title}
              title={services[1].title}
              description={services[1].description}
              className='rounded-bl-[50px]'
            />
          </motion.div>
        </div>
        <div className='flex flex-col gap-7 mt-10'>
          <motion.div variants={FADE_RIGHT_ANIMATION_VARIANTS}>
            <ServiceCard
              key={services[2].title}
              title={services[2].title}
              description={services[2].description}
              className='rounded-tr-[50px]'
            />
          </motion.div>
          <motion.div variants={FADE_RIGHT_ANIMATION_VARIANTS}>
            <ServiceCard
              key={services[3].title}
              title={services[3].title}
              description={services[3].description}
              className='rounded-br-[50px]'
            />
          </motion.div>
        </div>
      </motion.div>
      <div className='block lg:hidden'>
        <Slider {...settings}>
          {services.map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              description={item.description}
              className='rounded-[50px]'
            />
          ))}
        </Slider>
      </div>
    </Container>
  )
}
