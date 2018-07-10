import urls from '../constants/urls';

export const getShops = () => new Promise((resolve, reject) =>
	fetch(urls.SHOPS)
	.then(response => resolve(response.json())));

export const getShop = id => new Promise((resolve, reject) =>
	fetch(urls.SHOP(id))
	.then(data => resolve(data.json())));
