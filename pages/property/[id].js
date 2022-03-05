import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { BsBookmarkPlus } from 'react-icons/bs'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { baseUrl, fetchApi } from '../../utils/fetchApi'

const PropertyDetails = ({
  details: {
    price,
    rentFrequencey,
    title,
    baths,
    area,
    agency,
    isVarified,
    description,
    type,
    furnishingStatus,
    purpose,
    amenities,
    photos,
  },
}) => {
  const toast = useToast()
  return (
    <Box width="1000px" margin="auto" p="4">
      <Text fontSize="3xl" fontWeight="bold" style={{ paddingBottom: 15 }}>
        {title}
      </Text>
      <Carousel>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo.url} alt="property picture" />
          </div>
        ))}
      </Carousel>
      <Flex>
        {console.log(
          rentFrequencey,
          baths,
          area,
          agency,
          isVarified,
          type,
          furnishingStatus,
          purpose,
          amenities,
        )}
        <Text fontSize="xl" fontWeight="bold" mr="20px">
          {baths} baths |{' '}
        </Text>
        <Text fontSize="xl" fontWeight="bold" mr="20px">
          {area} area |{' '}
        </Text>
        <Text fontSize="xl" fontWeight="bold" mr="20px">
          {furnishingStatus}{' '}
        </Text>
      </Flex>
      <Text fontSize="3xl" fontWeight="bold" color="blue.400">
        Price: {price}
      </Text>
      <Text>{description}</Text>
      <br />
      <Button
        colorScheme="blue"
        leftIcon={<BsBookmarkPlus />}
        variant="outline"
        onClick={() =>
          toast({
            title: 'Property Added',
            description: "We've booked the property for you",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
        }
      >
        Book Now
      </Button>
    </Box>
  )
}

export default PropertyDetails

export async function getServerSideProps(context) {
  const { id } = context.query
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)
  return {
    props: {
      details: data,
    },
  }
}
