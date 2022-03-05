import { Box } from '@chakra-ui/react';
import React from 'react';
import { baseUrl, fetchApi } from '../../utils/fetchApi';

const PropertyDetails = ({PropertyDetails: {price,rentFrequencey,title,baths,area,agency,isVarified,description,type,furnishingStatus,purpose,amenities,photos}}) => {
    return (
       <Box width="1000px" margin="auto" p="4">
           {
               console.log(photos)
           }
       </Box>
    );
};

export default PropertyDetails;


export async function getServerSideProps({params: {id}}){
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
    return {
        props: {
            PropertyDetails: data
        }
    }
}