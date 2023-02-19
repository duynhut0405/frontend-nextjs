import { fanfact } from '@data/fanfact'

export default function BlockFanfact() {
  return (
    <div className='max-w-5xl mx-auto mt-32'>
      <div className='flex flex-col lg:flex-row gap-24 items-center justify-center'>
        {fanfact.map((item) => (
          <div className='flex flex-col gap-2' key={item.title}>
            <h3 className='font-bold text-5xl'>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
