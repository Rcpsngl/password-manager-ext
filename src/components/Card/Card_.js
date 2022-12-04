import {Box, Input , Button,  Grid, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,  } from '@chakra-ui/react';
  import { Card, CardBody, CardFooter , Stack, Text,} from '@chakra-ui/react'


function Card_({item}) {
  return (
<>
<Accordion defaultIndex={[1]} allowMultiple> 
    <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          {item.title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Box>
    <Text py='2' maxW={{ base: '100%', sm: '100px' }} mt='5'>
      www.youtube.com
    </Text>
  </Box>

  <Stack>
    <CardBody w='250px'>
    <Grid templateColumns='repeat(1, 1fr)' gap={2}>
        <Input placeholder='id' size='xs' value={item.id} />
        <Input placeholder='password' size='xs' value={item.password}/>
      </Grid>
    </CardBody>

    <CardFooter >
      <Button colorScheme='blue' mt='-2' size='sm'>Update</Button>
      <Button colorScheme='red' mt='-2' ml='2' size='sm'>Delete</Button>
    </CardFooter>
  </Stack>
</Card>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</>

    
  )
}

export default Card_;