var regstatus=document.getElementById("status")

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

      await fetch('http://localhost:3000/auth/register', options)
      .then(res=> {
         if (res.status==201){
             regstatus.innerHTML=`User registered`
         }
         return res.json()
       })
       .then(d=>{
           console.log(d)
           return d
       })


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

