import { Logo } from '@components/common'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

const menu = [
  { name: 'Home', slug: '/' },
  { name: 'Menu', slug: '/menu' },
  { name: 'About Us', slug: '/about-us' },
  { name: 'Our Story', slug: '/our-story' },
  { name: 'Blog', slug: '/blog' },
  { name: 'Contact', slug: '/contact-us' },
]
export default function SliderOvers({ open, setOpen }) {
  const router = useRouter()
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ x: '100%' }}
            animate={{
              x: 0,
            }}
            exit={{
              x: '100%',
            }}
            transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
            className='fixed bg-DARK_BG_1 text-DARK_BG_1 shadow-lg top-0 right-0 w-full h-screen px-4 py-7 z-20'>
            <div className='flex justify-between items-center mb-10'>
              <Logo />
              <XMarkIcon
                onClick={() => setOpen((open) => !open)}
                className='h-6 w-6 text-DARK_HIGHLIGHT cursor-pointer'
                aria-hidden='true'
              />
            </div>
            {menu.map((item) => {
              return (
                <div
                  className='cursor-pointer'
                  onClick={() => {
                    router.push(item.slug)
                    setOpen(false)
                  }}
                  key={item.slug}>
                  <h3>{item.name}</h3>
                </div>
              )
            })}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
