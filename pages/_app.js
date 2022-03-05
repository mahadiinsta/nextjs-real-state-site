import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '../components/Layout';
import theme from './theme';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head></Head>
			<ChakraProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</>
	);
}

export default MyApp;
