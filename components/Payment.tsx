

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

import PaymentCheckoutForm from './PaymentCheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_dAF8q8q2KetocLO25eEgoQBQ');

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentCheckoutForm />
        </Elements>
    );
};

export default Payment;