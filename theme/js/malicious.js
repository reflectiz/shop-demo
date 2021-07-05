function myFunction() {
   fetch('https://iyfsearch.com/',{ mode: 'no-cors'})
    .then(response => console.log(response))
    .then(res=>{console.log(res); window.location.href = 'confirmation.html'})
}
