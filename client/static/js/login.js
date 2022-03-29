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
            const decoded=atob(d.token.split('.')[1])
            console.log(decoded)
            return d
        })
        .then(d=> loginStatus.innerHTML=d)
   })