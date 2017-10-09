"use strict";


$('#submitOrder').click(function(){
	let total = []; //running total
	let orderedBread = "";
	$('#breadHolder > input:checked').each(function(index){
		//use $(this) to access the checked input box
		let selectedBread = this;
		//get the id for output to finalOrder
		orderedBread += `<div>${selectedBread.id}</div>`;
		//get the value and add to total
		total += selectedBread.value;
	});
	let orderedCheese = "";
	$('#cheeseHolder > input:checked').each(function(index){
		let selectedCheese = this;
		orderedCheese += `<div>${selectedCheese.id}</div>`;
		total += selectedCheese.value;
	});
	let orderedCondiments = "";
	$('#condimentsHolder > input:checked').each(function(index){
		let selectedCondiments = this;
		orderedCondiments += `<div>${selectedCondiments.id}</div>`;
		total += selectedCondiments.value;
	});
	let orderedMeats = "";
	$('#meatHolder > input:checked').each(function(index){
		let selectedMeats = this;
		orderedMeats += `<div>${selectedMeats.id}</div>`;
		total += selectedMeats.value;
	});
	let orderedVeggies = "";
	$('#veggiesHolder > input:checked').each(function(index){
		let selectedVeggies = this;
		orderedVeggies += `<div>${selectedVeggies.id}</div>`;
		total += selectedVeggies.value;
	});

	//display the final order and total on the page
	let finalOrder = orderedBread + orderedCheese + orderedCondiments + orderedMeats + orderedVeggies; 
	$('#finalOrder').html(`<h4>Pay This Amount: $ ${total}</h4><p>Final Order:<p></p> ${finalOrder}</p>`);

});

module.exports = {};