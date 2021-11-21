
var firebaseConfig = {
  apiKey: "AIzaSyADI5i38tRoxmas3c_fZWjXDVss4xHscDk",
  authDomain: "cityguy-jyeg.firebaseapp.com",
  databaseURL: "https://cityguy-jyeg-default-rtdb.firebaseio.com",
  projectId: "cityguy-jyeg",
  storageBucket: "cityguy-jyeg.appspot.com",
  messagingSenderId: "195496305375",
  appId: "1:195496305375:web:80038c881484b114f2bf6a"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("show_name").innerHTML = "Welcome" + " " + user_name+ "!";
function addRoom() {
  room_name = document.getElementById("room_make");
  room_name = localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class = 'room_name' id = "+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";

//End code
});});}
getData();


//Start code


