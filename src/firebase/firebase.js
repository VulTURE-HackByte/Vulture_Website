import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA-iSf7GGsavzfxcOgUcCKPKbWpGfMWFWA',
  authDomain: 'vulture-89adb.firebaseapp.com',
  projectId: 'vulture-89adb',
  storageBucket: 'vulture-89adb.appspot.com',
  messagingSenderId: '633000927477',
  appId: '1:633000927477:web:9898c5046a0026cda925bc',
  measurementId: 'G-5665GX9RMW',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
