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
      console.log(options)

      const result = await fetch('http://localhost:3000/auth/register', options)
      const data = await result.json()
      console.log(data)
      // HOW IS THIS DATA STRUCTURE?????
      if(!data.msg){  throw new Error("Couldn't create user") }

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
      console.log(options)
      const result = await fetch('http://localhost:3000/auth/login', options)
      const data = await result.json()
      console.log(data)
      login(data);   
      
   } catch(err) {
      console.warn(err);
   } 
}

// We need to decode the token and get the username and the token itself to save it into the local storage
// Then, redirect to the user profile =)
function login(data){
   const token = data.token;
   let user = atob(token.split('.')[1])
   user = JSON.parse(user)
   localStorage.setItem("token", token);
   localStorage.setItem("username", user.username);
   window.location.hash = '#profile';
}

function logout(){
   localStorage.clear();
   window.location.hash = '#';
}

function currentUser(){
   try{
      const username = localStorage.getItem('username')
      return username;
   }catch(err){
      return null
   }
}

function loginRedirect(){
   main.innerHTML = '';
   window.location.hash = '#login';
}

function registerRedirect(){
   main.innerHTML = '';
   window.location.hash = '#register'
}

function habitFormRedirect(){
   main.innerHTML = '';
   window.location.hash = '#create'
}

function profileRedirect(){
   main.innerHTML = '';
   window.location.hash = "#profile"
}
