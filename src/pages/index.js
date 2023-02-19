import { BlockHeroContent } from '@components/blocks'
import dynamic from 'next/dynamic'
import { Fragment } from 'react'
const BackgroundElement = dynamic(import('../components/layout/BackgroundElement'))
const BlockAboutUs = dynamic(import('../components/blocks/BlockAboutUs'))
const BlockFanfact = dynamic(import('../components/blocks/BlockFanfact'))
const BlockOurSolution = dynamic(import('../components/blocks/BlockOurSolution'))
const BlockOurProject = dynamic(import('../components/blocks/BlockOurProject'))
const BlockServices = dynamic(import('../components/blocks/BlockServices'))
const BlockTestimonials = dynamic(import('../components/blocks/BlockTestimonials'))
export default function Home() {
  return (
    <Fragment>
      <BackgroundElement />
      <BlockHeroContent />
      <BlockAboutUs />
      <BlockFanfact />
      <BlockOurSolution />
      <BlockServices />
      <BlockOurProject />
      <BlockTestimonials />
    </Fragment>
  )
}
