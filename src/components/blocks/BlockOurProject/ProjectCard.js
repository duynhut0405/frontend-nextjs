import clsx from 'clsx'
import Image4 from '@images/blocks/Image4.jpg'
import Image from 'next/image'
export default function ProjectCard({ title, description, className }) {
  return (
    <div className={clsx('', className)}>
      <div className='flex flex-col gap-8'>
        <Image src={Image4} className='w-full rounded-[20px] md:rounded-[50px]' alt='img' />
        <div className='hidden md:flex flex-col gap-8'>
          <h4 className='text-2xl max-w-sm'>{title}</h4>
          <p className=''>{description}</p>
        </div>
      </div>
    </div>
  )
}
