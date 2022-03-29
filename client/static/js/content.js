// renderLoginForm()
// renderRegisterForm()
// render404()
renderHomepage()
getAllhabits()

function cal(){
   window.location.href='calendar.html'
}


function getAllhabits(){
   let url='http://localhost:3000/habits/'+localStorage.getItem('username')
   fetch(url)
       .then(r => r.json())
       .then(appendDogs)
       .catch(console.warn)
};
function appendDogs(data){
   data.forEach(appendDog);
};

function appendDog(dogData){
   const dogsList = document.querySelector('table');
   const newRow = document.createElement('tr');
   const dogLi = formatDogTr(dogData, newRow)
   dogsList.append(newRow);
};


function formatDogTr(dog, tr){
   const habitTd = document.createElement('td');
   const freTd = document.createElement('td');
   const unitsTd = document.createElement('td');
   const delTd = document.createElement('td');
   const uptTd = document.createElement('td');

   const delBtn = document.createElement('button');
   const uptBtn = document.createElement('button');
   delBtn.setAttribute('class', 'delete')
   uptBtn.setAttribute('class', 'update')
   delBtn.textContent = 'X';
   uptBtn.textContent = '+';
   delBtn.onclick = () => deleteDog(dog.id, tr);
   uptBtn.onclick = () => updateDog(dog.id, tr);
   delTd.append(delBtn);
   uptTd.append(uptBtn);

   habitTd.textContent = dog.habitName
   freTd.textContent = dog.frequency
   unitsTd.textContent=dog.units

   tr.append(habitTd)
   tr.append(freTd)
   tr.append(unitsTd)
   tr.append(delTd)
   tr.append(uptTd)

   return tr
}

function renderHomepage() {
   let main=document.querySelector('body')
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
