var Promotion = require('../main/promotion');
var Item = require('../main/item');

var items = [
  new Item('ITEM000001', '雪碧', '瓶', 3.00),
  new Item('ITEM000003', '荔枝', '斤', 15.00),
  new Item('ITEM000005', '方便面', '袋', 4.50)
];
var cartItems = [{count: 5,item: items[0]}];

describe('promotion',function(){
	describe('#getPromotion()',function(){

		beforeEach(function(){
			promotion = new Promotion();

		});
		it('can return undefined',function(){

      spyOn(promotion,'promotionItem').and.callFake(function(){
        return undefined;
      });
			var result = promotion.getPromotion(cartItems);
			expect(result).toEqual({discountString: '', saveTotal: 0});
		});
    it('can return a  printObject',function(){

      var _promotion = {count: 5, item: items[0]};
      var promotionString = '';
      var saveMoney = 0;

      spyOn(promotion,'promotionItem').and.callFake(function(){
        return _promotion;
      });

      promotionString +='名称：' + _promotion.item.name +
      '，数量：' + Math.floor(_promotion.count/3)+ _promotion.item.unit + '\n';
      saveMoney += _promotion.item.price*(Math.floor(_promotion.count/3));
			var result = promotion.getPromotion(cartItems);



			expect(result).toEqual({discountString: promotionString, saveTotal: saveMoney});
		});
  });

});
