//currentUser()
//login()


async function requestRegistration(e) {

   e.preventDefault();
   try {
      registerform = document.getElementById("registerform");
      
      registerform.addEventListener("submit", async e => {
         let username = document.getElementById("registerusername").value
         let email = document.getElementById("registeremail").value
         let password = document.getElementById("registerpassword").value

         let options = {
            method: 'POST',
            body: JSON.stringify({
               username: username,
               email: email,
               password: password
            }),
            headers: {
               'Content-Type': 'application/json'
            }
         }

         const result = await fetch('http://localhost:3000/auth/register', options)
         const data = await result.json()

      })
   } catch(err) {
      console.warn(err);
   }
}

async function requestLogin(e){
   e.preventDefault();
   try {
      const loginform = document.getElementById("loginform");
      loginform.addEventListener("submit", async e => { 
         let email=document.getElementById("loginemail").value;
         let password=document.getElementById("loginpassword").value;

         let options={
            method: 'POST',
            body:JSON.stringify({
               email:email, 
               password:password
            }), 
            headers:{'Content-Type': 'application/json'
         }}
      
         const result = await fetch('http://localhost:3000/auth/login', options)
         const data = await result.json()
         if (!data.success) { throw new Error('Login not authorised'); }
         login(data.token);      
      })
   } catch(err) {
      console.warn(err);
   }

   
}
