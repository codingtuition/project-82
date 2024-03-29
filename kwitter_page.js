//YOUR FIREBASE LINKS
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
roomname=localStorage.getItem("roomname");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
namewithtag="<h4> "+name+"<img class='user_tick' src='tick.png'></h4>";
messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning'id="+firebase_message_id+"value="+like+"onclick='updatelike(this.id)'>";
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
row=namewithtag+messagewithtag+like_button+spanwithtag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
function updatelike(message_id)
{
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updatedlike=Number(likes)+1;
      firebase.database().ref(roomname).child(message_id).update({
            like:updatedlike
      });
}
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}