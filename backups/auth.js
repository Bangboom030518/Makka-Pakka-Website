(function() {
    // Firebase App (the core Firebase SDK) is always required and
    // must be listed before other Firebase SDKs
    var firebase = require("firebase/app");

    // Add the Firebase products that you want to use
    require("firebase/auth");
    require("firebase/database");

    // TODO: Replace the following with your app's Firebase project configuration
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    const Config = {
        apiKey: "AIzaSyBjkkLuIewbgBxaFhAr5xK35WHxarNHw9A",
        authDomain: "makka-pakka-web.firebaseapp.com",
        databaseURL: "https://makka-pakka-web.firebaseio.com",
        projectId: "makka-pakka-web",
        storageBucket: "makka-pakka-web.appspot.com",
        messagingSenderId: "925235500500",
        appId: "1:925235500500:web:bed8e796a481f736d0b241"
    };
  
    // Initialize Firebase
    firebase.initializeApp(Config);

    // get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    // Add login event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message))
    });
}());
