const loginform = document.getElementById("loginform");
var loginStatus=document.getElementById("status")
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
        .then(res=>{ 
          if(res.status==403) {loginStatus.innerHTML=`Wrong password`}
          else if(res.status==401) {loginStatus.innerHTML=`Email doesnt exist in our database`}
          return res.json()
        })
        .then(d=>{
            console.log(d)
            const decoded=atob(d.token.split('.')[1])
            console.log(decoded,JSON.parse(decoded),typeof(decoded))
            return JSON.parse(decoded)
        })
        .then(d=>{
            localStorage.setItem('username',d.username)
            localStorage.setItem('email',d.email)
        })
        
   })