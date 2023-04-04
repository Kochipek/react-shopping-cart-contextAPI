export const formatCurrency = (number) => {
  return new Intl.NumberFormat("en-TR", {
    style: "currency",
    currency: "eur",
  }).format(number);
};
