import { Provider } from 'react-redux';
import { Suspense } from 'react';
import '../../public/css/custom-bs.css'
import '../../public/css/jquery.fancybox.min.css'
import '../../public/css/jquery.fancybox.min.css'
import '../../public/fonts/icomoon/style.css'
import '../../public/fonts/line-icons/style.css'
import '../../public/css/animate.min.css'
import '../../public/css/style.css'
import NextNProgress from 'nextjs-progressbar';
import Layout from 'components/Layout';

function MyApp({ Component, pageProps }) {
  return (
      <Suspense fallback={<h1>Loading...</h1>}>
          <Layout>
              <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
            <Component {...pageProps} />
          </Layout>
      </Suspense>
  )
}

export default MyApp
