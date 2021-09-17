
var firebaseConfig = {
      apiKey: "AIzaSyAfVBD8HXNV-80oSCWBSHRihe1fgvB_bLM",
      authDomain: "kwitter-ef820.firebaseapp.com",
      databaseURL: "https://kwitter-ef820-default-rtdb.firebaseio.com",
      projectId: "kwitter-ef820",
      storageBucket: "kwitter-ef820.appspot.com",
      messagingSenderId: "912498079470",
      appId: "1:912498079470:web:e932d8734b464e4fd8e5ff"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
console.log("Room Name - " + Room_names);
row = "<div class = 'room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)'>#"+ Room_names +"</div><hr></hr>";
document.getElementById("output").innerHTML +=row;
              //End code 
            });
      });
}
getData();

function redirecttoRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout()
{

localStorage.remmoveitem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}





