# Firebase-Auth-Google
Firebase-Auth-Google
Firebase Google Authentication (Expo Web)

This project is a simple React Native (Expo Web) application built using Firebase Authentication for user signup and login.
It demonstrates how to integrate Firebase with Expo Router to support authentication on web.

Features

Email & Password Signup/Login – Create and access user accounts using Firebase Auth

Google Sign-In (Web Only) – Authenticate via Google using Firebase’s popup flow

Session Handling – Automatically redirect users based on authentication state

Clean UI – Simple design with validation and error handling

Routing – Managed navigation using expo-router




Screenshot

<img width="1270" height="379" alt="image" src="https://github.com/user-attachments/assets/a370ace9-8c3c-43ed-9570-98ede64c6cd0" />


Setup Instructions
1. Clone the Repository

cd my-app

2. Install Dependencies
npm install

3. Create a Firebase Project

Open Firebase Console

Create a new Firebase project

Go to Authentication → Sign-in Method

Enable Email/Password

Enable Google Sign-In

Go to Project Settings → General → Your Apps → Web App

Copy your Firebase configuration

4. Configure Firebase in Your App

Create a file named firebaseConfig.js inside your project and paste the following code:

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

5. Run the App on Web
npm run web

This will start the Expo development server and open your app in the browser.
