import { couponsTypes } from '../constants/types'

const initialState = {
  set: [],
  current: {},
  setRequest: false,
  currentRequest: false,
  filter: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case couponsTypes.GET_COUPONS__REQUEST: return {
      ...state,
      setRequest: true,
      set: []
    }
    case couponsTypes.GET_COUPON__REQUEST: return {
      ...state,
      currentRequest: true,
      current: {}
    }
    case couponsTypes.GET_COUPONS__SUCCESS: return {
      ...state,
      setRequest: false,
      set: action.payload.set.filter(coupon => state.filter.length > 0 ? state.filter.map(site=>site.Name).includes(coupon.Site) : true)
    }
    case couponsTypes.GET_COUPON__SUCCESS: return {
      ...state,
      currentRequest: false,
      current: action.payload.current
    }
    case couponsTypes.APPLY_FILTER: return {
      ...state,
      filter: action.payload
    }
    default: return state
  }
}
