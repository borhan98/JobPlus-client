import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Config/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Create new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Login user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout User
  const logout = () => {
    return signOut(auth);
  };

  // reset password
  const handleResetPass = email => {
    return sendPasswordResetEmail(auth, email);
  }

  // Handle State changed
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
        const loggedEmail = currentUser?.email || user?.email;
        const loggedUser = { email: loggedEmail };
        if (currentUser) {
          axios
            .post("https://jobplus-server.vercel.app/jwt", loggedUser, { withCredentials: true })
            .then((data) => {
              console.log(data.data);
            });
        } else {
          axios
            .post("https://jobplus-server.vercel.app/logout", loggedUser, { withCredentials: true })
            .then((data) => {
              console.log(data.data);
            });
        }
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, [user]);

  const authInfo = {
    user,
    loading,
    googleLogin,
    createUser,
    updateUserProfile,
    login,
    logout,
    handleResetPass
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
