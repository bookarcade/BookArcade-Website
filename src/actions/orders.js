import { FETCH_BUY, FETCH_RETURN, FETCH_PACKAGE, FETCH_RENT } from "./types";
import { buyRef, rentRef, packageRef, returnRef } from "../config/firebase";

export const fetchBuy = () => async dispatch => {
  buyRef.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      dispatch({
        type: FETCH_BUY,
        payload: doc.data()
      });
    });
  });
};

export const fetchRent = () => async dispatch => {
  rentRef.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      dispatch({
        type: FETCH_RENT,
        payload: doc.data()
      });
    });
  });
};

export const fetchPackage = () => async dispatch => {
  packageRef.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      dispatch({
        type: FETCH_PACKAGE,
        payload: doc.data()
      });
    });
  });
};

export const fetchReturn = () => async dispatch => {
  returnRef.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      dispatch({
        type: FETCH_RETURN,
        payload: doc.data()
      });
    });
  });
};
