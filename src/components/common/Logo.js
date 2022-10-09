import Link from 'next/link'
import logo from '@images/logo.jpg'
import Image from './Image'
export default function Logo() {
  return (
    <Link href='/' className='flex mt-1'>
      <Image src={logo} className='w-24 h-24 object-contain' />
    </Link>
  )
}
