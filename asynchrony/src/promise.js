import { fetch } from './index.js';

fetch('https://api.opendota.com/api/heroes')
	.then(res => {
		const heroes = JSON.parse(res);
		const carriesHeroes = heroes.filter(({ roles }) => roles.includes('Carry'));
		console.log(heroes.length);
		console.log(carriesHeroes.length);
	})
	.catch(err => console.error(err));
