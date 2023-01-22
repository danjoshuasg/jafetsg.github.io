const scriptURL = 'https://script.google.com/macros/s/AKfycbyLwpY-c6egkXb8-xYOosDHDVtq08S7jqQCdCWScuU4sNCMhD2XXEwH1GklpmnL_rMvzw/exec'
const form = document.forms["contactame"]
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "El mensaje se envió correctamente"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})