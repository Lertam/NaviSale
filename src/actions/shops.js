import { shopsTypes } from '../constants/types'
import { shopsApi } from '../api'

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
