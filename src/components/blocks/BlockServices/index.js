import { Button, Container } from '@components/ui'
import { services } from '@data/servies'
import Link from 'next/link'
import Slider from 'react-slick'
import ServiceCard from './ServiceCard'

const settings = {
  infinite: true,
  centerPadding: '40px',
  slidesToShow: 1,
  speed: 500,
  dots: false,
  arrows: false,
}

export default function BlockServices() {
  return (
    <Container type='small' className='mt-32'>
      <div className='flex justify-between items-center mb-10'>
        <h3 className='font-bold text-2xl lg:text-5xl max-w-[200px] lg:max-w-sm leading-7 lg:leading-[58px] capitalize'>
          Service we can help you
        </h3>
        <div className='hidden lg:block'>
          <Button type='primary'>See all</Button>
        </div>
        <div className='block lg:hidden'>
          <Link className='text-MAIN' href={''}>
            See all
          </Link>
        </div>
      </div>
      <div className='hidden lg:flex gap-7'>
        <div className='flex flex-col gap-7'>
          <ServiceCard
            key={services[0].title}
            title={services[0].title}
            description={services[0].description}
            className='rounded-tl-[50px]'
          />
          <ServiceCard
            key={services[1].title}
            title={services[1].title}
            description={services[1].description}
            className='rounded-bl-[50px]'
          />
        </div>
        <div className='flex flex-col gap-7 mt-10'>
          <ServiceCard
            key={services[2].title}
            title={services[2].title}
            description={services[2].description}
            className='rounded-tr-[50px]'
          />
          <ServiceCard
            key={services[3].title}
            title={services[3].title}
            description={services[3].description}
            className='rounded-br-[50px]'
          />
        </div>
      </div>
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
