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
