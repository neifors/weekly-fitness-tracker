async function renderProfilePage() {

   const helloUser = document.createElement('h1');
   helloUser.id = 'hello-user';
   helloUser.textContent = `Hello ${currentUser()}`
   main.append(helloUser)

   const topDiv = document.createElement('div');
   topDiv.id = "profile-top-div";

   const addButton = document.createElement('button');
   addButton.id = "add-habit-button";
   addButton.textContent = "+";
   addButton.onclick = habitFormRedirect;

   const logoutButton = document.createElement('button');
   logoutButton.id = "logout-button"
   logoutButton.textContent = 'Logout';
   logoutButton.onclick = logout;

   topDiv.appendChild(addButton);
   topDiv.appendChild(logoutButton);
   
   const habitsWrapper = document.createElement('div');
   habitsWrapper.id = "habits-wrapper";

   const habits = await getUserHabits(currentUser());
   if (habits) { habits.forEach(h => {renderHabitsList(h,habitsWrapper)}) }
   
   main.appendChild(topDiv);
   main.appendChild(habitsWrapper);
}

function randomColor() {
   const colorList = ["rgb(238, 195, 232)","rgb(187, 240, 187)","rgb(235, 243, 164)","rgb(165, 109, 218)","rgb(156, 250, 242)","rgb(231, 129, 129)","rgb(129, 144, 231)","rgb(153, 231, 129)"]
   return colorList[Math.floor(Math.random() * 8)]
}

function renderHabitsList(h, habitsWrapper) {
      const card = document.createElement('div');
      card.className = "habit-card";
      const color = randomColor()
      card.style = `background-color: ${color};`

      const closeBttn = document.createElement('button')
      closeBttn.className = "close-button"
      closeBttn.textContent = "X"

      closeBttn.addEventListener('click',async e => destroy(h))

      const title = document.createElement('h3')
      title.className = "habit-card-title"
      title.textContent = h.habitName.charAt(0).toUpperCase() + h.habitName.slice(1)
      
      const freqAndUnit = document.createElement('p')
      freqAndUnit.className = "habit-frequency"
      freqAndUnit.textContent = `${h.frequency} days/week`

      const currentSt = document.createElement('p')
      currentSt.className = 'habit-currentStreak'
      currentSt.textContent = `Current Streak: ${h.currentStreak}`
  
      const update = document.createElement('button');
      update.className = "habit-update-button"
      update.textContent = 'Update'

      update.addEventListener('click',async e => updateHabit(h))

      const notes = document.createElement('p')
      notes.className = 'habit-notes'
      notes.textContent = `Notes: ${h.notes}`
      
      card.appendChild(closeBttn)
      card.appendChild(title)
      card.appendChild(freqAndUnit)
      card.appendChild(notes)
      card.appendChild(currentSt)

      let now= new Date().getTime()
      let today= new Date(now).toUTCString().slice(0,16)

      if (h.complete === true && now <= h.finishDate){
         const completeMsg = document.createElement('h3')
         completeMsg.className = "complete-msg"
         completeMsg.style = "color: green"
         completeMsg.textContent = "COMPLETE"
         card.appendChild(completeMsg)
      } else if (h.lastUpdate == today && now <= h.finishDate){
         update.disabled = true;
         const updatedMsg = document.createElement('h3')
         updatedMsg.className = "complete-msg"
         updatedMsg.style = "color: purple"
         updatedMsg.textContent = "Updated today. Try again tomorrow"
         card.appendChild(updatedMsg)
         card.appendChild(update)
      } else if (h.complete === false && now > h.finishDate){
         const completeMsg = document.createElement('h3')
         completeMsg.className = "complete-msg"
         completeMsg.style = "color: red"
         completeMsg.textContent = "INCOMPLETE"
         card.appendChild(completeMsg)
         card.style = "background-color: grey;"
         const disableMsg = document.createElement('p')
         disableMsg.className = "complete-msg"
         disableMsg.style = "color: yellow"
         disableMsg.textContent = "Out of week"
         card.appendChild(disableMsg)
      } else {
         card.appendChild(update)
      }

      habitsWrapper.appendChild(card)
}

async function updateHabit(h){
   const options = {
      method: 'PATCH',
      body: JSON.stringify({
         today: new Date().getTime() 
      }),
      headers: {
         'Content-Type': 'application/json'
      }
   }
   const result = await fetch(`http://localhost:3000/habits/${h._id}`, options)
   const resultData = await result.json()
   console.log(resultData)
   window.location.reload()
}

