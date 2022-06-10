import type { AppProps } from 'next/app'
import Layout from '../common/components/Layout'
import { DarkModeProvider } from '../contexts/DarkMode'

import 'the-new-css-reset/css/reset.css'
import '../common/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkModeProvider>
  )
}

export default MyApp
