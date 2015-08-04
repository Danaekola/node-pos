var Promotion = require('../main/promotion');
var Item = require('../main/item');
var Utils = require('../main/utils');
var Receipt = require('../main/receipt');

var items = [
  new Item('ITEM000001', '雪碧', '瓶', 3.00),
  new Item('ITEM000003', '荔枝', '斤', 15.00),
  new Item('ITEM000005', '方便面', '袋', 4.50)
];
var cartItems = [{count: 5,item: items[0]}];

describe('Utils',function(){
	describe('#formatPrice()',function(){

	it('can  run rightly',function(){


      var result = Utils.formatPrice(2);


    	expect(result).toBe('2.00');
		});
  });
  describe('#getSubtotal()',function(){

	it('can return A*B',function(){


      var result = Utils.getSubtotal(2,3);


    	expect(result).toEqual(6);
		});
  });

});
