
cart = {
  currency: "AUD",
  value: 7.77,
  items: []
}

pineapple = {
  item_id: "SKU_1",
  item_name: "Pineapple",
  affiliation: "craiggunson.com",
  item_brand: "Sunny Pineapples",
  price: 4.99,
  quantity: 1
}

pear = {
  item_id: "SKU_2",
  item_name: "Pear",
  affiliation: "craiggunson.com",
  item_brand: "Crispy Green Pears",
  price: 3.99,
  quantity: 1
}


function add(cart,item) {
  dothis=cart['items']
  var arrayLength = dothis.length;
  for (var i = 0; i < arrayLength; i++) {
    console.log('loop',dothis[i]);
    if (dothis[i]['item_id'] == item['item_id']) { console.log('found item in cart, increasing quantity',item)
        console.log(cart.items[i].item_name,cart.items[i].quantity);
        cart.items[i].quantity = 2 ;
        console.log('this,',cart)
        return cart 
           }
  }
cart['items'].push(item)

  gtag("event", "add_to_cart", cart);
return cart
}

function checkout(cart) {
  gtag("event", "begin_checkout", cart);
return cart 
}  

cart = add(cart,pear)
cart = add(cart,pear)
cart = add(cart,pineapple)

console.log(cart)