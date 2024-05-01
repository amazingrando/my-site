import '@/styles/globals.css';
import * as Fathom from 'fathom-client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load(process.env.FATHOM_ID, {
      includedDomains: ['amazingrando.com'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return getLayout(<Component {...pageProps} />);
}
