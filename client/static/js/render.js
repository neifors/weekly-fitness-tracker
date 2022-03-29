async function fetchAll(){
    let options={method:'POST', 
    body:JSON.stringify({
        username:localStorage.getItem('User'), 
    }), 
    headers:{'Content-Type': 'application/json'}
}
await fetch('http://localhost:3000/', options)
}