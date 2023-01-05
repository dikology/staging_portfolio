import '../styles/custom.global.scss'
import Theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}

export default MyApp
