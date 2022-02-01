import { XMLHttpRequest } from 'xmlhttprequest';

// callback
export const fetchCb =  (URL, callback) => {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', URL);

	xhr.onreadystatechange = () => {
		if(xhr.readyState === xhr.DONE){
			if(xhr.status === 200){
				console.clear();
				callback(null, xhr.responseText);
			}else{
				callback(`Something has happened: 
				Status received : ${xhr.status}. Check the URL`, null);
			}
		}
	}

	xhr.send();
	console.log("Wait please...")
}

// promise
export const fetch = (URL) => new Promise((res, rej) => {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', URL);

	xhr.onreadystatechange = () => {
		if(xhr.readyState === xhr.DONE){
			if(xhr.status === 200){
				console.clear();
				res(xhr.responseText);
			}else{
				rej(`Something has happened: 
				Status received : ${xhr.status}. Check the URL`);
			}
		}
	}

	xhr.send();
	console.log("Wait please...")

})
