import { contactConstants } from '../constants';

export function contacts(state = {}, action) {
  switch (action.type) {
    case contactConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case contactConstants.GETALL_SUCCESS:
      return {
        loading: false,
        data: action.data
      };
    case contactConstants.GETALL_FAILURE:
      return {
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}