export const CalculateTotal = (array, key) => {
  if (array.length > 0) {
    let totalArray = array.map((items) => {
      let total = items[key].split("");
      total.splice(0, 3);
      total = +total.join("").trim();
      let itemQuantity = items.item_quantity || 1;
      let itemPrice = total * itemQuantity;
      return itemPrice;
    });
    return totalArray.reduce((acc, curr) => acc + curr);
  }
};
