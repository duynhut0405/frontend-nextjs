import { Container } from '@components/ui'
import Link from 'next/link'
import Image5 from '@images/png/Image5.png'
import { Quote, Rating } from '@images/svg'
import Image from 'next/image'
const data = {
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper consequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisque elementum, consequat pharetra lectus eget vivamus ut. Magna aliquam tellus at volutpat cras aliquet facilisi quis adipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque blandit augue integer maecenas mattis amet, nec.',
  img: Image5,
  name: 'Brooklyn Simmons',
  position: 'Pendron.Inc, CEO',
}

export default function BlockTestimonials() {
  return (
    <Container type='small'>
      <div className='pt-20 lg:pt-32'>
        <div className='flex justify-between items-center w-full mb-12'>
          <h3 className='font-bold text-2xl md:text-5xl'>What client says</h3>
          <div className='block lg:hidden'>
            <Link className='text-MAIN' href={''}>
              See all
            </Link>
          </div>
        </div>
        <div className='flex overflow-hidden gap-8'>
          {[0, 1, 2, 3].map((item) => {
            return (
              <div
                key={item}
                className='px-7 lg:px-16 py-14 bg-CARD2 rounded-[50px] w-full lg:w-[750px] flex-shrink-0'>
                <Quote />
                <p className='my-8'>{data.content}</p>
                <div className='flex flex-col lg:flex-row items-center justify-between'>
                  <div className='flex gap-4'>
                    <Image src={data.img} alt='avatar' className='rounded-full h-[70px] w-[70px]' />
                    <div className='flex flex-col justify-center'>
                      <span>{data.name}</span>
                      <span className='text-MAIN'>{data.position}</span>
                    </div>
                  </div>
                  <div className='ml-16 mt-4 lg:mt-0 lg:ml:0'>
                    <Rating />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}
