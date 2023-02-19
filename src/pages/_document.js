import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='vi' className='font-Poppins bg-BACKGROUND text-white'>
      <Head>
        <link rel='shortcut icon' href='/Logo.svg' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
