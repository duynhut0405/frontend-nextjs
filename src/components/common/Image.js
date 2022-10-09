import Image from 'next/future/image'

export default ({ src, className, layout, ...props }) => {
  return <Image src={src} alt='' priority={true} className={className} {...props} />
}
