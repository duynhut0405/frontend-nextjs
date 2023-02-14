import { headerJson } from '@data/header'
import { isActiveLink } from '@ultils/checkLinkActive'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navigation() {
  const router = useRouter()
  return (
    <nav className='hidden items-center gap-10 ml-14 lg:flex'>
      {headerJson.map((item) => {
        return (
          <Link
            key={item.link}
            href={item.link}
            className='text-base dark:text-WHITE text-DARK_BG_1'>
            <p className='font-normal'>{item.title}</p>
            {isActiveLink(item.link, router.pathname) && (
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
