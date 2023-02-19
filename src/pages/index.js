import {
  BlockAboutUs,
  BlockFanfact,
  BlockHeroContent,
  BlockOurProject,
  BlockOurSolution,
  BlockServices,
} from '@components/blocks'
import dynamic from 'next/dynamic'
import { Fragment } from 'react'
const BackgroundElement = dynamic(import('../components/layout/BackgroundElement'), { ssr: false })

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
    </Fragment>
  )
}
