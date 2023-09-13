import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Prvider from '@/Redux/Prvider'

export default function App({ Component, pageProps: session, ...pageProps }) {
  return (
    <SessionProvider session={session}>
      <Prvider>
        <Component {...pageProps} />
      </Prvider>
    </SessionProvider>
  )
}
