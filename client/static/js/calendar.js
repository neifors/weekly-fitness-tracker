

const toggle =(clickedId)=>{
    let n=document.getElementById("days2")
    let val=Object.values(n.childNodes)
    /*val.forEach(f=>{
      //console.log(f,f.childNodes,f.childNodes.classList)
      let inner=Object.values(f.childNodes)
      inner.forEach(g=>{
        console.log(g,g.classList)
        g.classList.toggle('toggle')
      })

    })*/
    let t=document.getElementById(clickedId)
    //let prev=t.parentElement.previousSibling

    
    console.log(t,t.classList,t.parentElement,t.parentElement.previousSibling)
    t.classList.toggle('toggle')
    //prev.innerChild.classList.toggle('toggle')
}
  let cell=document.getElementById("days2")
  let D={"Sun":0, "Mon":1, "Tue":2, "Wed":3,"Thu":4,"Fri":5,"Sat":6}
  for (let i in D){
    cell.innerHTML+=`<li class="weekdays">${i}</li>`
    
  }

  
  var dt= new Date()
  let monthName=dt.toDateString()
  let m=document.getElementById("monthName")
  let y=document.getElementById("yearName")
  m.innerHTML=monthName.slice(4,7)
  y.innerHTML=monthName.slice(10,15)
  var month= dt.getMonth()+1;
  var year=dt.getFullYear()
  var daysInMonths=new Date(year,month,0).getDate()
  var shiftDays= new Date(year,month-1,1)
  let shift=shiftDays.toDateString().slice(0,3)
  console.log(dt,dt.toDateString(),monthName.slice(4,7),shiftDays,shift)
  for (let i=0;i<D[shift];i++){
    cell.innerHTML+=`<li></li>`
  }
  for (let i=1;i<=daysInMonths;i++){
    i==dt.getDate()?cell.innerHTML+=`<li><a class="circle active" id=${i} onclick="toggle(this.id)">${i}</a></li>`:cell.innerHTML+=`<li><a class="circle" id=${i} onclick="toggle(this.id)">${i}</a></li>`
  }

  function calendarChange(n){

    cell.innerHTML=""
    month=month+n;
    var newDate= new Date(year,month,0).toDateString()
    var days=new Date(year,month,0).getDate()
    var shiftDays= new Date(year,month-1,1)
    let shift=shiftDays.toDateString().slice(0,3)
    console.log("newdate:"+newDate,"month:"+month,"year:"+ year)
    y.innerHTML=newDate.slice(10,15)
    m.innerHTML=newDate.slice(4,7)
    for (let i in D){
    cell.innerHTML+=`<li class="weekdays">${i}</li>`
    
  }
    for (let i=0;i<D[shift];i++){
      cell.innerHTML+=`<li></li>`
    }
    for (let i=1;i<=days;i++){
      cell.innerHTML+=`<li><a class="circle" id=${i} onclick="toggle(this.id)">${i}</a></li>`
    }
  }
  
 