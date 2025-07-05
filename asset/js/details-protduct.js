function changeQuantity(amount) {
  const input = document.getElementById("quantity");
  let currentValue = parseInt(input.value) || 1;
  let newValue = currentValue + amount;

  const min = parseInt(input.min);
  const max = parseInt(input.max);

  if (newValue >= min && newValue <= max) {
    input.value = newValue;
  }
}
