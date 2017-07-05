import { LOGIN_USER, LOGIN_USER_FAIL, EMAIL_CHANGED, LOGIN_USER_SUCCESS, PASSWORD_CHANGED } from './types'
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux'

export const emailChange = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
};

export const passwordChange = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
};

export const loginuser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch))
      })
  }
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL })
};

const loginUserSuccess = (dispatch, user) => {
  console.log(user)
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })

  Actions.main();
};