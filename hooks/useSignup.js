// import { auth } from "../firebase/config";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useState } from "react";

// export const useSignup = () => {
//   const [error, setError] = useState(null);

//   const signup = (email, password) => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         // ...
//       })
//       .catch((err) => {
//         setError(err.message);
//       });
//   };
//   return { error, signup };
// };
