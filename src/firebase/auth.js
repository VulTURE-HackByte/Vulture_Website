import { auth } from './firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

export const doSignInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithRedirect(auth, provider);
    console.log(result);
    return result;
  } catch (error) {
    console.log('Error signing in with Google:');
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export const doSignOut = () => {
  return auth.signOut();
};
