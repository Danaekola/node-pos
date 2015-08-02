var Receipt = require('../main/receipt');
var Scanner = require('../main/scanner');
var Cart = require('../main/cart');
var Item = require('../main/item.js');
var Pos = require('../main/pos.js');



var items =
[
 new Item('ITEM000001', '雪碧', '瓶', 3.00),
 new Item('ITEM000003', '荔枝', '斤', 15.00),
 new Item('ITEM000005', '方便面', '袋', 4.50)
];
var cartItems=[{count:4,item:items[0]},
    {count:3,item:items[2]}];
describe('Pos',function(){
  describe('#scan()',function(){
    it('can push cartItem into cartItems',function(){
	    var scanner = new Scanner();
      spyOn(scanner,'scan').and.callFake(function(){
        return {item:new Item('ITEM000001', '雪碧', '瓶', 3.00),count:1};
      });

      var cart = new Cart(cartItems);
      var temp = cart.cartItems[0].count;
      var pos = new Pos(scanner,cart);
      pos.scan('ITEM000001');
      expect(cart.cartItems[0].count).toBe(temp+1);
    });
 });
});
