const getRandomDate = () => {
  const start = new Date(2021, 0, 1);
  const end = new Date();
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
};

const getRandomAmount = () => parseFloat((Math.random() * 10000).toFixed(2));

const types = ["Przelew", "Płatność", "Blik", "Wpłata", "Wypłata"];
const categories = ["Zakupy", "Przelew", "Opłaty", "Wynagrodzenie", "Usługi"];
const descriptions = ["Zakupy w Biedronce", "Przelew z banku", "Opłata za internet", "Wpłata gotówkowa", "Wypłata bankomat", "Wynagrodzenie", "Usługi doradcze"];

const generateRandomTransaction = (): Transaction => ({
  type: types[Math.floor(Math.random() * types.length)],
  date: getRandomDate(),
  description: descriptions[Math.floor(Math.random() * descriptions.length)],
  category: categories[Math.floor(Math.random() * categories.length)],
  amount: getRandomAmount(),
});

/** 
 * Generates a list of random transactions
 * 
 * Created only for the JSON generator
 * 
 * @param num - number of transactions to generate
 * @returns a list of transactions
*/
export const generateTransactionList = (num: number): Transaction[] => {
  return Array.from({ length: num }, generateRandomTransaction);
};
