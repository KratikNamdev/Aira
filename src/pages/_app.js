import Layout from '@/components/Layout/Layoutcomponents'
import '../styles/Home.module.css';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';
import { initGA, logPageView } from './analytics';


function App({ Component, pageProps }) {
  
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <main>
      <Layout>
        <Component  {...pageProps} />
      </Layout>
    </main>
  )
}

export default appWithTranslation(App);
