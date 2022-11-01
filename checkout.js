cart = {
  currency: "AUD",
  value: Number('0.00'),
  items: []
}

pineapple = {
  item_id: "SKU_1",
  item_name: "Pineapple",
  affiliation: "craiggunson.com",
  item_brand: "Sunny Pineapples",
  price: Number('4.95'),
  quantity: 1
}

pear = {
  item_id: "SKU_2",
  item_name: "Pear",
  affiliation: "craiggunson.com",
  item_brand: "Crispy Green Pears",
  price: Number('3.95'),
  quantity: 1
}

blueberry = {
  item_id: "SKU_3",
  item_name: "Blueberry",
  affiliation: "craiggunson.com",
  item_brand: "Berry Farm",
  price: Number('4.95'),
  quantity: 1
}

grape = {
  item_id: "SKU_4",
  item_name: "Grapes",
  affiliation: "craiggunson.com",
  item_brand: "Berry Farm",
  price: Number('2.95'),
  quantity: 1
}


function add(cart,item) {
  if (cart.items != []) { 
    dothis=cart['items']
    var arrayLength = dothis.length;
    for (var i = 0; i < arrayLength; i++) {
      if (dothis[i]['item_id'] == item['item_id']) { 
          console.log('found pre-existing, adding quantity', cart.items[i].item_name,cart.items[i].quantity,'to',cart.items[i].quantity +1 );
          cart.items[i].quantity = cart.items[i].quantity + 1;
          console.log('this,',cart) // quanitity added
          redraw(cart);
          return cart 
           }
  }}
cart['items'].push(item)
redraw(cart);

  gtag("event", "add_to_cart", cart);
return cart
}

function checkout(cart) {
  console.log('begin_checkout',cart);
  gtag("event", "begin_checkout", cart);
  pay(cart);
return cart 
}  

function pay(cart) {
cart['transaction_id'] = Math.floor(100000 + Math.random() * 900000);
cart['shipping'] = 5
cart['tax'] = cart['value'] / 10
cart.tax = Math.round(cart.tax *100 ) / 100;

gtag("event", "purchase", cart)

document.getElementById("demo").innerHTML = JSON.stringify(cart,null,1).replace(/\n( *)/g, function (match, p1) {
  return '<br>' + '&nbsp;'.repeat(p1.length); });
}

function redraw(cart) {
  sumcart=cart['items']
  var arrayLength = sumcart.length;
  for (var i = 0; i < arrayLength; i++) {  //add up the total cart value
    cart.value = cart.value + cart.items[i].price;
    cart.value = Math.round(cart.value *100 ) / 100;
    
  }
document.getElementById("demo").innerHTML = JSON.stringify(cart,null,1).replace(/\n( *)/g, function (match, p1) {
  return '<br>' + '&nbsp;'.repeat(p1.length); });
 }


//cart = add(cart,pear)
//cart = add(cart,pear)
//cart = add(cart,pineapple)

console.log('total', cart);
