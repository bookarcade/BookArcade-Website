import { buyRef, rentRef, packageRef, returnRef } from "../config/firebase";
import { FETCH_BUY } from "./types";
import { FETCH_RENT } from "./types";
import { FETCH_PACKAGE } from "./types";
import { FETCH_RETURN } from "./types";
import { FETCH_USER } from "./types";

// export const addBook = newBook => async dispatch => {
//   booksRef.add(newBook);
//   console.log(FETCH_BOOKS);
// };

// export const addAuthor = newAuthor => async dispatch => {
//   authorRef.doc(newAuthor.name).set(newAuthor);
// };

// export const completeToDo = completeToDoId => async dispatch => {
//   todosRef.child(completeToDoId).remove();
// };

// export const fetchToDos = () => async dispatch => {
//   todosRef.on("value", snapshot => {
//     dispatch({
//       type: FETCH_TODOS,
//       payload: snapshot.val()
//     });
//   });
// };
export const fetchBuy = () => async dispatch => {
  buyRef.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      let docData = doc.data();
      docData.doc_id = doc.id;
      dispatch({
        type: FETCH_BUY,
        payload: docData
      });
    });
  });
};
