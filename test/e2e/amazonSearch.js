var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
	'Should navigate to the first pair of the most expensive shoes from a search': function(browser) {
		browser
		.url('https://www.amazon.com/')
		.waitForElementVisible('input[id="twotabsearchtextbox"]')
		.setValue('input[id="twotabsearchtextbox"]', 'Nike Shoes').keys(browser.Keys.ENTER);
		
		var prices = [];
		
		var shoesOnSearchedPage = browser.elements('css selector', 'span.sx-price-whole', function(result) {
			for(var i = 0; i < result.value.length; i++) {
				this.elementIdAttribute(result.value[i].ELEMENT, 'innerHTML', function(result) {
					console.log('Price#', result.value);
					prices.push(Number(result.value))
				});
			}
		})
	
	browser.perform(function(done) {
		console.log('prices', prices);
		
		prices.sort(function(a, b) {
			return a - b;
		});
		
		console.log('prices', prices);
		
		done();
	})
	
	var mostExpensiveShoesOnSearchedPage = Math.max(shoesOnSearchedPage)
	browser.click(mostExpensiveShoesOnSearchedPage)
	
       .end();
	}
};