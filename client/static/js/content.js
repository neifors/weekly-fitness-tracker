// renderLoginForm()
// renderRegisterForm()
// render404()
// renderHomepage()


function renderHomepage() {
   const logoWrapper = document.createElement('div');
   logoWrapper.id = "logo-wrapper"

   const logo = document.createElement('img');
   logo.id = "homepage-logo"

   logoWrapper.appendChild(logo)

   const buttonsWrapper = document.createElement('div');
   buttonsWrapper.id = "buttons-wrapper"

   const loginButton = document.createElement('button');
   loginButton.id = "login-button"
   loginButton.textContent = 'Login'
   // loginButton.onclick = loginRedirect;

   const question = document.createElement('h3');
   question.id = "question"
   question.textContent = "Don't you have an account yet?"

   const registerButton = document.createElement('button');
   registerButton.id = "register-button";
   registerButton.textContent = "Register";
   // registerButton.onclick = registerRedirect;

   buttonsWrapper.appendChild(loginButton);
   buttonsWrapper.appendChild(question);
   buttonsWrapper.appendChild(registerButton);

   main.appendChild(logoWrapper)
   main.appendChild(buttonsWrapper)
}


function renderLoginForm() {
   const signIn = document.createElement('h2')
   signIn.id = 'signin-title'
   signIn.textContent = 'Sign in Below'
   main.appendChild(signIn)

   const fields = [
       {tag: 'input', attributes: {}}
   ]

}
