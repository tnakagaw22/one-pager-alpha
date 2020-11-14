import React from "react";

import AppReducer from "./AppReducer";
import useLocalStorage from "../hooks/useLocalStorage"

// Initial state
const initialState = {
  paymentError: '',
  isPaidSuccessfully: false
};

// Create context
export const GlobalContext = React.createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [isPaid, setIsPaid] = useLocalStorage('isPaid', false);
  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  const setPaymentError = (errorMessage) => {
    dispatch({
      type: "SET_PAYMENT_ERROR",
      payload: {
        errorMessage: errorMessage,
      },
    });
  }

  const setIsPaidSuccessfully = () => {
    dispatch({
      type: "SET_IS_PAID_SUCCESSFULLY"
    });
    setIsPaid(true);
  }

  return (
    <GlobalContext.Provider
      value={{
        paymentError: state.paymentError,
        isPaidSuccessfully: state.isPaidSuccessfully,
        setPaymentError,
        setIsPaidSuccessfully,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
