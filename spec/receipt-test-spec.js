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

describe('receipt',function(){
	describe('#itemString()',function(){

		beforeEach(function(){
			receipt = new Receipt(cartItems);

		});

    it('can return a  string',function(){

      spyOn(Utils,'formatPrice').and.callFake(function(){
        return '12.00';
      });
      spyOn(Utils,'getSubtotal').and.callFake(function(){
        return '30';
      });

      var itemString = '名称' + '：'+ '雪碧' + '，'+
      '数量' + '：' + 5 +'瓶'+ '，'+
      '单价' + '：' + '12.00' + '(元)' + '，' +
      '小计' + '：' + '12.00'+ '(元)' +'\n';

			var result = receipt.itemString(cartItems);

    	expect(result).toEqual(itemString);
		});
  });

});
