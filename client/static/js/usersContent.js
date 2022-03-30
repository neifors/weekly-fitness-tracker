// renderCreateHabitForm()
// renderHabit(h)

async function renderProfilePage() {
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

   const habits = await getUserHabits(currentUser);
   habits.forEach(h => renderHabitList);

   main.appendChild(topDiv);
   main.appendChild(habitsWrapper);
}


function renderHabitsList(h) {
      const card = document.createElement('div');
      card.className = "habit-card";
      card.onclick = renderHabit(h);

      const title = document.createElement('p')
      title.className = "habit-card-title"
      title.textContent = h.habitName
      
      const freqAndUnit = document.createElement('p')
      freqAndUnit.className = "freq-and-unit"
      freqAndUnit.textContent = `${h.frequency} ${h.units}`
}


// function renderHabit(h){
//    main.innerHTML = '';

// }


async function getUserHabits(username){
   try {
       const response = await fetch(`http://localhost:3000/habits/${username}`);
       const data = await response.json()
       return data;
   } catch (err) {
       console.warn(err);
   }
}



// PAUL'S FUNCTIONS

// document.getElementById('show').onclick = function() {
//    const items = ["Running", "Abs", "Squats", "Push ups"];
//    let select = document.createElement("select");
//    select.name = "habit";
//    select.id = "habit"
//    for (const val of items)
//    {
//        let option = document.createElement("option");
//        option.value = val;
//        option.text = val.charAt(0).toUpperCase() + val.slice(1);
//        select.appendChild(option);
//    }
//    let label = document.createElement("label");
//    label.innerHTML = "Select a habit from the list: "
//    label.htmlFor = "habit";
//    document.getElementById("list").appendChild(label).appendChild(select);
//   }
// document.getElementById('show2').onclick = function() {
//  const items = ["repetitions", "kilometers", "miles", "hours", "minutes", "days"];
//  let select = document.createElement("select");
//  select.name = "unit";
//  select.id = "unit"
//  for (const val of items)
//  {
//      let option = document.createElement("option");
//      option.value = val;
//      option.text = val.charAt(0).toUpperCase() + val.slice(1);
//      select.appendChild(option);
//  }
//  let label = document.createElement("label");
//  label.innerHTML = "Select a habit from the list: "
//  label.htmlFor = "unit";
//  document.getElementById("list2").appendChild(label).appendChild(select);
// }
