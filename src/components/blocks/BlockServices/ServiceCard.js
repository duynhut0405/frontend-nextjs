import { Button } from '@components/ui'
import { Services1 } from '@images/svg'
import clsx from 'clsx'

export default function ServiceCard({ title, description, className }) {
  return (
    <div className={clsx('bg-CARD2 pl-8 pr-12 py-11 lg:py-20 ', className)}>
      <div className='flex flex-col gap-6'>
        <Services1 />
        <h4 className=' text-3xl'>{title}</h4>
        <p className='max-w-[230px] lg:max-w-none'>{description}</p>
        <div>
          <Button type='primary'>See all</Button>
        </div>
      </div>
    </div>
  )
}
