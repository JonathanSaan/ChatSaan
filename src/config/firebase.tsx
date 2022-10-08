import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_Firebase_API_Key}`,
	authDomain: `${process.env.REACT_APP_Auth_Domain}`,
	projectId: `${process.env.REACT_APP_Project_Id}`,
	storageBucket: `${process.env.REACT_APP_Storage_Bucket}`,
	messagingSenderId: `${process.env.REACT_APP_Message_Sender_Id}`,
	appId: `${process.env.REACT_APP_App_Id}`,
	measurementId: `${process.env.REACT_APP_Measurement_Id}`
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app);