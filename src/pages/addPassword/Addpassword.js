import { SimpleGrid , Box, Input, Button ,InputGroup ,InputRightElement, Heading  } from '@chakra-ui/react'
import React from 'react'


function Addpassword() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Box bg='#F2F2F2' w='100%' p={4} >
    <SimpleGrid columns={1} spacing={10}>
      <Box bg='#F2F2F2' height='350px'>
        <SimpleGrid columns={1} spacing={4}>
          <Box p='5'>
          <Heading as='h5' size='sm'>
            URL
          </Heading>
          <Input placeholder='site' size='md' mb='5' />
          <Heading as='h5' size='sm'>
            Id
          </Heading>
          <Input placeholder='id' size='md' mb='5' />
          <Heading as='h5' size='sm'>
            Password
          </Heading>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button w='100%' mt='5' colorScheme='blue'>Submit</Button>
          </Box>
        </SimpleGrid>
      </Box>
    </SimpleGrid>
    </Box>
  )
}

export default Addpassword