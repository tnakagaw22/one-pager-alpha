

import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Link,
  Button,
  Box
} from "@chakra-ui/core";

import Payment from './Payment';
import { GlobalContext } from "../context/GlobalContext";

type PaymentModalProps = {
  isOpen: boolean;
};

const PaymentModal = ({
  isOpen
}: PaymentModalProps) => {
  const { onClose } = useDisclosure()
  const { isPaidSuccessfully } = React.useContext(GlobalContext);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thank you for using OnePager</ModalHeader>
          <ModalBody>
            <p>We appreciate you find OnePager valuable.</p>
            <p>You have rached the limit for free feature. It is only $xx to unlock the rest of features.</p>

            <Text fontSize="xl">$xx / month</Text>

            <Payment />

            <Box p={4} >
              <Link href="/">Back to home</Link>
            </Box>

          </ModalBody>

          {isPaidSuccessfully &&
            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={() => window.location.reload()}>
                Close
            </Button>
            </ModalFooter>
          }
        </ModalContent>
      </Modal>
    </>
  );
};

export default PaymentModal;