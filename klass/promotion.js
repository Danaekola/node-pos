var disBarcodes = require('./fixtures');

function Promotion(type, barcodes) {
  this.type = type;
  this.barcodes = barcodes || [];
}

Promotion.prototype.promotionItem = function(cartItem) {
  var promotions = disBarcodes.loadPromotions();
  var barcodes = promotions[0].barcodes;
  for(var i = 0; i < barcodes.length; i++) {
    var barcode = barcodes[i];
    if(cartItem.item.barcode === barcode) {
      return cartItem;
	}
  }
  return null;
};

Promotion.prototype.getPromotion=function(cartItems) {
  var promotionString = '';
  var saveMoney = 0;
  var _this = this;

  cartItems.forEach(function (cartItem) {
    var promotion = _this.promotionItem(cartItem);
	  if(promotion) {

      promotionString +='名称：' + promotion.item.name +
      '，数量：' + Math.floor(promotion.count/3)+ promotion.item.unit + '\n';
      saveMoney += promotion.item.price*(Math.floor(promotion.count/3));
    }
  });
  return {discountString: promotionString, saveTotal: saveMoney};
};
module.exports = Promotion;