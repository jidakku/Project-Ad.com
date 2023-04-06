import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDoBWCFAnspPFf93RsQ6h62R_BTJA8yld4",
  authDomain: "your-look-427ee.firebaseapp.com",
  projectId: "your-look-427ee",
  storageBucket: "your-look-427ee.appspot.com",
  messagingSenderId: "742039848469",
  appId: "1:742039848469:web:0acb56c0742eed073c301c",
  measurementId: "G-VN65SPX451"
});

export default firebaseConfig;