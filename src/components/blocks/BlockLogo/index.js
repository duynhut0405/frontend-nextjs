import { Container } from '@components/ui'
import Img1 from '@images/logo/1.png'
import Img2 from '@images/logo/2.png'
import Img3 from '@images/logo/3.png'
import Img4 from '@images/logo/4.png'
import Img5 from '@images/logo/5.png'
import Img6 from '@images/logo/6.png'

const array = [Img1, Img2, Img3, Img4, Img5, Img6]
import Image from 'next/image'
export default function BlockLogo() {
  return (
    <Container type='small' className='mt-24'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
        {array.map((item, index) => (
          <div key={index} className='flex justify-center items-center'>
            <Image src={item} alt='img' className='aspect-[4/1]' />
          </div>
        ))}
      </div>
    </Container>
  )
}
