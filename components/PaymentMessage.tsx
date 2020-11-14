import React from 'react';

import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton
} from "@chakra-ui/core";

import { GlobalContext } from "../context/GlobalContext";

const PaymentMessage = () => {

    const { paymentError, isPaidSuccessfully } = React.useContext(GlobalContext);

    return (
        <>
            {paymentError &&
                <Alert
                    status="error"
                    variant="subtle"
                    flexDirection="column"
                    justifyContent="center"
                    textAlign="center"
                    >
                    <AlertIcon size="40px" mr={0} />

                    <AlertTitle mt={4} mb={1} >
                        There was an error processing your payment
                    </AlertTitle>

                    <AlertDescription maxWidth="sm">
                        {paymentError}
                    </AlertDescription>

                </Alert>
            }

            {isPaidSuccessfully &&
                <Alert
                    status="success"
                    variant="subtle"
                    flexDirection="column"
                    justifyContent="center"
                    textAlign="center"
                    >
                    <AlertIcon size="40px" mr={0} />

                    <AlertTitle mt={4} mb={1} >
                        Your payment processed successfully
                    </AlertTitle>

                    <AlertDescription maxWidth="sm">
                        Thank you for using OnePager. The rest of the features are unlocked!
                    </AlertDescription>

                </Alert>
            }

        </>
    );
};

export default PaymentMessage;