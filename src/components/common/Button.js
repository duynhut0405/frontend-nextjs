import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import Link from 'next/link'

export default function Button({ href, children, className, color = 'text-[#2E2D33]', ...props }) {
  return (
    <Link
      href={href}
      className={clsx('inline-flex items-center bg-DARK_HIGHLIGHT py-2 px-6', className)}
      {...props}>
      <p className={`mb-1 ${color}`}>{children}</p>
      <ArrowLongRightIcon className={`w-[20px] ml-2 ${color}`} />
    </Link>
  )
}
