export default (state, action) => {
    switch (action.type) {

        case "SET_PAYMENT_ERROR":
            const error = action.payload.errorMessage;
            return {
                ...state,
                paymentError: error
            }
        case "SET_IS_PAID_SUCCESSFULLY":
            return {
                ...state,
                paymentError: '',
                isPaidSuccessfully: true
            }
        default:
            return state;
    }
};
