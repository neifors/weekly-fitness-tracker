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
   question.textContent = "Don't have an account yet?"

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
   const backBttn = document.createElement('button')
   backBttn.className = "back-button"
   backBttn.textContent = "Back"
   backBttn.onclick = e => window.location.hash = "#";

   main.appendChild(backBttn)


   const signIn = document.createElement('h3')
   signIn.id = 'signin-title'
   signIn.textContent = 'Sign in Below'
   main.appendChild(signIn)

   const fields = [
       { tag: 'input', attributes: { type: 'email', name: 'email', placeholder: 'Enter your email here' } },
       { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Please insert password here' } },
       { tag: 'input', attributes: { type: 'submit', value: 'Login' } }

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
   main.appendChild(form);

   const question = document.createElement('h4');
   question.id = 'are-you-new';
   question.textContent = "Don't have an account yet? Sign up!";
   main.appendChild(question);

   const registerBttn = document.createElement('button');
   registerBttn.id = 'register-button';
   registerBttn.textContent = 'Register';
   registerBttn.onclick = registerRedirect;
   main.appendChild(registerBttn);
}

function renderRegisterForm() {
   const backBttn = document.createElement('button')
   backBttn.className = "back-button"
   backBttn.textContent = "Back"
   backBttn.onclick = e => window.location.hash = "#";

   main.appendChild(backBttn)

   const fields = [
      { tag: 'input', attributes: { type: 'text', name: 'username', placeholder: 'Create a username' } },
      { tag: 'input', attributes: { type: 'email', name: 'email', placeholder: 'Your email E.g. fitnessperson@gmail.com' } },
      { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Create a password' } },
      { tag: 'input', attributes: { type: 'password', name: 'passwordConfirmation', placeholder: 'Confirm Password' } },
      { tag: 'input', attributes: { type: 'submit', value: 'Create Account' } }

   ]

   const form = document.createElement('form');
   fields.forEach(f => {
      let field = document.createElement(f.tag);
      Object.entries(f.attributes).forEach(([a, v]) => {
         field.setAttribute(a, v);
         form.appendChild(field);
      })
   })

   form.addEventListener('submit', requestRegistration)
   main.appendChild(form);

   const question = document.createElement('h4');
   question.id = 'already-have-account';
   question.textContent = "If you already have an account";
   main.appendChild(question);

   const registerBttn = document.createElement('button');
   registerBttn.id = 'login-button';
   registerBttn.textContent = 'Login';
   registerBttn.onclick = loginRedirect;
   main.appendChild(registerBttn);
}


function render404() {
   const error = document.createElement('h3');
   error.textContent = "Oops, we can't find that page sorry!";
   main.appendChild(error);
}
