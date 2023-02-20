import { Container } from '@components/ui'
import { blogs } from '@data/blogs'
import Link from 'next/link'
import Slider from 'react-slick'
import BlogCard from './BlogCard'

const settings = {
  infinite: true,
  centerPadding: '40px',
  slidesToShow: 1,
  speed: 500,
  dots: false,
  arrows: false,
}

export default function BlockServices() {
  console.log('🚀 ~ file: index.js:3 ~ blogs', blogs)
  return (
    <Container type='small' className='mt-32'>
      <div className='flex justify-between items-center mb-10'>
        <h3 className='font-bold text-2xl lg:text-5xl max-w-[200px] lg:max-w-sm leading-7 lg:leading-[58px] capitalize'>
          Blog from insights
        </h3>
        <div className='block lg:hidden'>
          <Link className='text-MAIN' href={''}>
            See all
          </Link>
        </div>
      </div>
      <div className='hidden lg:grid lg:grid-cols-2 gap-x-8 gap-y-12'>
        {blogs.map((item, index) => (
          <BlogCard
            key={index}
            title={item.title}
            category={item.category}
            user={item.user}
            date={item.date}
            img={item.img}
            description={item.description}
          />
        ))}
      </div>
      <div className='block lg:hidden'>
        <Slider {...settings}>
          {blogs.map((item, index) => (
            <BlogCard
              key={index}
              title={item.title}
              category={item.category}
              user={item.user}
              date={item.date}
              img={item.img}
              description={item.description}
            />
          ))}
        </Slider>
      </div>
    </Container>
  )
}
