import React, { createContext, useContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDoc,doc } from 'firebase/firestore';
import db from './firebase';

const auth = getAuth();
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [CurrentUserData, setCurrentUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(user) => {
      setCurrentUser(user);
      if (user) {
        const Ref = doc(db, 'user', user.uid);
        const Snap = await getDoc(Ref);
        if (Snap.exists()) {
          setCurrentUserData(Snap.data());
        } else {
          setCurrentUserData(null)
        }
      } else {
        setCurrentUserData(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [db]);

  return (
    <AuthContext.Provider value={{ currentUser,CurrentUserData }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}