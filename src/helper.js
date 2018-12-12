//Converting number to money format (Rupiah)
export const convertMoney = money => {
  let formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  });
  return formatter.format(money);
};
