import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:process.env.VUE_APP_firebase_key,
  authDomain: "bogg-d5ff6.firebaseapp.com",
  projectId: "bogg-d5ff6",
  storageBucket: "bogg-d5ff6.appspot.com",
  messagingSenderId: "998997610223",
  appId: "1:998997610223:web:269861eb53f40e2842151a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
createApp(App).use(store).use(router).mount('#app')
