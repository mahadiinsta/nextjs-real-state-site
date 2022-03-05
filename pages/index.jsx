import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import Property from '../components/Property.jsx';
import { baseUrl, fetchApi } from '../utils/fetchApi';

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => {
	return (
		<Flex flexWrap="wrap" justifyContent="center" m="10" alignItems="center">
			<Image src={imageUrl} width={500} height={300} alt="banner" />
			<Box p="5">
				<Text color="gray.500" fontSize="sm" fontWeight="medium">
					{purpose}
				</Text>
				<Text fontSize="3xl" fontWeight="bold">
					{title1}
					<br />
					{title2}
				</Text>
				<Text fontSize="lg" fontWeight="bold" paddingTop={3} paddingBottom={3} color="gray.700">
					{desc1}
				</Text>
				<Button fontSize="xl" colorScheme="blue">
					<Link href={linkName}>{buttonText}</Link>
				</Button>
			</Box>
		</Flex>
	);
};

export default function Home({ propertiesForSale, propertiesForRent }) {
	return (
		<div>
			<Banner
				purpose="Rent a Home"
				title1="Rental Home"
				title2="For Everyone"
				desc1="Explore appartments,villas ,homes"
				desc2="and more"
				buttonText="Explore Renting"
				linkName="/search?purpose=for-rent"
				imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
			/>
			<Flex flexWrap="wrap">
				{propertiesForRent.map((property, index) => (
					<Property property={property} key={index} />
				))}
			</Flex>
			<Banner
				purpose="BUY A HOME"
				title1=" Find, Buy & Own Your"
				title2="Dream Home"
				desc1=" Explore from Apartments, land, builder floors,"
				desc2=" villas and more"
				buttonText="Explore Buying"
				linkName="/search?purpose=for-sale"
				imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
			/>
			<Flex flexWrap="wrap">
				{propertiesForSale.map((property, index) => (
					<Property property={property} key={index} />
				))}
			</Flex>
		</div>
	);
}

export async function getStaticProps() {
	const propertyForSale = await fetchApi(
		`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
	);
	const propertyForRent = await fetchApi(
		`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
	);

	return {
		props: {
			propertiesForSale: propertyForSale?.hits,
			propertiesForRent: propertyForRent?.hits,
		},
	};
}
