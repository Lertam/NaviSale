import { shopsTypes } from '../constants/types'
import { shopsApi } from '../api'
import { catsApi } from '../api'

export const getShops = data => dispatch => {
  dispatch((() => ({
    type: shopsTypes.GET_SHOPS__REQUEST
  }))())
  shopsApi
  .getShops()
  .then(data => dispatch((shops => ({
    type: shopsTypes.GET_SHOPS__SUCCESS,
    payload: { set: shops }
  }))(data)))
}

export const getShop = id => dispatch => {
  dispatch((() => ({
    type: shopsTypes.GET_SHOP__REQUEST
  }))())
  shopsApi
  .getShop(id)
  .then(data => dispatch((shop => ({
    type: shopsTypes.GET_SHOP__SUCCESS,
    payload: { current: shop }
  }))(data)))
}

export const getCategories = data => dispatch => {
  dispatch((() => ({
    type: shopsTypes.GET_CATEGORIES__REQUEST
  }))())
  catsApi
  .getCategories()
  .then(data => dispatch((shops => ({
    type: shopsTypes.GET_CATEGORIES__SUCCESS,
    payload: { set: shops }
  }))(data)))
}
