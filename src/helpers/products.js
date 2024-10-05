export const getDiscountedPrice = (originalPrice, discount, discountType) => {
  if (discountType === 'percent') return originalPrice - originalPrice * discount / 100;else return originalPrice - discount;
};
export const calculateDiscount = p => {
  return p.sale?.type == "amount" ? p.sale.discount : p.sale?.type == "percent" ? p.price / 100 * p.sale.discount : 0;
};