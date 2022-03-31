

getAllhabits()

function cal(){
   window.location.href='calendar.html'
}



let addExer=document.querySelector('#addhabit')
addExer.addEventListener('submit', async e =>{
   e.preventDefault();
   let habit=document.getElementById('habits').value;
   let fre=document.getElementById('fre').value;
   let note=document.getElementById('note').value;
   console.log(habit,fre,note)
   let options={
      method: 'POST',
      body: JSON.stringify({
         username: localStorage.getItem('username'),
         habitName:habit,
         frequency: fre,
         note: note
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

function getAllhabits(){
   let url='http://localhost:3000/habits/'+localStorage.getItem('username')
   fetch(url)
       .then(r => r.json())
       .then(appendHabits)
       .catch(console.warn)
};
function appendHabits(data){
   data.forEach(appendHabit);
};

function appendHabit(habitData){
   const habitsList = document.querySelector('table');
   const newRow = document.createElement('tr');
   const habitLi = formatHabitTr(habitData, newRow)
   habitsList.append(newRow);
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

function formatHabitTr(habit, tr){
   let habitInfo=document.getElementById('habitInfo')
   const idTd=document.createElement('td');
   const habitTd = document.createElement('td');
   const freTd = document.createElement('td');
   const startD =document.createElement('td')
   const endD =document.createElement('td')
   const curr=document.createElement('td')
   const delTd = document.createElement('td');
   const uptTd = document.createElement('td');

   const delBtn = document.createElement('button');
   const uptBtn = document.createElement('button');
   delBtn.setAttribute('class', 'delete')
   uptBtn.setAttribute('class', 'update')
   delBtn.textContent = 'X';
   uptBtn.textContent = '+';
   delBtn.onclick = () => deleteHabit(habit._id, tr);
   uptBtn.onclick = () => updateHabit(habit._id, tr);
   delTd.append(delBtn);
   uptTd.append(uptBtn);
   idTd.textContent=habit._id
   habitTd.textContent = habit.habitName
   freTd.textContent = habit.frequency
   startD.textContent=habit.startDate
   endD.textContent=habit.finishDate
   curr.textContent=habit.currentStreak
   
   tr.append(idTd)
   tr.append(habitTd)
   tr.append(freTd)
   tr.append(startD)
   tr.append(endD)
   tr.append(curr)
   tr.append(delTd)
   tr.append(uptTd)
   tr.addEventListener('click', async e =>{
      //habitInfo.remove()
      //habitInfo.remove(habitInfo.firstElementChild);
      //console.log(dog,habitInfo.firstElementChild)
      habitInfo.append(createCard(habit))
   })

   return tr
}

function createCard(habit){
   let h2=document.createElement('h2')
   h2.textContent=habit.habitName
   let form=document.createElement('form')
   let textIn=document.createElement('input')
   textIn.value=habit.log
   const newDiv = document.createElement("div");
   const newLabel=document.createElement("label")
   newDiv.appendChild(h2);
   newDiv.appendChild(newLabel)
   newDiv.appendChild(textIn)

   newLabel.textContent=`Frequency: ${habit.frequency}`
   form.appendChild(newDiv)
   //const newContent = document.createTextNode("Hi there and greetings!");
   
   return form
}