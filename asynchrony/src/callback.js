import { fetchCb } from './index.js';

fetchCb('https://api.opendota.com/api/heroes/', (err, data) => {
	if(err) throw new Error(err);  
	const heroes = JSON.parse(data);
	const invoker = heroes.find(heroe => heroe.localized_name === 'Invoker');
	console.log(invoker);
})


