import urls from '../constants/urls'

export const getCoupons = data => new Promise((resolve, reject) =>
  fetch(urls.COUPONS)
  .then(data => resolve(data.json())))

export const getCoupon = id => new Promise((resolve, reject) =>
  fetch(urls.COUPON(id))
  .then(data => resolve(data.json())))
