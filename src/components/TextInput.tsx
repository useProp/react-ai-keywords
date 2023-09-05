import { ChangeEvent, useState, MouseEvent } from 'react';
import { Textarea, Button, useToast } from '@chakra-ui/react';

type TextInputProps = {
  extractKeywords: (text: string) => void;
}

const TextInput = ({ extractKeywords }: TextInputProps) => {
  const [text, setText] = useState('');
  const toast = useToast();

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }

  const handleTextSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    if (!text.trim()) {
      toast({
        title: 'Text field empty',
        description: 'Please enter some text to extract keywords',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    console.log(import.meta.env.VITE_OPEN_AI_API_KEY)

    extractKeywords(text);
    setText('');
  }

  return (
    <>
      <Textarea
        value={text}
        onChange={handleTextChange}
        padding={4}
        marginTop={6}
        height={200}
        color={'white'}
        bg={'blue.400'}
      />
      <Button
        bg={'blue.500'}
        color={'white'}
        width={'100%'}
        marginTop={4}
        _hover={{ bg: 'blue.700' }}
        onClick={handleTextSubmit}
      >
        Extract Keywords
      </Button>
    </>
  );
};

export default TextInput;