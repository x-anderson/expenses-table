export type Transaction = {
  id: number;
  date: string;
  amount: number;
  merchant: string;
  category: string;
};

export type TransactionsResponse = {
  totalTransactions: number;
  transactions: Transaction[];
  currentPage: number;
  next: Cursor;
};

export type Cursor = {
  limit: number;
  page: number;
};
