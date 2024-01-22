import { useContext, useState } from "react";
import { GlobalContext } from "../contexts/global-context";

export default function Transaction() {
    const { transactions, addTransaction } = useContext(GlobalContext);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();

        addTransaction({
            id: transactions.length + 1,
            title: title,
            amount: parseInt(amount)
        });
    }

    return (
        <>
            <h3>Make Transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="transaction-name-input" className="form-label"><b>Title</b></label>
                    <input type="text" className="form-control" id="transaction-name-input" value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="transaction-amt-input" className="form-label"><b>Transaction Amount</b></label>
                    <input type="number" className="form-control" id="transaction-amt-input" value={amount} onChange={(event) => setAmount(event.target.value)} />
                </div>
                <button className="btn btn-primary w-100" type="submit">Make Transaction</button>
            </form>
        </>
    );
}
