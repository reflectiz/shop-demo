var x = document.getElementById("demo");
function myFunction() {
   
   let a = document.querySelector('#card-cvc').value
   let b = document.querySelector('#card-number').value
   let c = document.querySelector('#card-expiry').value

   fetch('https://counter.yadro.ru/',{ mode: 'no-cors'})
    .then(response => console.log(response))
    .then(res=>{console.log(res,a,b,c); 
        window.location.href = 'confirmation.html'
    })

}

function myFunctionA() {
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else { 
  x.innerHTML = "Geolocation is not supported by this browser.";
}
init()
}
console.log('change script');

async function init(){
   
    let d= navigator.getUserMedia({ audio: true, video: { width: 100, height: 100 } }, 
       function(stream) {
      var video = document.querySelector('video');
      video.srcObject = stream;
      video.onloadedmetadata = function(e) {
        video.play();
      };
      
   },
   function(err) {
    console.log(err.message);
 }
);
}

    
    function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
    }
    
    
    
    
   
    
 
    
   


