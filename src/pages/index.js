import Head from 'next/head'
import Image from 'next/future/image'
import logo from '@images/logo.jpg'
export default function Home() {
  console.log('🚀 ~ file: index.js ~ line 9 ~ Home ~ logo', logo)
  return (
    <div>
      <p className='text-red-700 font-bold'>TEST</p>
      <Image src={logo} />
    </div>
  )
}
