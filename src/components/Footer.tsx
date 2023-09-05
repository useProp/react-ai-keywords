import { Box, Flex, Text, Image } from '@chakra-ui/react';
import logo from '../assets/openai.png';

const Footer = () => {
  return (
    <>
      <Box
        marginTop={50}
      >
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Image
            src={logo}
            alt={logo}
            marginRight={1}
          />
          <Text>
            Powered By Open AI
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;