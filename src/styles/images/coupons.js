import { couponsTypes } from '../constants/types'
import { couponsApi } from '../api'

export const getCoupons = data => dispatch => {
  dispatch((() => ({
    type: couponsTypes.GET_COUPONS__REQUEST
  }))())
  // couponsApi.getCoupons()
  setTimeout(() => dispatch((() => ({
    type: couponsTypes.GET_COUPONS__SUCCESS,
    payload: {
      set: [
      	{
      		"Code": "LOLKEKCHEBUREK",
      		"Description": "123 lol kek",
      		"Expires": null,
      		"ID": 9,
      		"Site": "lamoda.ru"
      	},
      	{
      		"Code": "HAPPYNEWYEAR2049",
      		"Description": "lol kek cheburek",
      		"Expires": null,
      		"ID": 8,
      		"Site": "aliexpress.com"
      	},
      	{
      		"Code": "DEAL123",
      		"Description": "super mega deal -100% off",
      		"Expires": null,
      		"ID": 7,
      		"Site": "asos"
      	},
      	{
      		"Code": "SPRING18",
      		"Description": "asdfkjasdjfk",
      		"Expires": null,
      		"ID": 6,
      		"Site": "aliexpress.com"
      	},
      	{
      		"Code": "123",
      		"Description": "Test",
      		"Expires": null,
      		"ID": 5,
      		"Site": "aliexpress.com"
      	},
      	{
      		"Code": "asdf",
      		"Description": "qweeeeeeeeeeerty",
      		"Expires": null,
      		"ID": 4,
      		"Site": "asos"
      	},
      	{
      		"Code": "APP20",
      		"Description": "Работает только с мобильного, на определенную подборку товаров",
      		"Expires": "2018-04-14 14:00",
      		"ID": 3,
      		"Site": "asos"
      	},
      	{
      		"Code": "MSS18",
      		"Description": "flash sale",
      		"Expires": "2018-04-06 09:00",
      		"ID": 1,
      		"Site": "lamoda.ru"
      	}
      ]
    }
  }))()), 2000)
}

export const getCoupon = id => dispatch => {
  dispatch((() => ({
    type: couponsTypes.GET_COUPON__REQUEST
  }))())
  // api.getCoupon(id)
  setTimeout(() => dispatch((() => ({
    type: couponsTypes.GET_COUPON__SUCCESS,
    payload: { current: {
    	Code: "MSS18",
    	Description: "flash sale",
    	Expires: "2018-04-06 09:00",
    	ID: 1,
    	Site: "lamoda.ru"
    }}
  }))()), 2000)
}
