import { Box, Input } from '@chakra-ui/react';

function GeneratePassword() {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Box>
        <Input placeholder='id' size='sm' />
        </Box>
    </Box>
  )
}

export default GeneratePassword