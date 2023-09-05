import { Box, Container } from '@chakra-ui/react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import TextInput from './components/TextInput.tsx';
import { useState } from 'react';
import KeywordsModal from './modals/KeywordsModal.tsx';

function App() {
  const [keywords, setKeywords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  }

  const extractKeywords = async (text: string) => {
    try {
      setIsLoading(true);
      setIsOpen(true);
      const options = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt: 'Extract keywords from this text. Make the first letter of each word uppercase and separate with commas. \n\n' + text + '',
          temperature: 0.5,
          max_tokens: 60,
          top_p: 1.0,
          frequency_penalty: 0.8,
          presence_penalty: 0.0,
        }),
      };

      const response = await fetch(import.meta.env.VITE_OPENAI_URL, options);
      const data = await response.json();

      setKeywords(data.choices[0].text.trim());
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Box
        bg={'blue.600'}
        padding={130}
        color={'white'}
        height={'100vh'}
      >
        <Container
          maxW={'3xl'}
          centerContent
        >
          <Header />
          <TextInput
            extractKeywords={extractKeywords}
          />
          <Footer />
        </Container>
        <KeywordsModal
          isOpen={isOpen}
          isLoading={isLoading}
          keywords={keywords}
          closeModal={closeModal}
        />
      </Box>
    </>
  )
}

export default App
