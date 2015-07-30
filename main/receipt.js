var Utils = require('./utils');
var Time = require('./time');


function Receipt(cartItems){
  this.cartItems = cartItems;
}

Receipt.prototype.itemString = function() {
  var itemString = '';
  var _this = this;
  _this.cartItems.forEach(function(cartItem){
  
  itemString += '名称' + '：'+ cartItem.item.name + '，'+
  '数量' + '：' + cartItem.count +cartItem.item.unit + '，'+
  '单价' + '：' + Utils.formatPrice(cartItem.item.price) + '(元)' + '，' +
  '小计' + '：' + Utils.formatPrice(Utils.getSubtotal(cartItem.count-Math.floor(cartItem.count/3),cartItem.item.price))
   + '(元)' +'\n';
});
  return itemString;
};
Receipt.prototype.print = function(cart,pos,discount){
  var time = new Time();
  var cartItems = cart.cartItems;

  var receipt ='***<没钱赚商店>收据***\n' +'打印时间：' + 
  time.timer()+ '\n' + '----------------------\n'+
  pos.getItemString(cartItems) +
  '----------------------\n' +
  '挥泪赠送商品：\n' +
  discount.discountString +
  '----------------------\n' +
  '总计：' + Utils.formatPrice(cart.getTotalPrice()) + '(元)\n' +
  '节省：' + Utils.formatPrice(discount.saveTotal) + '(元)\n' +
  '**********************';
  return receipt;
}
 module.exports = Receipt;

