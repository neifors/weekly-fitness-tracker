function renderHomepage() {
   const logoWrapper = document.createElement('div');
   logoWrapper.id = "logo-wrapper"

   const logo2 = document.createElement('img');
   logo2.id = "homepage-logo2"
   logo2.src = "https://i.ibb.co/RDZffjN/habits.png"

   logoWrapper.appendChild(logo2)

   const logo = document.createElement('img');
   logo.id = "homepage-logo"
   logo.src = "https://i.ibb.co/SrcQGYb/logo.png"

   logoWrapper.appendChild(logo)

   const buttonsWrapper = document.createElement('div');
   buttonsWrapper.id = "buttons-wrapper"

   const loginButton = document.createElement('button');
   loginButton.id = "login-button"
   loginButton.textContent = 'Login'
   loginButton.onclick = loginRedirect;

   const question = document.createElement('h3');
   question.id = "question"
   question.textContent = "Don't have an account yet? Register below!"

   const registerButton = document.createElement('button');
   registerButton.id = "register-button";
   registerButton.textContent = "Register";
   registerButton.onclick = registerRedirect;

   buttonsWrapper.appendChild(loginButton);
   buttonsWrapper.appendChild(question);
   buttonsWrapper.appendChild(registerButton);

   main.appendChild(logoWrapper)
   main.appendChild(buttonsWrapper)
}


function renderLoginForm() {
   const loginDiv = document.createElement('div')
   loginDiv.className = "card"
   
   const backBttn = document.createElement('button')
   backBttn.className = "back-button"
   backBttn.textContent = "Back"
   backBttn.onclick = e => window.location.hash = "#";

   loginDiv.appendChild(backBttn)

   const signIn = document.createElement('h3')
   signIn.id = 'signin-title'
   signIn.textContent = 'Sign in Below'
   loginDiv.appendChild(signIn)

   const fields = [
       { tag: 'input', attributes: { type: 'email', name: 'email', placeholder: 'Enter your email here' } },
       { tag: 'input', attributes: { class: 'passStyle', type: 'password', name: 'password', placeholder: 'Please insert password here' } },
       { tag: 'input', attributes: { class: 'submitting-button', type: 'submit', value: 'Login' } }

   ]

   const form = document.createElement('form');
   form.id = "login-form"
   fields.forEach(f => {
      let field = document.createElement(f.tag);
      Object.entries(f.attributes).forEach(([a, v]) => {
         field.setAttribute(a, v);
         form.appendChild(field);
      })
   })
   form.addEventListener('submit', requestLogin)
   loginDiv.appendChild(form);

   const question = document.createElement('h4');
   question.id = 'are-you-new';
   question.textContent = "Don't have an account yet? Sign up!";
   loginDiv.appendChild(question);

   const registerBttn = document.createElement('button');
   registerBttn.id = 'register-button';
   registerBttn.textContent = 'Register';
   registerBttn.onclick = registerRedirect;
   loginDiv.appendChild(registerBttn);

   main.appendChild(loginDiv)
}

function renderRegisterForm() {
   const regDiv = document.createElement('div')
   regDiv.className = "card"

   const backBttn = document.createElement('button')
   backBttn.className = "back-button"
   backBttn.textContent = "Back"
   backBttn.onclick = e => window.location.hash = "#";

   regDiv.appendChild(backBttn)

   const fields = [
      { tag: 'input', attributes: { type: 'text', /*id: 'register-input-username'*/class: 'inputs', name: 'username', placeholder: 'Create a username' , require: true} },
      // { tag: 'p', attributes: { id: "username-error-message"}},
      { tag: 'input', attributes: { type: 'email', class: 'inputs', name: 'email', placeholder: 'Your email E.g. fitnessperson@gmail.com' } },
      { tag: 'input', attributes: { type: 'password', class: 'inputs', name: 'password', placeholder: 'Create a password' } },
      { tag: 'input', attributes: { type: 'password', class: 'inputs', name: 'passwordConfirmation', placeholder: 'Confirm Password' } },
      { tag: 'input', attributes: { class: 'submit-button', type: 'submit', value: 'Create Account' } }

   ]

   const form = document.createElement('form');
   form.id = "register-form"
   fields.forEach(f => {
      let field = document.createElement(f.tag);
      Object.entries(f.attributes).forEach(([a, v]) => {
         field.setAttribute(a, v);
         form.appendChild(field);
      })
   })

   form.addEventListener('submit', requestRegistration);
   regDiv.appendChild(form);


   const question = document.createElement('h4');
   question.id = 'already-have-account';
   question.textContent = "If you already have an account";
   regDiv.appendChild(question);

   const registerBttn = document.createElement('button');
   registerBttn.id = 'login-button';
   registerBttn.textContent = 'Login';
   registerBttn.onclick = loginRedirect;
   regDiv.appendChild(registerBttn);

   main.appendChild(regDiv)

   const errMsg = document.getElementById('username-error-message')
   const input = document.getElementById("register-input-username")
   input.addEventListener('input', async e =>{
      let userN = document.getElementById("register-input-username").value
      let options = {
         method: 'POST',
         body: JSON.stringify({
            username: userN
         }),
         headers: {
            'Content-Type': 'application/json'
         }
      }
      await fetch('http://localhost:3000/users', options)
         .then(res=> {
            if (res.status==500){
               errMsg.textContent=`Username ${userN} is available`
            }
            else {
               errMsg.textContent=`Username ${userN} is taken.`
            }
            return res.json()
         })
         .then(d=>{
               return d
         })

   })

}


function render404() {
   const error = document.createElement('h3');
   error.textContent = "Oops, we can't find that page sorry!";
   main.appendChild(error);
}
