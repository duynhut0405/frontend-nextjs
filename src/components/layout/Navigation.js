import { isActiveLink } from '@utils/isActiveLink'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
const menu = [
  { name: 'Home', slug: '/' },
  { name: 'Menu', slug: '/menu' },
  { name: 'About Us', slug: '/about-us' },
  { name: 'Our Story', slug: '/our-story' },
  { name: 'Blog', slug: '/blog' },
  { name: 'Contact', slug: '/contact-us' },
]

export default function Navigation() {
  const router = useRouter()
  return (
    <nav className='hidden lg:flex ml-14 items-center gap-10'>
      {menu.map((item) => {
        return (
          <Link
            key={item.slug}
            href={item.slug}
            className='text-base dark:text-WHITE text-DARK_BG_1'>
            {item.name}
            {isActiveLink(item.slug, router.pathname) && (
              <motion.div
                layoutId='navigation-underline'
                className='navigation-underline'
                animate
              />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
