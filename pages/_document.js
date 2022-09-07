import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/home/footer'

export default function Document() {
  return (
    <Html>
      <Head>
        <script src="https://kit.fontawesome.com/677d54bf0c.js" crossorigin="anonymous"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}