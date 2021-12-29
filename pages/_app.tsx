import { ModelManager } from '@adobe/aem-spa-page-model-manager';
import CustomModelClient from '../lib/CustomModelClient';
import '../components';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

const modelClient = new CustomModelClient('http://localhost:4502');
ModelManager.initializeAsync({
  modelClient,
});
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
