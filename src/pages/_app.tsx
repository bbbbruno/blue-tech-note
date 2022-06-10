import '../common/styles/global.css'
import type { AppProps } from 'next/app'

import Layout from '../common/components/Layout'

import 'the-new-css-reset/css/reset.css'
import '../common/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
