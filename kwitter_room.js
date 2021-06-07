var firebaseConfig = {
      apiKey: "AIzaSyCMBs4I8U7r72PvmxvUnU9hhDCD5DQQDTA",
      authDomain: "kwitter-4a289.firebaseapp.com",
      databaseURL: "https://kwitter-4a289-default-rtdb.firebaseio.com",
      projectId: "kwitter-4a289",
      storageBucket: "kwitter-4a289.appspot.com",
      messagingSenderId: "467125569678",
      appId: "1:467125569678:web:147eeec154ed2eb44c61df",
      measurementId: "G-7H7KBPKGZ6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("username");
document.getElementById("username").innerHTML="welcome "+username;
function addroom()
{console.log("entering addroom");
      roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({ purpose : "adding room name" });
      console.log("stored in database");
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name'id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
  //End code
      });});}
getData();
function redirect(name)
{
      localStorage.setItem("roomname",name);window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}
