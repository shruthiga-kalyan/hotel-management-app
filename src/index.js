import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {ProSidebarProvider} from 'react-pro-sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
const firebaseConfig = {
  apiKey: "AIzaSyDFmeEdj0_zCD5oXOAIJu2MT7lJTOdsXaQ",
  authDomain: "hotel-9acbb.firebaseapp.com",
  projectId: "hotel-9acbb",
  storageBucket: "hotel-9acbb.appspot.com",
  messagingSenderId: "771853295830",
  appId: "1:771853295830:web:a1e68c79b2a8929b95e977",
  measurementId: "G-333QKZ83Q5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ProSidebarProvider>

    <App />
    </ProSidebarProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);