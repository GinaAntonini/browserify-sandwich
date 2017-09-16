"use strict";

const loadCheese = (onCheeseLoad, onCheeseError) => {
	const cheeseLoader = new XMLHttpRequest();
	cheeseLoader.addEventListener('load', onCheeseLoad);
	cheeseLoader.addEventListener('error', onCheeseError);
	cheeseLoader.open('GET', '../data/cheese.json');
	cheeseLoader.send();
};

module.exports = loadCheese;