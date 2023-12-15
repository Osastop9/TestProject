const formatCurrency = (number) => {
  if (isNaN(number)) {
    return "Invalid input";
  }
  return number.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });
};

export { formatCurrency };
