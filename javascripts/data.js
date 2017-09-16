"use strict";

let theWholeSandwich = [];

const loadBread = require('./bread');
const loadCheese = require('./cheese');
const loadCondiments = require('./condiments');
const loadMeat = require('./meat');
const loadVeggies = require('./veggies');

const errorFunction = () => {
	console.log("This is broken.");
};

const whenBreadLoads = function(){
	theWholeSandwich = JSON.parse(this.responseText).bread;
};

const whenCheeseLoads = function (){
	theWholeSandwich += JSON.parse(this.responseText).cheese;
};

const whenCondimentsLoads = function(){
	theWholeSandwich += JSON.parse(this.responseText).condiments;
};

const whenMeatLoads = function (){
	theWholeSandwich += JSON.parse(this.responseText).meat;
};

const whenVeggiesLoads = function (){
	theWholeSandwich += JSON.parse(this.responseText).veggies;
};


