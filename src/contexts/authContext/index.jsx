// import React, { useEffect } from 'react';
// import { auth } from '../../firebase/firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import PropTypes from 'prop-types';

// // const AuthContext = createContext();

// // export function useAuth() {
// //   return useContext(AuthContext);
// // }

// export default function AuthProvider({ children }) {
//     const { initializeUser } = useAuthStore();
// //   const [currentUser, setCurrentUser] = useState(null);
// //   const [userLoggedIn, setUserLoggedIn] = useState(false);
// //   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, initializeUser);
//     return unsubscribe;
//   }, [initializeUser]);

// //   async function initializeUser(user) {
// //     if (user) {
// //       setCurrentUser({ ...user });
// //       setUserLoggedIn(true);
// //     } else {
// //       setCurrentUser(null);
// //       setUserLoggedIn(false);
// //     }
// //     setLoading(false);
// //   }

// //   const value = {
// //     currentUser,
// //     userLoggedIn,
// //     loading,
// //   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// AuthProvider.jsx
import React, { useEffect } from 'react';
import { auth } from '../../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import useAuthStore from './authStore';
import PropTypes from 'prop-types';

const AuthProvider = ({ children }) => {
  const { initializeUser } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, [initializeUser]);

  return <>{children}</>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
