import logo from '../assets/light-bulb.svg';
import { Image, Heading, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <>
      <Image
        src={logo}
        alt={'logo'}
        width={100}
        marginBottom={'1rem'}
      />
      <Heading
        marginBottom={'1rem'}
        color={'white'}
      >
        AI Keyword Extractor
      </Heading>
      <Text
        fontSize={'25'}
        textAlign={'center'}
      >
        Paste in your text and we'll extract the keywords for you
      </Text>
    </>
  );
};

export default Header;