import { useGetTransactionData } from "./hooks";
import "./ExpensesTables.css";

export default function ExpensesTable() {
  const { data, loading, error } = useGetTransactionData();
  return (
    <div className="expenses-table-container" aria-live="polite">
      <h2 id="table-header">Expenses</h2>
      {loading && <span>Loading expenses data...</span>}
      {!loading && error && (
        <span role="alert" className="error-message">
          {error}
        </span>
      )}
      {data && !loading && (
        <table className="expenses-table" aria-describedby="table-header">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Merchant</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {data.map((transaction) => {
              const date = new Date(transaction.date);
              const formattedDate = `${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`;
              const formattedAmount = `£${transaction.amount}`;
              return (
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td>{formattedDate}</td>
                  <td>{formattedAmount}</td>
                  <td>{transaction.merchant}</td>
                  <td className="cell-capitalize">{transaction.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
