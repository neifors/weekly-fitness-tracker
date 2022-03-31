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
   logoutButton.textContent = 'Logout';
   logoutButton.onclick = logout;

   topDiv.appendChild(addButton);
   topDiv.appendChild(logoutButton);
   
   const habitsWrapper = document.createElement('div');
   habitsWrapper.id = "habits-wrapper";

   const habits = await getUserHabits(currentUser());
   console.log(habits)

   if (habits) { habits.forEach(h => {renderHabitsList(h,habitsWrapper)}) }
   
   main.appendChild(topDiv);
   main.appendChild(habitsWrapper);
}


function renderHabitsList(h, habitsWrapper) {
      const card = document.createElement('div');
      card.className = "habit-card";
      // card.onclick = renderHabit(h);

      const title = document.createElement('p')
      title.className = "habit-card-title"
      title.textContent = h.habitName
      
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
      notes.textContent = h.notes

      
      card.appendChild(title)
      card.appendChild(freqAndUnit)
      card.appendChild(notes)
      card.appendChild(currentSt)
      card.appendChild(update)
      habitsWrapper.appendChild(card)
}

async function updateHabit(h){
   console.log(h)


   const options = {
      method: 'PATCH',
      body: JSON.stringify({
         today: new Date().getTime() 
      }),
      headers: {
         'Content-Type': 'application/json'
      }
   }
   console.log(options)

   const result = await fetch(`http://localhost:3000/habits/${h._id}`, options)
   const resultData = await result.json()
   console.log(resultData)
   // profileRedirect()
}

// function renderHabit(h){
//    main.innerHTML = '';

//    const backButton = document.createElement('button')
//    backButton.id ="bckbttn"
//    backButton.textContent = "Back"
//    backButton.onclick = profileRedirect;

//    const info = document.createElement('p')
//    info.textContent = h;


//    main.appendChild(backButton)
//    main.appendChild(info)

// }


async function getUserHabits(username){
   try {
       const response = await fetch(`http://localhost:3000/habits/${username}`);
       const data = await response.json()
       console.log(data)
       return data;
   } catch (err) {
       console.warn(err);
   }
}


function renderCreateHabitForm(){

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

   const items = ["running", "abs", "squats", "push ups"];
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
   quantity.placeholder = "How many times/km/miles...?"
   quantity.id = "quantity"

   const quantityLabel = document.createElement("label")
   quantityLabel.htmlFor = "quantity"
   quantityLabel.textContent = "Quantity: "

   newHabitForm.appendChild(quantityLabel)
   newHabitForm.appendChild(quantity)
      
   // const unitsSelect = document.createElement('select')
   // unitsSelect.id = "units-select"
   // unitsSelect.name = "units"

   // const units = ["times", "kilometers", "miles", "hours", "minutes", "days"];
   // for (const val of units) {
   //    let opt = document.createElement("option");
   //    opt.value = val;
   //    opt.text = val.charAt(0).toUpperCase() + val.slice(1);
   //    unitsSelect.appendChild(opt);
   // }
   // let unitsLabel = document.createElement("label");
   // unitsLabel.htmlFor = "units-select";
   // unitsLabel.textContent = "Select units: "
      
   // newHabitForm.appendChild(unitsLabel)
   // newHabitForm.appendChild(unitsSelect)

   const notes = document.createElement("textarea")
   notes.id ="notes";
   notes.name = "notes";

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

   main.appendChild(newHabitForm)

}

async function requestPostHabit(e){
   e.preventDefault();
   try{
      console.log("It's inside requestPostHabit function")
      const habit = ""

      const options = {
         method: 'POST',
         body: JSON.stringify({
            username: currentUser(),
            habitName: e.target["habit-selected"].value,
            frequency: e.target["quantity"].value,
            notes: e.target["notes"].value
         }),
         headers: {
            'Content-Type': 'application/json'
         }
      }
      console.log(options.body)

      const newHabit = await fetch('http://localhost:3000/habits', options);
      const data = await newHabit.json()
      console.log(data)
      if (data.err){ throw new Error(`${data.err}`)}
      window.location.hash = "#profile"
      return data.habit;
   } catch(err) {
      console.warn(err)
   }
}
