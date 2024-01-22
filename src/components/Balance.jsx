import { useContext } from "react";

import { GlobalContext } from "../contexts/global-context.jsx";

export default function Balance() {
    const { credit, debit } = useContext(GlobalContext);

    return (
        <>
            <h3>Balance</h3>
            <div className="container border my-2 p-2 rounded text-center">
                <div className="row">
                    <div className="col">
                        <div><b>Total</b></div>
                        <div>${credit - debit}</div>
                    </div>
                </div>
                <hr className="m-1" />
                <div className="row">
                    <div className="col">
                        <div><b className="text-success">Credit</b></div>
                        <div>${credit}</div>
                    </div>
                    <div className="col">
                        <div><b className="text-danger">Debit</b></div>
                        <div>${debit}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
