import { Box, Flex } from '@chakra-ui/layout'
import { Icon, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BsFilter } from 'react-icons/bs'
import Property from '../components/Property'
import SearchFilters from '../components/SearchFilters'
import { baseUrl, fetchApi } from '../utils/fetchApi'

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false)
  const router = useRouter()
  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        fontWeight="black"
        fontSize="xl"
        justifyContent="center"
        alignItems="center"
        p="2"
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        <Text align="center">Search Inputs By filter</Text>
        <Icon w="7" paddingLeft="2" as={BsFilter}></Icon>
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" fontWeight="bold" p="4">
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {properties.map((property, index) => (
          <Property key={index} property={property} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex
          alignItems="center"
          justifyContent="center"
          paddingBottom="5"
          paddingTop="5"
        >
          <Text align="center" fontSize="2xl" fontWeight="bold">
            No Result Found
          </Text>
        </Flex>
      )}
    </Box>
  )
}

export default Search

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent'
  const rentFrequency = query.rentFrequency || 'yearly'
  const minPrice = query.minPrice || '0'
  const maxPrice = query.maxPrice || '1000000'
  const roomsMin = query.roomsMin || '0'
  const bathsMin = query.bathsMin || '0'
  const sort = query.sort || 'price-desc'
  const areaMax = query.areaMax || '35000'
  const locationExternalIDs = query.locationExternalIDs || '5002'
  const categoryExternalID = query.categoryExternalID || '4'

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`,
  )

  return {
    props: {
      properties: data?.hits,
    },
  }
}
