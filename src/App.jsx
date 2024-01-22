import { GlobalProvider } from "./contexts/global-context.jsx";
import Header from "./components/Header.jsx";
import Balance from "./components/Balance.jsx";
import History from "./components/History.jsx";
import Transaction from "./components/Transaction.jsx";

export default function App() {
    return (
        <>
            <GlobalProvider>
                <Header />
                <hr />
                <Balance />
                <hr />
                <History />
                <hr />
                <Transaction />
            </GlobalProvider>
        </>
    );
}
