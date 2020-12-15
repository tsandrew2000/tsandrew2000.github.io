window.addEventListener('load', async e =>{
  if('serviceWorker' in navigator){
      try{
          navigator.serviceWorker.register('serveceWorker.js');
          console.log("S W registered");
      }
      catch(error){
          console.log("S W not registered");
      }
  }
});

let deferredPrompt;
let btnAdd;
//  = document.querySelector(".button");

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  btnAdd.style.display = "block";
});

btnAdd.addEventListener('click', (e) => {

  if (deferredPrompt) {
      deferredPrompt.prompt();

  deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
      } else {
          console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
  });
}
});


window.addEventListener('appinstalled', (evt) => {

  console.log('INSTALL: Success');
});