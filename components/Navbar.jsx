import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useColorMode,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BsSun } from 'react-icons/bs'
import { FcHome, FcMenu, FcSearch } from 'react-icons/fc'
import { FiKey } from 'react-icons/fi'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
      <Box fontSize="3xl" color="blue.600" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          Real State Paradise
        </Link>
      </Box>
      <Spacer />
      <Box style={{ cursor: 'pointer' }} onClick={toggleColorMode}>
        <BsSun
          color="blue.400"
          style={{ marginTop: 4, marginRight: 5, fontSize: '30px' }}
        />
      </Box>
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu style={{ fontSize: '30px' }} />}
            color="blue.400"
            variant="outlined"
          ></MenuButton>
          <MenuList>
            <Link href="/" passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href="/search" passHref>
              <MenuItem icon={<FcSearch />}>Search</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <MenuItem icon={<FcHome />}>Buy Property</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  )
}

export default Navbar
