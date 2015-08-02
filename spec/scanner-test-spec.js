var totalItems = require('../main/fixtures');
var Scanner = require('../main/scanner');
var Item = require('../main/item');
describe('Scanner',function(){
	describe('#getItem()',function(){
		var scanner;
    var allItems;
		beforeEach(function(){
			scanner = new Scanner();
      allItems = totalItems.loadAllItems();
		});
		it('can return undefined',function(){

			var result = scanner.getItem('ITEM000006',allItems);
			expect(result).toBe(undefined);
		});
    it('can return Item',function(){

			var result = scanner.getItem('ITEM000000',allItems);

			expect(result).toEqual(new Item('ITEM000000', '可口可乐', '瓶', 3.00));
		});
  });
  describe('#scan()',function(){
		var scanner;
    var allItems;
		beforeEach(function(){
			scanner = new Scanner();
    });
		it('can return cartItem1',function(){
      var item = new Item('ITEM000000', '可口可乐', '瓶', 3.00);

      spyOn(scanner,'getItem').and.callFake(function(){
        return item;
        });
      var result = scanner.scan('ITEM000000');
			expect(result).toEqual({item:item,count:1});
		});
    it('can return cartItem2',function(){
      var iitem =new Item('ITEM000003', '荔枝', '斤', 15.00);
      spyOn(scanner,'getItem').and.callFake(function(){
        return iitem;
      });
      var result = scanner.scan('ITEM000003-2');
			expect(result).toEqual({item:iitem,count:2});
		});
  });
});
