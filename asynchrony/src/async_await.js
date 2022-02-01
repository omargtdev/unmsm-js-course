import { fetch } from './index.js';

const getHeroes = async () => {
	try{
		const data = await fetch('https://api.opendota.com/api/heroes');
		const heroes = JSON.parse(data);
		const strHeroes = heroes.filter(({ primary_attr }) => primary_attr === 'str' );
		console.log(strHeroes);
	}catch(err){
		console.error(err)
	}
}

getHeroes();
