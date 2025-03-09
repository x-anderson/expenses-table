import { useEffect, useState } from "react";
import { Transaction, TransactionsResponse } from "./types";

export function useGetTransactionData() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Transaction[] | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function getTransactionData() {
      try {
        const res = await fetch(
          "https://tip-transactions.vercel.app/api/transactions?page=1"
        );
        const data = (await res.json()) as TransactionsResponse;
        setData(data.transactions);
      } catch (e) {
        console.error(e);
        setError("Error with retrieving expenses data.");
      } finally {
        setLoading(false);
      }
    }
    getTransactionData();
  }, []);

  return { data, loading, error };
}
