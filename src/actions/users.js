import { FETCH_USER } from './types';
import { authRef } from '../config/firebase';

// Fetch User Login Data
export const fetchUser = () => async (dispatch, getState) => {
  console.log('Fetch Executed');
  dispatch({
    type: FETCH_USER,
    payload: getState().auth.user
  });
};

//User Logout
export const userLogout = () => async dispatch => {
  authRef.signOut().then(() => {
    fetchUser();
  });
};

//User Login
export const userLogin = (email, password) => async dispatch => {
  console.log('Login Function');
  if (email === 'admin' && password === 'admin') {
    dispatch({
      type: FETCH_USER,
      payload: {
        email: email,
        password: password
      }
    });
  }
  // authRef
  //   .signInWithEmailAndPassword(email, password)
  //   .then(user => {
  //     console.log('Signed In');
  //     dispatch({
  //       type: FETCH_USER,
  //       payload: user
  //     });
  //   })
  //   .catch(error => {
  //     console.log(error.code + ' ' + error.message);
  //   });
};
