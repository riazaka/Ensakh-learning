import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const config = {
    apiKey: "AIzaSyCvuc3glJKaANbV45Aee6007KbUVrLo7RU",
    authDomain: "algo-fa300.firebaseapp.com",
    databaseURL: "https://algo-fa300-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "algo-fa300",
    storageBucket: "algo-fa300.appspot.com",
    messagingSenderId: "551812964088",
    appId: "1:551812964088:web:00a35537145cb28996e50d",
    measurementId: "G-HRPDXKSMCM"
  };
  class Firebase {
      constructor() {
          firebase.initializeApp(config);
          this.auth = firebase.auth();
          this.db =firebase.firestore()
      }
  
      // inscription
      signupUser = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password)
     
  
      // Connexion
      loginUser = (email, password) => 
      this.auth.signInWithEmailAndPassword(email, password);
  
      // Déconnexion
      signoutUser = () => this.auth.signOut();
  
      // Récupérer le mot de passe
      passwordReset = email => this.auth.sendPasswordResetEmail(email); 
  
      // firestore
      user = uid => this.db.doc(`users/${uid}`);
  }
  
  export default Firebase;