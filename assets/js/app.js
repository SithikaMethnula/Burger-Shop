 console.log("Js is loded..!")
 AOS.init();
 let cart = [];


let menuItems = [
  { item: "Classic Burger", price: 750 },
  { item: "French Fries", price: 300 },
  { item: "Soft Drink", price: 200 },
  { item: "Cheese Burger", price: 850 },
  { item: "Spicy Wings", price: 650 },
  { item: "Vanilla Ice Cream", price: 400 }
];


function addToCart(index) {
  let product = menuItems[index];
  cart.push(product);
  alert(product.item + " is added to the Cart");
  console.log()
}


function showCart() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let total = 0;
  let summary = "🛒 Your Order:\n\n";

  for (let i = 0; i < cart.length; i++) {
    summary += (i + 1) + ". " + cart[i].item + " - Rs. " + cart[i].price + "\n";
    total += cart[i].price;
  }

  summary += "\nTotal Amount: Rs. " + total;
  alert(summary);
}


