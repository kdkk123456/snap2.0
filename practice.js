var firebaseConfig = {
    apiKey: "AIzaSyC9-6yQ3_6OuUliIMKNXHrtR-_78kdhXUs",
    authDomain: "scuffed-online-snapchat.firebaseapp.com",
    databaseURL: "https://scuffed-online-snapchat.firebaseio.com",
    projectId: "scuffed-online-snapchat",
    storageBucket: "scuffed-online-snapchat.appspot.com",
    messagingSenderId: "211199176385",
    appId: "1:211199176385:web:4de820dba20db80032ae40"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function adduser() {
    var username=document.getElementById("username").value;
    var message=document.getElementById("message").value;
    firebase.database().ref("/").child(username).update({
        message:message
    })
}