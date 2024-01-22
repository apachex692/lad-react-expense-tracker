import { useContext } from "react";

import { GlobalContext } from "../contexts/global-context.jsx";
import HistoryCard from "./HistoryCard.jsx";

export default function History() {
    const { transactions, deleteTransaction } = useContext(GlobalContext);

    function deleteHandle(id) {
        deleteTransaction(id);
    }

    return (
        <>
            <h3>History</h3>
            {transactions.length !== 0 ? (
                transactions.map((item) => <HistoryCard key={item.id} data={item} deleteCallback={deleteHandle} />)
            ) : (
                <p>No transactions found.</p>
            )}
        </>
    );
}
