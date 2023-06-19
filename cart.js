const deleteCartButtons = document.getElementsByClassName('remove-cart-item');
for (let i = 0; i < deleteCartButtons.length; i++) {
    deleteCartButtons[i].addEventListener('click', deleteItemFromCart);
}
function deleteItemFromCart(event){
    cart=event.target.parentNode.parentNode;
    cart.childNode=event.target.parentNode;
    cart.removeChild(cart.childNode)
    console.log(cart)
    updateCartTotal();
}
const cartItemsQuantity = document.getElementsByClassName('cart-quantity');
for (let i = 0; i < cartItemsQuantity.length; i++) {
  const quantityInput = cartItemsQuantity[i];
  quantityInput.addEventListener('change', updateCartTotal);

  if (isNaN(parseInt(quantityInput.value)) ||( parseInt(quantityInput.value) < 1) ){
    quantityInput.value = 1;
  }
}

function updateCartTotal() {
    const cartItems = document.getElementsByClassName('container-cart');
    let sum = 0;
  
    for (let i = 0; i < cartItems.length; i++) {
      const cartItem = cartItems[i];
      const priceElement = cartItem.querySelector('.price-number');
      const quantityElement = cartItem.querySelector('.cart-quantity');
      const price = parseFloat(priceElement.innerText);
      const quantity = parseInt(quantityElement.value);
      const itemTotal = price * quantity;
      sum += itemTotal;
    }
  
    const totalPrice = document.getElementsByClassName('total-price')[0];

    totalPrice.innerHTML = `$${sum.toFixed(2)}`;
    return sum.toFixed(2);
  }
  console.log(updateCartTotal());
  const totalPrice = document.getElementsByClassName('total-price')[0];

  totalPrice.innerHTML = `$${updateCartTotal()}`;
  cartButton=document.getElementById('cart-button');
  cartButton.addEventListener('click',(e)=>{
    e.preventDefault();
    const cart=document.getElementById('cart-button');
    cart.classList.toggle('active2');
    
  })
  const cartItemAdd = document.getElementsByClassName('add-to-cart');
  for (let i = 0; i < cartItemAdd.length; i++) {
    cartItemAdd[i].addEventListener('click', (e) => {
      e.preventDefault();
      const product = e.target.parentNode;
      console.log(product);
      const cartItem=document.createElement('div')
      const cartItemsContainer = document.getElementsByClassName('cart-items-container')[0];
console.log(cartItemsContainer);
const imgSrc=document.getElementsByClassName('pro-card-img')[i].src;
const title=document.getElementsByClassName('pr-name')[0].innerText;

      const cartItemDiv=`<div class="container-cart container flex">
      <div class="item-img">
          <img
              src="${imgSrc}"
              alt="cart-item" class="cart-img">
      </div>
      <div class="item-name-div"><span class="item-name">${title}</span></div>
      <div class="item-quantity"><input type="number" class="cart-quantity" value="1" min="1"></div>
      <div class="item-price"><span class="price">$ <span class="price-number">9.99</span></span>
      </div>
      <button class="primary-btn remove-cart-item"> Remove</button>
  </div>`
  cartItem.innerHTML=cartItemDiv;
  cartItem.getElementsByClassName('remove-cart-item')[0].addEventListener('click',deleteItemFromCart);
  cartItem.getElementsByClassName('cart-quantity')[0].addEventListener('change',updateCartTotal);
  console.log(cartItem);
      cartItemsContainer.appendChild(cartItem);
      
      // Update the total amount in the cart
      updateCartTotal();
    });
  }
  cartButton=document.getElementById('cart-button');
  cartButton.addEventListener('click',(e)=>{
    e.preventDefault();
    const cart=document.getElementById('cart');
    cart.classList.toggle('cart-active');
    
  })
  
  const buyButton = document.getElementById('buy-btn');
  buyButton.addEventListener('click', (e) => {
    e.preventDefault();
    const cartItemsContainer = document.getElementsByClassName('cart-items-container')[0];
  
    if (updateCartTotal() > 0) {
      alert('Thanks for your purchase!');
      while (cartItemsContainer.firstChild) {
        cartItemsContainer.removeChild(cartItemsContainer.firstChild);
        const totalPrice = document.getElementsByClassName('total-price')[0];
      
        totalPrice.innerHTML = `$${0}`;
      }
    } else {
      alert('The cart is empty.');
    }
  });
  
  