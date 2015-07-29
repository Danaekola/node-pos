var Receipt = require('./receipt');
var Cart = require('./cart');
var Scanner = require('./scanner');

function Pos( scanner,cart){
  
  this.scanner = scanner || new Scanner();
  this.cart = cart || new Cart();
}

Pos.prototype.scan = function(barcode) {
  var cartItem = this.scanner.scan(barcode);
  this.cart.findCartItems(cartItem);
};

Pos.prototype.getItemString = function(cartItems) {
  var receipt = new Receipt(cartItems);
   
  return receipt.itemString();
};

module.exports = Pos;





