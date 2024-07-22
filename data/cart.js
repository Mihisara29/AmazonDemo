 
 
 export let cart = JSON.parse(localStorage.getItem('cart')) 
 
 if(!cart){
  cart = 
  [
   {
     productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
     quantity:2,
   },
   {
     productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
     quantity:1,
   }
  ];
  
 }

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){

  let matchingItem;
  const selectedQuantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);   

  cart.forEach((cartItem)=>{
   
   if(cartItem.productId === productId){
     matchingItem = cartItem;
   }
 });

   if(matchingItem){
     matchingItem.quantity += selectedQuantity
   }else{
     cart.push({
       //productId:productId,
       productId,
       quantity:selectedQuantity
      });
   }

   saveToStorage();
}

function updateCartQuantity(){

  let cartQuantity = 0;
   
   cart.forEach((cartItem)=>{
   
  cartQuantity += cartItem.quantity;

   });

   return cartQuantity;
}

export function removeFromCart(productId){

  const newCart = [];

  cart.forEach((cartItem)=>{

    if(productId!==cartItem.productId){
     newCart.push(cartItem);
    }
  });

   cart = newCart;
   
   document.querySelector('.js-checkout-header-middle-section').innerHTML=`Checkout (${updateCartQuantity()} items)`

   localStorage.setItem('cartQuantity',updateCartQuantity());
     
 
  
 
  saveToStorage();  
}