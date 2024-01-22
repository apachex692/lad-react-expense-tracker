import { createContext, useReducer } from "react";

let initialState = {
    transactions: [
        { id: 1, title: "Book 📚", amount: 50 },
        { id: 2, title: "Movie 🎥", amount: -80 },
        { id: 3, title: "Train 🚂", amount: -10 },
        { id: 4, title: "Smartphone 📱", amount: 50 },
    ],
    credit: 100,
    debit: 90
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addTransaction(data) {
        dispatch({
            type: "add",
            payload: data
        });
    }

    function deleteTransaction(id) {
        dispatch({
            type: "delete",
            payload: id
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            credit: state.credit,
            debit: state.debit,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

function AppReducer(state, action) {
    let credit = state.credit;
    let debit = state.debit;

    switch (action.type) {
        case "add":
            if (action.payload.amount < 0)
                debit += Math.abs(action.payload.amount);
            else
                credit += action.payload.amount;

            return {
                credit: credit,
                debit: debit,
                transactions: [...state.transactions, action.payload]
            };
        case "delete":
            const desiredTransaction = state.transactions.find((transaction) => transaction.id === action.payload);

            if (desiredTransaction.amount < 0)
                debit += desiredTransaction.amount;
            else
                credit -= desiredTransaction.amount;

            return {
                credit: credit,
                debit: debit,
                transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)
            };
        default:
            return state;
    }
}
