import { Button } from '@components/ui'
import { CONTAINER, FADE_DOWN_ANIMATION_VARIANTS } from '@data/constants'
import { Services1 } from '@images/svg'
import clsx from 'clsx'
import { motion } from 'framer-motion'
export default function ServiceCard({ title, description, className }) {
  return (
    <motion.div
      layoutScroll
      viewport={{ once: true }}
      whileHover={{ y: 5 }}
      initial='hidden'
      whileInView='visible'
      variants={CONTAINER}
      className={clsx('bg-CARD2 pl-8 pr-12 py-11 lg:py-20 ', className)}>
      <div className='flex flex-col gap-6'>
        <Services1 />
        <motion.h4 variants={FADE_DOWN_ANIMATION_VARIANTS} className=' text-3xl'>
          {title}
        </motion.h4>
        <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS} className='max-w-[230px] lg:max-w-none'>
          {description}
        </motion.p>
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <Button type='primary'>See all</Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
