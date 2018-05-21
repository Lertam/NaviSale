import urls from '../constants/urls'

export const getShops = () => new Promise((resolve, reject) =>
  fetch(urls.SHOPS)
  .then(response => resolve(response.json())))
