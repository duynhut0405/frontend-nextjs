import { OrnamentNet } from '@images/svg'
import clsx from 'clsx'

export default function BackgroundColor({ position, className }) {
  return (
    <div className={clsx('absolute', position)}>
      {position === 'top-0 left-0' ? (
        <div className='absolute top-0'>
          <OrnamentNet className='w-[200px] h-[183px] lg:w-[490px] lg:h-[430px]' />
        </div>
      ) : null}

      <div
        className={clsx('blur-[250px]', className)}
        style={{
          transform: 'matrix(1, 0, 0, -1, 0, 0)',
        }}
      />
    </div>
  )
}
