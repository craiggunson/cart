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

blueberry = {
  item_id: "SKU_3",
  item_name: "Blueberry",
  affiliation: "craiggunson.com",
  item_brand: "Berry Farm",
  price: 3.99,
  quantity: 1
}

grape = {
  item_id: "SKU_4",
  item_name: "Grapes",
  affiliation: "craiggunson.com",
  item_brand: "Berry Farm",
  price: 3.99,
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
return cart 
}  

function redraw(cart) {
document.getElementById("demo").innerHTML = JSON.stringify(cart,null,2).replace(/\n( *)/g, function (match, p1) {
  return '<br>' + '&nbsp;'.repeat(p1.length); });
 }


//cart = add(cart,pear)
//cart = add(cart,pear)
//cart = add(cart,pineapple)

console.log('total', cart);
