import { initializeApp, getApps } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyC--mjzGf6JSsBjoKKisvi1hn5NsGHWukI',
  authDomain: 'the-365days-of-making.firebaseapp.com',
  projectId: 'the-365days-of-making',
  storageBucket: 'the-365days-of-making.appspot.com',
  messagingSenderId: '917711862535',
  appId: '1:917711862535:web:8f5c637a6f742461ada3a2',
  measurementId: 'G-C27W2L17LM'
}

export let app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
