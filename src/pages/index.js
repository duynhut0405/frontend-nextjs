import {
  BlockBlog,
  BlockFanfact,
  BlockHeroContent,
  BlockLogo,
  BlockServices,
  BlockTestimonials,
} from '@components/blocks'
import dynamic from 'next/dynamic'
import { Fragment } from 'react'
const BackgroundElement = dynamic(import('../components/layout/BackgroundElement'), { ssr: false })
const BlockOurSolution = dynamic(import('../components/blocks/BlockOurSolution'))
const BlockOurProject = dynamic(import('../components/blocks/BlockOurProject'))
const BlockAboutUs = dynamic(import('../components/blocks/BlockAboutUs'))
export default function Home() {
  return (
    <Fragment>
      <BackgroundElement />
      <BlockHeroContent />
      <BlockAboutUs />
      <BlockLogo />
      <BlockFanfact />
      <BlockOurSolution />
      <BlockServices />
      <BlockOurProject />
      <BlockTestimonials />
      <BlockBlog />
    </Fragment>
  )
}
