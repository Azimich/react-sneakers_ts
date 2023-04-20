

export const PersentegePrice = (originalPrice: number) => {
  const discount = originalPrice;
  const discountPersentage = (discount / originalPrice) * 100

  return discountPersentage.toFixed(2)
};
