// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Non-dairy milk",
		lactose_intolerant: true,
		nuts_allergic: true,
		vegetarian: true,
		price: 1.99
	},
	{
		name: "milk",
		lactose_intolerant: false,
		nuts_allergic: true,
		vegetarian: true,
		price: 2.35
	},
	{
		name: "peanut butter",
		lactose_intolerant: true,
		nuts_allergic: false,
		vegetarian: true,
		price: 10.00
	}
	{
		name: "pork",
		lactose_intolerant: true,
		nuts_allergic: true,
		vegetarian: false,
		price: 15.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose_intolerant") && (prods[i].lactose_intolerant == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "nuts_allergic") && (prods[i].nuts_allergic == true)){
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
