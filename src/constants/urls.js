export default {
  COUPONS: 'https://bots.wawan.pro/api/v1/promocodes.json',
  COUPON: id => `https://bots.wawan.pro/api/v1/promocodes/${id}.json`,
  SHOPS: 'https://bots.wawan.pro/api/v1/sites.json?per_page=-1',
  SHOP: id => `https://bots.wawan.pro/api/v1/sites/${id}.json`,
  CATEGORIES: 'https://bots.wawan.pro/api/v1/categories.json'
}
