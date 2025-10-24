// Firebase initialization and helpers
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
// Initialize Analytics only in browser and when measurementId is provided
if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
  try {
    getAnalytics(app)
  } catch (e) {
    // Analytics may fail in some environments (SSR, blocked cookies) — ignore
    // eslint-disable-next-line no-console
    console.warn('Firebase analytics not initialized:', e.message)
  }
}
const auth = getAuth(app)

// Email / password helpers
export const signUpWithEmail = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)

export const signInWithEmail = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)

export const resetPassword = (email) => sendPasswordResetEmail(auth, email)
export const signOutUser = () => signOut(auth)
export const onAuth = (cb) => onAuthStateChanged(auth, cb)

export { auth }
