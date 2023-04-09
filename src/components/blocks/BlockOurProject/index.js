import { Button, Container } from '@components/ui'
import { projects } from '@data/projects'
import Link from 'next/link'
import Slider from 'react-slick'
import ProjectCard from './ProjectCard'
const tabs = ['All', 'UI/UX', 'Web Design']

const settings = {
  infinite: true,
  centerPadding: '40px',
  slidesTovisible: 1,
  speed: 500,
  dots: false,
  arrows: false,
}

export default function BlockOurProject() {
  return (
    <Container type='small' className='mt-32 relative'>
      <div className='flex flex-col justify-center items-center gap-8 mb-10'>
        <div className='flex justify-between md:justify-center items-center w-full'>
          <h3 className='font-bold text-2xl md:text-5xl'>Our latest Projects</h3>
          <div className='block lg:hidden'>
            <Link className='text-MAIN' href={''}>
              See all
            </Link>
          </div>
        </div>
        <div className='flex gap-8 md:gap-12 overflow-hidden'>
          {tabs.map((item) => (
            <span key={item} className='flex-none'>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className='hidden md:grid md:grid-cols-2 md:gap-8'>
        {projects.map((item) => (
          <ProjectCard key={item} title={item.title} description={item.description} />
        ))}
      </div>
      <div className='block md:hidden'>
        <Slider {...settings}>
          {projects.map((item) => (
            <ProjectCard key={item} title={item.title} description={item.description} />
          ))}
        </Slider>
      </div>
      <div className='hidden mt-10 md:flex justify-center'>
        <Button>Load more</Button>
      </div>
    </Container>
  )
}
