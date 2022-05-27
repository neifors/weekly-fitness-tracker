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
      if (e.target["password"].value !== e.target["passwordConfirmation"].value){
         const msg = document.createElement('p')
         msg.id = 'different-pw-confirmation'
         msg.textContent ="Different passwords"
         msg.style = "color:red;"
         main.append(msg)
         throw new Error("passwords don't match")
      }
      const result = await fetch('https://weekly-fitness-tracker-server.herokuapp.com/auth/register', options)
      const data = await result.json()
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
      const result = await fetch('https://weekly-fitness-tracker-server.herokuapp.com/auth/login', options)
      const data = await result.json()
      if (data.err){
         const msg = document.createElement('p')
         msg.id = 'error-login'
         msg.textContent ="Email and password doesn't match"
         msg.style = "color:red;"
         main.append(msg)
      }
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
