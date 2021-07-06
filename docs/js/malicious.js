function myFunction() {
   fetch('https://hsbc.com.hk.1.1.7b52bd64.roksit.net/',{ mode: 'no-cors'})
    .then(response => console.log(response))
    .then(res=>{console.log(res); window.location.href = 'confirmation.html'})
}
