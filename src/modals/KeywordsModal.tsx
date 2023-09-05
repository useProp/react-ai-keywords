import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  CircularProgress,
  Text,
} from '@chakra-ui/react';

type KeywordsModalProps = {
  keywords: string[],
  isOpen: boolean,
  isLoading: boolean,
  closeModal: () => void,

}

const KeywordsModal = ({ keywords, isOpen, isLoading, closeModal }: KeywordsModalProps) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Keywords
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            { isLoading ? (
              <CircularProgress isIndeterminate color={'blue.300'}/>
            ) : (
              <Text>
                { keywords }
              </Text>
            ) }
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme={'blue'}
              mr={3}
              onClick={closeModal}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default KeywordsModal;