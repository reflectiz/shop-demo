function myFunction() {
   fetch('https://form.123formbuilder.com/',{ mode: 'no-cors'})
    .then(response => console.log(response))
    .then(res=>{console.log(res); window.location.href = 'confirmation.html'})
}
