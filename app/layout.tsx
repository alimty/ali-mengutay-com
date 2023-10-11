
import Navbar from './components/Navbar';
// import 'globals.css'
import './globals'
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;



