import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, ElementsConsumer, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@chakra-ui/core";

import { GlobalContext } from "../context/GlobalContext";

const CheckoutForm =(elements, stripe)=>{
  const { setPaymentError, setIsPaidSuccessfully } = React.useContext(GlobalContext);

  const handleSubmit = async (elements) => {
    if (!elements.stripe || !elements.elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.elements.getElement(CardElement);

    const {error, paymentMethod} = await elements.stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setPaymentError(error.message);
    } else {
      setIsPaidSuccessfully();
    }
  }
  
  return (
        <div>
          <CardElement />

          <Button 
            variantColor="green" 
            isDisabled={!stripe}
            onClick={() => handleSubmit(elements)}
            >Pay
          </Button>

        </div>
      );

}

const InjectedCheckoutForm = () => {
    return (
        <ElementsConsumer>
            {({ elements, stripe }) => (
                <CheckoutForm elements={elements} stripe={stripe} />
            )}
        </ElementsConsumer>
    );
};

export default InjectedCheckoutForm;
