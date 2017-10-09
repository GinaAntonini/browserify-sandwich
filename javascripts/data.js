"use strict";

const bread = require('./bread');
const cheese = require('./cheese');
const condiments = require('./condiments');
const meats = require('./meat');
const veggies = require('./veggies');

const errorFunction = () => {
	console.log("This is broken.");
};

const whenBreadLoads = function(){
	let allTheBread = JSON.parse(this.responseText).bread;
	let breadString = "";
	for (var i = 0; i < allTheBread.length; i++) {
		let bread = allTheBread[i];
		breadString += `<input id="${bread.type}" type="checkbox" value="${bread.price}">${bread.type}</input>`;
	}

	$('#breadHolder').html(breadString);
};

const whenCheeseLoads = function (){
	let allTheCheese = JSON.parse(this.responseText).cheese;
	let cheeseString = "";
	for (var i = 0; i < allTheCheese.length; i++) {
		let cheese = allTheCheese[i];
		cheeseString += `<input id="${cheese.type}" type="checkbox" value="${cheese.price}">${cheese.type}</input>`;
	}
	$('#cheeseHolder').html(cheeseString);
};

const whenCondimentsLoads = function(){
	let allTheCondiments = JSON.parse(this.responseText).condiments;
	let condimentsString = "";
	for (var i = 0; i < allTheCondiments.length; i++) {
		let condiments = allTheCondiments[i];
		condimentsString += `<input id="${condiments.type}" type="checkbox" value="${condiments.price}">${condiments.type}</input>`;
	}
	$('#condimentsHolder').html(condimentsString);
};

const whenMeatLoads = function (){
	let allTheMeats = JSON.parse(this.responseText).meat;
	let meatString = "";
	for (var i = 0; i < allTheMeats.length; i++) {
		let meats = allTheMeats[i];
		meatString += `<input id="${meats.type}" type="checkbox" value="${meats.price}">${meats.type}</input>`;
	}
	$('#meatHolder').html(meatString);
};

const whenVeggiesLoads = function (){
	let allTheVeggies = JSON.parse(this.responseText).veggies;
	let veggiesString = "";
	for (var i = 0; i < allTheVeggies.length; i++) {
		let veggies = allTheVeggies[i];
		veggiesString += `<input id="${veggies.type}" type="checkbox" value="${veggies.price}">${veggies.type}</input>`;
	}
	$('#veggiesHolder').html(veggiesString);
};

const loadMenu = () => {
	bread(whenBreadLoads, errorFunction);
	cheese(whenCheeseLoads, errorFunction);
	condiments(whenCondimentsLoads, errorFunction);
	meats(whenMeatLoads, errorFunction);
	veggies(whenVeggiesLoads, errorFunction);
};

module.exports = {loadMenu};