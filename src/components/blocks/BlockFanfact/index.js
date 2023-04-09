import { Counter } from '@components/common'
import { fanfact } from '@data/fanfact'

export default function BlockFanfact() {
  return (
    <div className='max-w-5xl mx-auto mt-32'>
      <div className='flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-center'>
        {fanfact.map((item) => (
          <div className='flex flex-col gap-2 items-center' key={item.title}>
            <Counter from={0} to={item.title} className='font-bold text-5xl' />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
