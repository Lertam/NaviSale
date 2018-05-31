import { shopsTypes } from '../constants/types'

const initialState = {
  set: [],
  current: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case shopsTypes.GET_SHOPS__SUCCESS: return {
      ...state,
      set: action.payload.set
    }
    case shopsTypes.GET_SHOP__SUCCESS: return {
      ...state,
      current: action.payload.current
    }
    default: return state
  }
}
