import constants from '../constants';

export function login(user) {
  return {
    type: constants.LOGIN,
    user
  };
}


// import Firebase from 'firebase';
//
// const fireRef = new Firebase(C.FIREBASE);
//
// export function startListeningToAuth() {
//   return function(dispatch, getState) {
//     fireRef.onAuth(function(authData) {
//       if (authData) {
//         dispatch({
//           type: C.LOGIN_USER,
//           uid: authData.uid,
//           username: authData.github.displayName || authData.github.username
//         });
//       } else {
//         if (getState().auth.currently !== C.ANONYMOUS) { // log out if not already logged out
//           dispatch({
//             type: C.LOGOUT
//           });
//         }
//       }
//     });
//   }
// }
//
// export function attemptLogin() {
//   return function(dispatch, getState) {
//     dispatch({
//       type: C.ATTEMPTING_LOGIN
//     });
//     fireRef.authWithOAuthPopup("github", function(error, authData) {
//       if (error) {
//         dispatch({
//           type: C.DISPLAY_ERROR,
//           error: "Login failed! " + error
//         });
//         dispatch({
//           type: C.LOGOUT
//         });
//       } else {
//         // no need to do anything here, startListeningToAuth have already made sure that we update on changes
//       }
//     });
//   };
// }
//
// export function logoutUser() {
//   return function(dispatch, getState) {
//     dispatch({
//       type: C.LOGOUT
//     }); // don't really need to do this, but nice to get immediate feedback
//     fireRef.unauth();
//   };
// }
