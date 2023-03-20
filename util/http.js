import axios from "axios";

export function storeExpense(expenseData) {
  axios.post("https://rootapiaddress.com/expenses.json", expenseData);
}
