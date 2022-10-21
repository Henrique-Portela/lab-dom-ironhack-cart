// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const priceValue = price.textContent
  const quantity = product.querySelector('.quantity input');
  const quantityValue = quantity.value
  const subTotal = product.querySelector('.subtotal span')
  subTotal.innerHTML = quantityValue * priceValue
  return quantityValue * priceValue  
  
 
}

function calculateAll() {
  
  const allProduct = document.getElementsByClassName('product')
  
  let totalFinal = 0
  for(let i=0; i<allProduct.length; i++){
    totalFinal += updateSubtotal(allProduct[i])
  }

  const totalSpan = document.querySelector('#total-value span')
  totalSpan.innerHTML = totalFinal

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
