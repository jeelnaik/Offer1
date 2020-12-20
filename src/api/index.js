

const homes = require('../homes.json')
const BASE = 'http://localhost:3000'
let getHomes = function() {

	return fetch(BASE + '/homes') 
		.then((resp) => {
			return homes;
		})
}

export  {
	getHomes
}

let getHome = function(id){
    return fetch(BASE + '/homes') 
		.then((resp) => {
			return homes.filter(home => home.id == id);
		})
}

export {
    getHome
}

let getResults = function(label,value){
    return fetch(BASE + '/homes') 
		.then((resp) => {
            switch(label){
                case '2':
                    return homes.filter(home => home.property.address.city === value);
                case '3':
                    return homes.filter(home => home.price >= value);
                case '4':
                    return homes.filter(home => home.price <= value);
                case '5':
                    return homes.filter(home => home.property.numberBedrooms == value);
                default:
                    return homes
            }
		})
}

export {
    getResults
}