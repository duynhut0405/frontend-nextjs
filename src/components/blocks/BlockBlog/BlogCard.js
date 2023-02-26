import clsx from 'clsx'
import Image from 'next/image'
export default function BlogCard({ title, img, category, user, date, description, className }) {
  return (
    <div className={clsx('flex flex-col gap-6 ', className)}>
      <Image
        src={img}
        alt='img'
        priority={true}
        quality={50}
        className='rounded-[50px] object-cover max-h-72'
      />
      <div className='flex flex-col gap-4'>
        <div className=''>
          <span className='bg-CARD2 p-2 text-xs font-bold text-MAIN rounded-2xl'>{category}</span>
        </div>
        <p className='text-white'>
          {user} &#x2022; <span>{date}</span>
        </p>
        <h4 className='text-3xl font-bold'>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}
