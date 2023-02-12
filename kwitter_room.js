var firebaseConfig = 
{
  apiKey: "AIzaSyA4J2iFhoooXMKvxXycr1qZddpx1Ap8idw",
  authDomain: "kwitter-web-app---part-2.firebaseapp.com",
  projectId: "kwitter-web-app---part-2",
  storageBucket: "kwitter-web-app---part-2.appspot.com",
  messagingSenderId: "268482320323",
  appId: "1:268482320323:web:4e1d063ecef2ca65230f76",
  measurementId: "G-J67YKT3XC1"
};

var app = initializeApp(firebaseConfig);

user_name = document.getElementById("user_name");
document.getElementById("user_name").innerhtml= "Welcome" + user_name + "!";

function addRoom() 
{
    room_name = document.getElementById("room_name").value;
    firebaseConfig.database().ref("/").child(room_name).update({purpose: "adding room name"});
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";

}

function getData() 
{
    firebase.database().ref("/").on
    ('value', function(snapshot)
      {document.getElementById("output").innerHTML = "";
      snapshot.forEach
        (function(childSnapshot){childKey = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
          document.getElementById("output").innerhtml += row;
        });
      }
    );
}

function redirectToRoomName(name)
{
    console.log("name");
    localStorage("room_name", name);
    window.location = "kwitter_page.html";
}