import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDSNX0rC-7mzWVnzPxf_g3qt_as7VKLLnE',
  authDomain: 'feed-c4d02.firebaseapp.com',
  databaseURL: 'https://feed-c4d02-default-rtdb.firebaseio.com',
  projectId: 'feed-c4d02',
  storageBucket: 'feed-c4d02.appspot.com',
  messagingSenderId: '592498089093',
  appId: '1:592498089093:web:56021d54267a57ce84ddec',
  measurementId: 'G-YTFQQPBMBE',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
