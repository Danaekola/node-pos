var Cart = require('./cart');
var Scanner = require('./scanner');
var Pos = require('./pos');
var Promotion = require('./promotion');
var Receipt = require('./receipt');

function  printReceipt(tags) {
  var cart=new Cart();
  var scanner=new Scanner();
  var pos=new Pos(scanner,cart);
  tags.forEach(function(tag){
    pos.scan(tag);
  });
    
  var cartItems=cart.cartItems;
  var promotion=new Promotion();
  var discount=promotion.getPromotion(cartItems);
  var receipt = new Receipt();
  var printString  = receipt.print(cart,pos,discount);
 
  console.log(printString);

}

exports.printReceipt = printReceipt;
