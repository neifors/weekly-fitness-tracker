
const registerform = document.getElementById("registerform");
var loginStatus=document.getElementById('status')
registerform.addEventListener("submit", async e => {
      e.preventDefault();
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
      console.log(data)

   })

   const loginform = document.getElementById("loginform");
   loginform.addEventListener("submit", async e => { 
      e.preventDefault();
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
      
      await fetch('http://localhost:3000/auth/login', options)
        .then(res=>res.json())
        .then(d=>{
            console.log(d)
            const user=d.token
            const decoded=atob(d.token.split('.')[1])
            console.log(decoded)
            return d
        })
        .then(d=> loginStatus.innerHTML=d)
   })

const regusername=document.getElementById('registerusername')
const avail=document.getElementById('available');
regusername.addEventListener('input', async e =>{
       //console.log(regusername.value)
       let username = document.getElementById("registerusername").value
       if (username=="") avail.innerHTML="";
 
       let options = {
          method: 'POST',
          body: JSON.stringify({
             username: username
          }),
          headers: {
             'Content-Type': 'application/json'
          }
       }
       await fetch('http://localhost:3000/users', options)
        .then(res=> {
          if (res.status==500){
              avail.innerHTML=`Username ${username} is available`
          }
          else {
              avail.innerHTML=`Username ${username} is taken. Please choose another`
          }
          return res.json()
        })
        .then(d=>{
            console.log(d)
            return d
        })

})
