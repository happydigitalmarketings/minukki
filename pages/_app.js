import '../styles/globals.css';
import Header from '../components/Header';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdminPage = router.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPage && <Header />}
      {!isAdminPage && <FloatingWhatsApp />}
      <Component {...pageProps} />
    </>
  );
}
