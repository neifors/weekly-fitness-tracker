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
var userdata=document.getElementById('userdata')

intro.innerHTML=currentEmail()?`Hello ${currentUser()}<br><p>Your email ${currentEmail()}</p>`:`You are not logged in`
userdata.innerHTML=currentUser()?userdata.innerHTML:``