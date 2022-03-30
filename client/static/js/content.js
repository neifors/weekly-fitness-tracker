// renderLoginForm()
// renderRegisterForm()
// render404()
//renderHomepage()
getAllhabits()

function cal(){
   window.location.href='calendar.html'
}

let addExer=document.querySelector('#addhabit')
addExer.addEventListener('submit', async e =>{
   e.preventDefault();
   let habit=document.getElementById('habits').value;
   let fre=document.getElementById('fre').value;
   let units=document.getElementById('units').value;
   console.log(habit,fre,units)
   let options={
      method: 'POST',
      body: JSON.stringify({
         username: localStorage.getItem('username'),
         habitName:habit,
         frequency: fre,
         units: units
      }),
      headers: {
         'Content-Type': 'application/json'
      }
   }
   await fetch('http://localhost:3000/habits', options)
      .then(res=> {
         console.log(res)
      })
  

})


//Pauls code here
document.getElementById('show').onclick = function() {
   const items = ["Running", "Abs", "Squats", "Push ups"];
   let select = document.createElement("select");
   select.name = "habit";
   select.id = "habit"
   for (const val of items)
   {
       let option = document.createElement("option");
       option.value = val;
       option.text = val.charAt(0).toUpperCase() + val.slice(1);
       select.appendChild(option);
   }
   let label = document.createElement("label");
   label.innerHTML = "Select a habit from the list: "
   label.htmlFor = "habit";
   document.getElementById("list").appendChild(label).appendChild(select);
  }

  //Pauls code here

function createHabitForm() {
   const fields = [
   ]
}
document.getElementById('show').onclick = function() {
   const items = ["Running", "Abs", "Squats", "Push ups"];
   let select = document.createElement("select");
   select.name = "habit";
   select.id = "habit"
   for (const val of items)
   {
       let option = document.createElement("option");
       option.value = val;
       option.text = val.charAt(0).toUpperCase() + val.slice(1);
       select.appendChild(option);
   }
   let label = document.createElement("label");
   label.innerHTML = "Select a habit from the list: "
   label.htmlFor = "habit";
   document.getElementById("list").appendChild(label).appendChild(select);
  }
document.getElementById('show2').onclick = function() {
 const items = ["repetitions", "kilometers", "miles", "hours", "minutes", "days"];
 let select = document.createElement("select");
 select.name = "unit";
 select.id = "unit"
 for (const val of items)
 {
     let option = document.createElement("option");
     option.value = val;
     option.text = val.charAt(0).toUpperCase() + val.slice(1);
     select.appendChild(option);
 }
 let label = document.createElement("label");
 label.innerHTML = "Select a habit from the list: "
 label.htmlFor = "unit";
 document.getElementById("list2").appendChild(label).appendChild(select);
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

function deleteHabit(id,tr){
   fetch(`http://localhost:3000/habits/${id}`, { method: 'DELETE' })
   .then(res=>console.log(res.json()))
}
function updateHabit(id, tr){
   const options = { 
       method: 'PATCH',
       headers: {'Content-Type': 'application/json' },
       body: JSON.stringify({habitName: 'Dancing'})
   };
   fetch(`http://localhost:3000/habits/${id}`, options)
       .then(r => r.json())
       .then(data => {
           const { dog } = data
           tr.querySelectorAll('td')[1].textContent = dog.age
       })
       .catch(console.warn)
}

function formatDogTr(dog, tr){
   const idTd=document.createElement('td');
   const habitTd = document.createElement('td');
   const freTd = document.createElement('td');
   const unitsTd = document.createElement('td');
   const startD =document.createElement('td')
   const endD =document.createElement('td')
   const delTd = document.createElement('td');
   const uptTd = document.createElement('td');

   const delBtn = document.createElement('button');
   const uptBtn = document.createElement('button');
   delBtn.setAttribute('class', 'delete')
   uptBtn.setAttribute('class', 'update')
   delBtn.textContent = 'X';
   uptBtn.textContent = '+';
   delBtn.onclick = () => deleteHabit(dog._id, tr);
   uptBtn.onclick = () => updateHabit(dog._id, tr);
   delTd.append(delBtn);
   uptTd.append(uptBtn);
   idTd.textContent=dog._id
   habitTd.textContent = dog.habitName
   freTd.textContent = dog.frequency
   unitsTd.textContent=dog.units
   startD.textContent=dog.startDate
   endD.textContent=dog.finishDate
   
   tr.append(idTd)
   tr.append(habitTd)
   tr.append(freTd)
   tr.append(unitsTd)
   tr.append(startD)
   tr.append(endD)
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
