// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Non-dairy milk",
		lactosefree: true,
		nutallergy: true,
		vegetarian: false,
		price: 1.99
	},
	{
		name: "milk",
		lactosefree: false,
		nutallergy: true,
		vegetarian: false,
		price: 2.35
	},
	{
		name: "peanut butter",
		lactosefree: true,
		nutallergy: false,
		vegetarian: false,
		price: 10.00
	}
	{
		name: "potato",
		lactosefree: true,
		nutallergy: true,
		vegetarian: true,
		price: 5.00
	}
	{
		name: "pork",
		lactosefree: true,
		nutallergy: true,
		vegetarian: false,
		price: 15.00
	}
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactosefree") && (prods[i].lactosefree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "nutallergy") && (prods[i].nutallergy == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
