import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return <Image src='/Logo.svg' alt='logo' width={120} height={60} quality={100} priority={100} />
}
