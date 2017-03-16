var cart;


function updateCartIcon()
{
  var itemsInCart = 0;
  var cartIcon = document.getElementById("cartIcon");

  for (cartline of cart) {
    itemsInCart += cartline.number;
  }

  if (itemsInCart == 0) {
    cartIcon.innerHTML = "";
  } else {
    cartIcon.innerHTML = " (" + itemsInCart.toString() + ")";
  }
}

// constructor
function CartLine(productNameVal, numberVal) {
  this.productName = productNameVal;
  this.number = numberVal;
}

// 'Add' button for indivdual product <div class="item">
function onClickAdd(productName) {
  var prod = products.find(function(product) {return product.name == this}, productName);
  var cartline = cart.findIndex(function(cartline) {
      return cartline.productName == this;
    }, productName);
  if (cartline == -1) {
    var newcartline = new CartLine(productName, 1);
    cart.push(newcartline);
  } else {
    cart[cartline].number++;
  }

// Update cart items
function updateCartItems() {
  var cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = ""
  if (cart.length == 0) {
    cartItems.innerHTML= "Cart is empty";
  } else {
    var cartTotal = 0;
}

// update Cart element (id="cart")
function updateCart() {
  var cartEmpty = document.getElementById("cart-empty");
  var cartCheckout = document.getElementById("cart-checkout");

  updateCartItems();
  if (cart.length == 0) {
    cartEmpty.style.visibility="hidden";
    cartCheckout.style.visibility="hidden";
  } else {
    cartEmpty.style.visibility="inherit";
    cartCheckout.style.visibility="inherit";
  }
}

// make 'Cart' element visible
function showCart()
{
  var cartDiv = document.getElementById("cart");
  cartDiv.style.visibility="visible";
  updateCart();

  event.preventDefault();
}

// Cart lineitem's 'Remove' button
function onClickRemove(productName) {
  var cartline = cart.findIndex(function(cartline) {
      return cartline.productName == this;
    }, productName);
  if (cartline != -1) {
    cart[cartline].number--;
    if (cart[cartline].number == 0) {
      cart.splice(cartline, 1);
    }
  }

  updateCart();
  updateCartIcon();
  saveCart();
  event.preventDefault();
}






