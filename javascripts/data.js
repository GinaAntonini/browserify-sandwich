"use strict";

const loadBread = require('./bread');
const loadCheese = require('./cheese');
const loadCondiments = require('./condiments');
const loadMeat = require('./meat');
const loadVeggies = require('./veggies');

const theWholeSandwich = [];
const breadArray = [];
const cheeseArray = [];
const condimentsArray = [];
const meatArray = [];
const veggiesArray = [];

const errorFunction = () => {
	console.log("This is broken.");
};

const whenBreadLoads = function(){
	let breadArray = JSON.parse(this.responseText).bread;
	return breadArray;
};

const whenCheeseLoads = function (){
	let cheeseArray = JSON.parse(this.responseText).cheese;
	return cheeseArray;
};

const whenCondimentsLoads = function(){
	let condimentsArray = JSON.parse(this.responseText).condiments;
	return condimentsArray;
};

const whenMeatLoads = function (){
	let meatArray = JSON.parse(this.responseText).meat;
	return meatArray;
};

const whenVeggiesLoads = function (){
	let veggiesArray = JSON.parse(this.responseText).veggies;
	return veggiesArray;
};

//next, concatenate all of the arrays together 


//Functions to add selected ingredients to the global sandwich array

const addToBreadArray = function(selectedBread){
		return {name: selectedBread, price: breadArray[selectedBread]};
	};

const addToCheeseArray = function(selectedCheese){
		return {name: selectedCheese, price: cheeseArray[selectedCheese]};
	};

const addToCondimentsArray = function(selectedCondiments){
		return {name: selectedCondiments, price: condimentsArray[selectedCondiments]};
	};

const addToMeatArray = function(selectedMeat){
		return {name: selectedMeat, price: meatArray[selectedMeat]};
	};

const addToVeggiesArray = function(selectedVeggies){
		return {name: selectedVeggies, price: veggiesArray[selectedVeggies]};
	};


//Functions to get the price of each topping

// const getBreadPrice = function(name){
//         return breadArray[value];
//     };

// const getCheesePrice = function(name) {
//         return cheeseArray[value];
//     };

// const getCondimentsPrice = function(name) {
//         return condimentsArray[name];
//     };

// const getMeatPrice = function(name) {
//         return meatArray[name];
//     };

// const getVeggiesPrice = function(name) {
//         return veggiesArray[name];
//     };