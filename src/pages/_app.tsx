import { useRouter } from 'next/router'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'
import 'styles/globals.css'

NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    function routeChangeStart(url: string, { shallow }: { shallow: boolean }) {
      if (!shallow) NProgress.start()
    }
    function routeChangeComplete() {
      NProgress.done()
    }
    function routeChangeError() {
      NProgress.done()
    }
    router.events.on('routeChangeStart', routeChangeStart)
    router.events.on('routeChangeComplete', routeChangeComplete)
    router.events.on('routeChangeError', routeChangeError)

    return () => {
      NProgress.done()

      router.events.off('routeChangeStart', routeChangeStart)
      router.events.off('routeChangeComplete', routeChangeComplete)
      router.events.off('routeChangeError', routeChangeError)
    }
  }, [router])

  return <Component {...pageProps} />
}

export default MyApp
