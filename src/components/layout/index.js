import BackgroundElement from './BackgroundElement'
import Footer from './Footer'
import Header from './Header'

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
