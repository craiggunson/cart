var n = 0
var picked = null
var mango = 0
var pineapple = 0
var pear = 0
var grapes = 0 
cart = {}
var thisEvent = null
function myFunction(picked) {
  n = n + 1 
  if (picked == 'mango') {mango=mango+1; tagIt(picked)}
  if (picked == 'pineapple') {pineapple=pineapple+1; tagIt(picked)}
  if (picked == 'pear') {pear=pear+1; tagIt(picked)}
  if (picked == 'grapes') {grapes=grapes+1; tagIt(picked)}

  cart={mango: mango,
      pineapple: pineapple,
      pear: pear,
      grapes: grapes,
      checkout: false}
  console.log(cart)
  document.getElementById("demo").innerHTML = JSON.stringify(cart, null, 2);



}

function myFunctionBuy(cart) {
  cart = {mango: mango,
       pineapple: pineapple,
      pear: pear,
      grapes: grapes,
      checkout: true}
      document.getElementById("demo").innerHTML = JSON.stringify(cart);

    console.log(cart)  
}

function tagIt(fruit) {
  thisEvent = {
      currency: "AUD",
      value: 7.77,
      items: [
        {
          item_name: fruit,
          currency: "AUD",
          price: 9.99,
          quantity: 1
        }
      ]
    }
    gtag("event", "add_to_cart", thisEvent);
    console.log(thisEvent,fruit);
  }