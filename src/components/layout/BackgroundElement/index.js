import { OrnamentCicle } from '@images/svg'
import BackgroundColor from './BackgroundColor'

export default function BackgroundElement() {
  return (
    <div className='absolute top-0 h-[1050px] w-full -z-10'>
      <div className='relative w-full h-full'>
        <div className='mt-auto mb-auto top-[45%] -ml-16 absolute'>
          <OrnamentCicle />
        </div>
        <div className='bottom-0 right-0 absolute'>
          <OrnamentCicle />
        </div>
        <BackgroundColor
          position='top-0 left-0'
          className='bg-[#7C3EFF] w-full lg:w-[341px] h-[341px]'
        />
        <BackgroundColor position='top-0 right-0' className='bg-[#BE229C] w-[300px] h-[300px]' />
        <BackgroundColor position='bottom-0 left-0' className='bg-[#22B5BE] w-[242px] h-[242px]' />
        <BackgroundColor position='bottom-0 right-0' className='bg-[#FFC93E] w-[225px] h-[225px]' />
      </div>
    </div>
  )
}
