var x = document.getElementById("login-form");
var y = document.getElementById("signup-form");
var z = document.getElementById("btn");
// this function takes user to profile page
function onSignIn(googleUser)
{
  var profile=googleUser.getBasicProfile();
  $(".g-signin2").css("display","none");
  $(".data").css("visibility","visible");
  $(".page3").css("display","block");
  $("#pic").attr('src',profile.getImageUrl());
  $("#emailid").text(profile.getEmail());
  $("#greet").text("Hello " + profile.getName())
}
//this function promt sign out message
function signOut()
{
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function(){

    alert("You've been successfully signed out");
    $(".g-signin2").css("display","block");
    $(".data").css("display","none");
    $(".page3").css("display","none");

  });
}
//this function change bg color
function bgChanger()
  {
    if(this.scrollY > this.innerHeight / 1.5) {
      document.body.classList.add('bg-active');
    } else {
      document.body.classList.remove('bg-active');
    }
  }
  window.addEventListener("scroll", bgChanger);
