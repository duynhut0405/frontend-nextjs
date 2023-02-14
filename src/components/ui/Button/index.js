import { ArrowUpRight } from '@images/svg'
import clsx from 'clsx'
import Link from 'next/link'

import s from './Button.module.css'
export default function Container({ className, href, type = 'default', children, ...props }) {
  const Component = href ? Link : 'button'

  const style = clsx(
    s.root,
    { [s.default]: type === 'default', [s.primary]: type === 'primary' },
    className
  )

  return (
    <Component className={style} {...props}>
      {children} <ArrowUpRight className='w-4 h-4' />
    </Component>
  )
}
