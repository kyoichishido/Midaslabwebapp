const auth = firebase.auth();
//this function register users to the app and send data to firebase
function signup()
{
  var email = document.getElementById("#email");
  var password = document.getElementById("#password");
  
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("signed up");

};

//this function let users log in to the app
function login(){
		
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("signed in");
}

function logOut(){
		
  auth.logOut();
  
  alert("logged Out");

}
//this function monitor the state of user and performs the respective task
auth.onAuthStateChanged(function(user){
		
  if(user){
    var user = firebase.auth().currentUser;
   var name, email;
   name = user.displayName;
   email = user.email;
   $("#emailadd").text(email)
  }else{
    //no user is signed in
  }
  
});
