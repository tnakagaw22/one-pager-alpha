

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
  } from "@chakra-ui/core";

import Payment from './Payment';

type PaymentModalProps = {
    isOpen: boolean;
  };

const PaymentModal = ({
    isOpen
  }: PaymentModalProps) => {
    const {  onClose } = useDisclosure()

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

            <Link href="/">Back to list</Link>
          </ModalBody>

        </ModalContent>
      </Modal>
        </>
    );
};

export default PaymentModal;