import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@styles/tailwind.css'
import Layout from '@components/layout'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
