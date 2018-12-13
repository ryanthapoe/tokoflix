//Converting number to money format (Rupiah)
export const convertMoney = money => {
  let formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  });
  return formatter.format(money);
};

export const hargaCalc = movieRate => {
  let harga;
  if (movieRate <= 3) {
    return (harga = 3500);
  } else if (movieRate <= 6) {
    return (harga = 8250);
  } else if (movieRate <= 8) {
    return (harga = 16350);
  } else if (movieRate <= 10) {
    return (harga = 21250);
  } else {
    return (harga = null);
  }
};
