var config = {
    apiKey: "AIzaSyDjg_MZFvteYmqdps9DAdYYNOmxe2OEAgU",
    authDomain: "whats-happening-12fa5.firebaseapp.com",
    databaseURL: "https://whats-happening-12fa5.firebaseio.com",
    storageBucket: "whats-happening-12fa5.appspot.com",
    messagingSenderId: "267786328120"
};
firebase.initializeApp(config);
var database = firebase.database();

var createUser = function(email, password) {
    firebase.database().ref('/users').set({
        displayName: displayName,
        email: email,
        zipCode: zipCode
    });
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code: " + errorCode);
        console.log("error message: " + errorMessage);
    });
};