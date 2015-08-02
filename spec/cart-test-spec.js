
var Cart = require('../main/cart.js');
var Item = require('../main/item.js');
var Utils = require('../main/utils.js');
var items =
[
 new Item('ITEM000001', '雪碧', '瓶', 3.00),
 new Item('ITEM000003', '荔枝', '斤', 15.00),
 new Item('ITEM000005', '方便面', '袋', 4.50)
];
var cartItems=[{count:4,item:items[0]},
    {count:3,item:items[2]}];
describe('Cart',function(){
	describe('#findCartItem()',function(){
		var cart;
		var cartItem;
	  beforeEach(function(){
		cart = new Cart(cartItems);
		});
		it('can return undefined',function(){
			var item = new Item('ITEM000003', '荔枝', '斤', 15.00);
			cartItem = {item :item,count:2};
			var result = cart.findCartItem(cartItem);
			expect(result).toBe(undefined);
		});
		it('can return cartItem',function(){

			var item = new Item('ITEM000001', '雪碧', '瓶', 3.00);
			cartItem = {item :item,count:1};
			var result = cart.findCartItem(cartItem);
			expect(result.item.barcode).toEqual(cartItem.item.barcode);
		});
  });

	describe('#findCartItems()',function(){
		var cart;
		var cartItem;
	  beforeEach(function(){
		cart = new Cart(cartItems);
		});
		it('can push cartItem into cartItems',function(){
			spyOn(cart,'findCartItem').and.callFake(function(){
				return undefined;
			});
			var item = new Item('ITEM000003', '荔枝', '斤', 15.00);
			cartItem = {item :item,count:2};
		  cart.findCartItems(cartItem);
			expect(cart.cartItems[cart.cartItems.length-1]).toEqual(cartItem);
		});
		it('can make cartItem.count++',function(){
			var item = new Item('ITEM000001', '雪碧', '瓶', 3.00);
			cartItem = {item :item,count:1};
			spyOn(cart,'findCartItem').and.callFake(function(){

				return cartItems[0];
			});
			var temp = cart.cartItems[0].count;
		  cart.findCartItems(cartItem);
			expect(cart.cartItems[0].count).toBe(temp+cartItem.count);
		});
  });

  describe('#getTotalPrice()',function(){
    var cart;
    var cartItem;
    beforeEach(function(){
    cart = new Cart(cartItems);
    });
    it('can get cartItems total price',function(){
      spyOn(Utils,'getSubtotal').and.callFake(function(){
        return 2;
      });
      var result = cart.getTotalPrice();
      expect(result).toEqual(6);
    });

  });
});
