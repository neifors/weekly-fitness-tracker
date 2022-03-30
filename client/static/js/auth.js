async function requestRegistration(e) {
   e.preventDefault();
   try {

      const options = {
         method: 'POST',
         body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
         headers: {
            'Content-Type': 'application/json'
         }
      }

      const result = await fetch('http://localhost:3000/auth/register', options)
      const data = await result.json()

      // HOW IS THIS DATA STRUCTURE?????
      if(!!data.newuser){  throw new Error("Couldn't create user") }

      requestLogin(e);
      
   } catch(err) {
      console.warn(err);
   }
}

async function requestLogin(e){
   e.preventDefault();
   try {

      const options={
         method: 'POST',
         body:JSON.stringify(Object.fromEntries(new FormData(e.target))), 
         headers:{
            'Content-Type': 'application/json'
         }
      }
   
      const result = await fetch('http://localhost:3000/auth/login', options)
      const data = await result.json()
      login(data);   
      
   } catch(err) {
      console.warn(err);
   } 
}

// We need to decode the token and get the username and the token itself to save it into the local storage
// Then, redirect to the user profile =)
function login(data){
   const token = data.token;
   const user = atob(token.split('.')[1])
   console.log(decode)
   localStorage.setItem("token", token);
   localStorage.setItem("username", user.username);
   window.location.hash = '#profile';
}

function logout(){
   localStorage.clear();
   window.location.hash = '#';
}

function currentUser(){
   const username = localStorage.getItem('username')
   return username;
}

function loginRedirect(){
   window.location.hash = '#login';
}

function registerRedirect(){
   window.location.hash = '#register'
}

function habitFormRedirect(){
   window.location.hash = '#create'
}

