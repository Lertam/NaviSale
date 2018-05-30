import urls from '../constants/urls'

export const getCategories = data => new Promise((resolve, reject) =>
  fetch(urls.CATEGORIES)
  .then(data => resolve(data.json())))
