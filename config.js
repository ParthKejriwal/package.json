import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBKJzOkdoLHO75Ckjz9PmpeLVAAH0johsI",
    authDomain: "wireless-buzzer-b49a1.firebaseapp.com",
    databaseURL: "https://wireless-buzzer-b49a1.firebaseio.com",
    projectId: "wireless-buzzer-b49a1",
    storageBucket: "wireless-buzzer-b49a1.appspot.com",
    messagingSenderId: "901926706484",
    appId: "1:901926706484:web:1d9312955d2fdffcb11961"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();