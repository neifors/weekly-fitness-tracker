const main = document.querySelector('main')

// routes available for a person not logged in
const publicRoutes = ['#','#login','#register']
// routes available for USER logged in
const privateRoutes = ['#profile','#create']


window.addEventListener('hashchange', updateContent);



function updateMain(path){
   main.innerHTML = '';
   if (path) {
      switch(path) {
         case '#login':    
            renderLoginForm(); break;
         case '#register':
            renderRegisterForm(); break;
         case '#profile':
            renderProfilePage(); break;
         case '#create':
            renderCreateHabitForm(); break;
         default:
            render404(); break;
      }
   } else {
      renderHomepage();
   }
}


function updateContent(){
   const path = window.location.hash;
   if (privateRoutes.includes(path) && !!currentUser) {
      window.location.hash = '#';
   } else if (!!privateRoutes.includes(path) && currentUser) {
      window.location.hash = '#profile';
   } else {
      updateMain(path);
   }
}


updateContent();
