import { contactConstants } from "../constants";
import { contactsApi } from "../apis";

export const contactsActions = {
  getAll,
}

function getAll() {
  return dispatch => {
    dispatch(request());
    contactsApi.getAll()
      .then(
        data => dispatch(success(data.contacts)),
        error => dispatch(failure(error))
      );
  }
}

function request() { return { type: contactConstants.GETALL_REQUEST } }
function success(contacts) { return { type: contactConstants.GETALL_SUCCESS, data: contacts } }
function failure(error) { return { type: contactConstants.GETALL_FAILURE, error } }