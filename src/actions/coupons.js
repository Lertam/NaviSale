import { couponsTypes } from '../constants/types';
import { couponsApi } from '../api';

export const applyFilter = shops => dispatch => {
	dispatch((() => ({
		type: couponsTypes.APPLY_FILTER,
		payload: shops
	}))());
	getCoupons();
}

export const getCoupons = data => dispatch => {
	dispatch((() => ({
		type: couponsTypes.GET_COUPONS__REQUEST
	}))());

	couponsApi
		.getCoupons()
		.then(data => dispatch((() => ({
			type: couponsTypes.GET_COUPONS__SUCCESS,
			payload: { set: data }
		}))()));
}

export const getCoupon = id => dispatch => {
	dispatch((() => ({
		type: couponsTypes.GET_COUPON__REQUEST
	}))());
	couponsApi
		.getCoupon(id)
		.then(data => dispatch((() => ({
			type: couponsTypes.GET_COUPON__SUCCESS,
			payload: { current: data }
		}))()));
}
