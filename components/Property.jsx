// import { Link } from '@chakra-ui/react';
import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react';
import millify from 'millify';
import Link from 'next/link';
import React from 'react';
import { BsGridFill } from 'react-icons/bs';
import { FaBath, FaBed } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';
import defaultProperty from '../assets/defaultProperty.jpg';

const Property = ({
	property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID },
}) => {
	return (
		<Link href={`/property/${externalID}`} passHref>
			<Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
				<Box>
					<Image
						src={coverPhoto ? coverPhoto.url : defaultProperty}
						alt="coverPhoto"
						height={260}
						width={400}
					/>
				</Box>
				<Box w="full">
					<Flex paddingTop="2" alignItems="center" justifyContent="space-between">
						<Flex alignItems="center">
							<Box paddingRight="3" color="green.400">
								{isVerified && <GoVerified />}
								<Text fontWeight="bold" fontSize="lg">
									AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
								</Text>
							</Box>
						</Flex>
						<Avatar size="sm" src={agency?.logo?.url} />
					</Flex>
					<Flex alignItems="center" p="1" justifyContent="space-between" fontSize="16px">
						{rooms} <FaBed color="green" /> | {baths} <FaBath color="green" /> | {millify(area)} sqft{' '}
						<BsGridFill color="green" />
					</Flex>
					<Text fontSize="lg">{title.length > 30 ? `${title.substring(0, 30)}...` : title}</Text>
				</Box>
			</Flex>
		</Link>
	);
};

export default Property;
