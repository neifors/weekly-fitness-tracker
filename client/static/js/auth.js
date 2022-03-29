function logout(){
   localStorage.clear();
   window.location.href='index.html'
}
function currentUser(){
   const username = localStorage.getItem('username')
   return username;
}
function currentEmail(){
   const email=localStorage.getItem('email')
   return email;
}
var intro=document.getElementById('intro')

intro.innerHTML=currentEmail()?`Hello ${currentUser()}`:`You are not logged in`
