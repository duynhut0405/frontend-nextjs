import { OrnamentCicle, OrnamentNet, OrnamentStar } from '@images/svg'

export default function BackgroundElement() {
  const _renderTopLeft = () => {
    return (
      <div className='absolute top-0 left-0'>
        <OrnamentNet className='w-[490px] h-[428px]' />
        <OrnamentStar className='w-14 h-14 absolute left-10 bottom-24' />
        <div
          className='w-[341px] h-[341px]  bg-[#7C3EFF] top-0 left-0 absolute'
          style={{
            filter: 'blur(250px)',
            transform: 'matrix(1, 0, 0, -1, 0, 0)',
          }}
        />
      </div>
    )
  }

  const _renderTopRight = () => {
    return (
      <div className='absolute top-0 right-0 w-[300px] h-[300px]'>
        <OrnamentStar className='w-14 h-14 absolute left-0 mt-[50%]' />
        <div
          className='bg-[#BE229C] top-0 right-0 absolute w-full h-full'
          style={{
            filter: 'blur(250px)',
            transform: 'matrix(1, 0, 0, -1, 0, 0)',
          }}
        />
      </div>
    )
  }

  const _renderBottomLeft = () => {
    return (
      <div className='absolute bottom-0 left-0 w-[242px] h-[242px]'>
        <div
          className='bg-[#22B5BE] top-0 right-0 absolute w-full h-full'
          style={{
            filter: 'blur(250px)',
            transform: 'matrix(1, 0, 0, -1, 0, 0)',
          }}
        />
      </div>
    )
  }

  const _renderBottomRight = () => {
    return (
      <div className='absolute bottom-0 right-0 w-[225px] h-[225px]'>
        <OrnamentStar className='w-14 h-14 absolute top-5 -mt-[100%]' />
        <div
          className='bg-[#FFC93E] top-0 right-0 absolute w-full h-full'
          style={{
            filter: 'blur(250px)',
            transform: 'matrix(1, 0, 0, -1, 0, 0)',
          }}
        />
      </div>
    )
  }

  return (
    <div className='absolute top-0 h-[1050px] w-full -z-10'>
      <div className='relative w-full h-full'>
        <div className='mt-auto mb-auto top-[45%] -ml-16 absolute'>
          <OrnamentCicle />
        </div>
        <div className='bottom-0 right-0 absolute'>
          <OrnamentCicle/>
        </div>
        {_renderTopLeft()}
        {_renderTopRight()}
        {_renderBottomLeft()}
        {_renderBottomRight()}
      </div>
    </div>
  )
}
