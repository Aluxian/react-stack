import * as all from './all';
import * as auth from './auth';

export default Object.assign({}, ...[
  all,
  auth
]);

// login(router){
//   return (dispatch) => {
//     var firebaseRef = new Firebase('https://react-stack.firebaseio.com');
//     firebaseRef.authWithOAuthPopup("google", (error, user)=> {
//       if(error){
//         return;
//       }
//
//       dispatch(user);
//
//       router.transitionTo('/chat');
//     });
//   }
// }
