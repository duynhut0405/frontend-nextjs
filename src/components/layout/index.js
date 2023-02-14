import dynamic from 'next/dynamic'
import Footer from './Footer'
import Header from './Header'

const BackgroundElement = dynamic(() => import('./BackgroundElement'), {
  ssr: false,
})

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <BackgroundElement />
      <main>{children}</main>
      <Footer />
    </>
  )
}