async function destroy(h) {
   try {
      const options = {
         method: 'DELETE',
         body: JSON.stringify({
            id: h._id 
         }),
         headers: {
            'Content-Type': 'application/json'
         }
      }
      await fetch(`http://localhost:3000/habits/${h._id}`, options);
      window.location.reload()

  } catch (err) {
      console.warn(err);
  }
}

async function getUserHabits(username){
   try {
       const response = await fetch(`http://localhost:3000/habits/${username}`);
       const data = await response.json()
       return data;
   } catch (err) {
       console.warn(err);
   }
}


function renderCreateHabitForm(){

   const formWrapper = document.createElement('div')
   formWrapper.id = "create-habit-form-wrapper"

   const backButton = document.createElement('button')
   backButton.id ="bckbttn"
   backButton.textContent = "Back"
   backButton.onclick = profileRedirect;

   main.appendChild(backButton)

   const newHabitForm = document.createElement('form')
   newHabitForm.id = "new-habit-form";

   const habitTypeSelect = document.createElement('select')
   habitTypeSelect.id = "habit-type-select"
   habitTypeSelect.name = "habit-selected"

   const items = ["running", "walking", "abs", "squats","jump squats", "push-ups", "knee Push-ups", "supermans", "low plank", "hight plank", "russian twist", "knee tuck crunches", "backward Lunges", "beetle", "crunches", "bicycle crunches", "bridge", "crab bridge", "inchworms"];
   const opt = document.createElement('option');
   opt.value = "";
   opt.selected = true;
   opt.disabled = true;
   opt.hidden = true;
   opt.text = "--Predefined exercises--"
   habitTypeSelect.appendChild(opt)

   for (const val of items) {
      let option = document.createElement("option");
      option.value = val;
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      habitTypeSelect.appendChild(option);
   }
   let label = document.createElement("label");
   label.htmlFor = "habit-type-select";
   label.textContent = "Select a habit from the list: "

   newHabitForm.appendChild(label)
   newHabitForm.appendChild(habitTypeSelect)
   
   const habitType = document.createElement('input')
   habitType.type = "text"
   habitType.name = "habit-created"
   habitType.placeholder = "Create your own habit"
   habitType.id = "habit-created"

   const habitLabel = document.createElement("label")
   habitLabel.htmlFor = "habit-created"
   habitLabel.textContent = "New habit: "
   
   newHabitForm.appendChild(habitLabel)
   newHabitForm.appendChild(habitType)

   const quantity = document.createElement('input')
   quantity.type = "number"
   quantity.name = "quantity"
   quantity.placeholder = "How many days/week?"
   quantity.id = "quantity"
   quantity.min = 1;
   quantity.max = 7;
   quantity.required = true

   const quantityLabel = document.createElement("label")
   quantityLabel.htmlFor = "quantity"
   quantityLabel.textContent = "Quantity: "

   newHabitForm.appendChild(quantityLabel)
   newHabitForm.appendChild(quantity)

   const notes = document.createElement("textarea")
   notes.id ="notes";
   notes.name = "notes";
   notes.maxlength = "100";

   const notesLabel = document.createElement("label")
   notesLabel.htmlFor = "notes"
   notesLabel.textContent = "Notes: "

   newHabitForm.appendChild(notesLabel)
   newHabitForm.appendChild(notes)

   const submitHabit = document.createElement("input");
   submitHabit.type = "submit"
   submitHabit.id = "submit-habit"
   submitHabit.textContent = "Create Habit"

   newHabitForm.appendChild(submitHabit);

   newHabitForm.addEventListener('submit', requestPostHabit)

   formWrapper.appendChild(newHabitForm)
   main.appendChild(formWrapper)

}

async function requestPostHabit(e){
   e.preventDefault();
   try{

      let habitValue = e.target["habit-created"].value ? e.target["habit-created"].value : e.target["habit-selected"].value

      const options = {
         method: 'POST',
         body: JSON.stringify({
            username: currentUser(),
            habitName: habitValue,
            frequency: e.target["quantity"].value,
            notes: e.target["notes"].value
         }),
         headers: {
            'Content-Type': 'application/json'
         }
      }

      const newHabit = await fetch('http://localhost:3000/habits', options);
      const data = await newHabit.json()
      if (data.err){ throw new Error(`${data.err}`)}
      window.location.hash = "#profile"
      return data.habit;

   } catch(err) {
      console.warn(err)
   }
}
