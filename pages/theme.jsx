import { extendTheme } from '@chakra-ui/react';
import '@fontsource/abel';

const theme = extendTheme({
	fonts: {
		heading: 'Open Sans',
		body: 'Abel',
	},
});

export default theme;
