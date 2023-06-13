import { createContext, useState } from "react";
import { auth } from "../firebase/config";
import { useRouter } from "next/router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext({
  user: null,
  signup: () => {},
  login: () => {},
  logout: () => {},
  isLoggedin: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedin, setIsLoggedin] = useState(null);
  const router = useRouter();

  const signup = async (email, password, displayName) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName });
      setUser(res.user);
      setIsLoggedin(true);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoggedin(true);
        router.push("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setIsLoggedin(false);
        alert("Sign-out successful");
        router.push("/login");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  console.log(user);

  const context = { user, signup, login, logout, isLoggedin };

  // prettier-ignore
  return (
        <AuthContext.Provider value={ context }>
          { children }
        </AuthContext.Provider>
  )
};
