var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
  'Should navigate to the first pair of most expensive shoes from a search': function(browser) {
    browser
        .url('https://www.amazon.com/')
        .waitForElementVisible('input[id="twotabsearchtextbox"]')
		.setValue('input[id="twotabsearchtextbox"]', 'Nike Shoes').keys(browser.Keys.ENTER);
		
		var shoesOnSearchedPage = browser.elements('css selector', 'span.sx-price-whole', function(result) {
			for (var i = 0; i < result.value.length; i++) {
				this.elementIdValue(result.value[i].ELEMENT, 'abc');
			}
		})
		
		var mostExpensiveShoesOnSearchedPage = Math.max(shoesOnSearchedPage)
		browser.click(mostExpensiveShoesOnSearchedPage)
		
		//check mostExpensiveShoesOnSearchedPage against element on product page id="priceblock_ourprice".getText();
        .end();
  }
  
};