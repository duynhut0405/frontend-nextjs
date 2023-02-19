import { Container } from '@components/ui'
import { solutions } from '@data/solution'
import Image3 from '@images/blocks/Image3.jpg'
import { Check, OrnamentCicle, OrnamentNet2 } from '@images/svg'
import Image from 'next/image'
export default function BlockOurSolution() {
  return (
    <div className='relative mt-20 lg:mt-32'>
      <div className='w-full h-full'>
        <div className='bg-MAIN absolute bottom-0 h-1/4 w-full lg:w-2/5 lg:h-full -z-10' />
        <div className='bg-CARD2 absolute w-3/5 h-full -z-10 right-0 hidden lg:block' />
      </div>
      <Container type='medium'>
        <div className='flex flex-col lg:flex-row lg:pt-20 pb-16 gap-10'>
          <div className='flex-1 order-2 lg:order-1 relative'>
            <Image
              src={Image3}
              alt={'img'}
              className='rounded-[50px] object-cover w-full h-[320px] lg:w-[666px] lg:h-[650px]'
            />
            <div className='absolute -bottom-7 -left-7'>
              <OrnamentNet2 />
            </div>
            <div className='absolute -top-12 -right-5 -z-10'>
              <OrnamentCicle color='white' className='w-24 h-24' />
            </div>
          </div>
          <div className='flex-1 order-1 lg:order-2'>
            <div className='flex items-start lg:justify-center lg:items-center flex-col h-full'>
              <div>
                <h2 className='text-2xl lg:text-5xl font-bold'>{solutions.title}</h2>
                <div className='mt-12 flex flex-col gap-7'>
                  {solutions.solutions.map((item) => {
                    return (
                      <div key={item.title} className='flex gap-5'>
                        <Check className='text-MAIN' />
                        <div className='flex flex-col gap-5 font-bold'>
                          <h3 className='text-xl lg:text-2xl'>{item.title}</h3>
                          <p className='max-w-sm'>{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
