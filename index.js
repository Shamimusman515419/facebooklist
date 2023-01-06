


var iconfabars = document.querySelector(".fa-bars");
var servicessectionr = document.querySelector(".services-section");

iconfabars.addEventListener("click", function () {
  servicessectionr.classList.toggle("servicessectionr")
});


$(document).ready(function () {
  $(".seemore").click(function () {
    $(".sliderbarser").slideToggle("slow");
    $('.slidericon').toggleClass("roted");
  });
});


var videober = document.querySelector(".fa-video")

var homemain = document.querySelector(".homemain");
var fahousebar = document.querySelector(".fa-house");
var videposection = document.querySelector(".videposection");

videober.addEventListener("click", () => {

  videposection.style.display = "block";
  homemain.style.display = "none";
  videober.classList.add("iconaction");
  fahousebar.classList.add("homeiconcolor");

});
fahousebar.addEventListener("click", () => {
  videposection.style.display = "none";
  homemain.style.display = "block";
  videober.classList.remove("iconaction");

})




var headbaer = document.querySelector(".headbaer");
var fafacebookmessenger = document.querySelector(".fa-facebook-messenger");
fafacebookmessenger.addEventListener("click", function () {
  headbaer.classList.toggle("headbaerer");

  fafacebookmessenger.style.color = "blue";
});





var massengercection = document.querySelector(".massengercection");
var divicon = document.querySelector('.divicon').children;
var chartlist = document.querySelector(".chartlist").children;

var massengercectionmain = document.querySelector('.massengercection')
var messsage = document.getElementById('messsage')
// for(let i= 0; i<=chartlist.length; i++){
//   chartlist[i].addEventListener("click",()=>{
//         console.log('working',chartlist[i])
//         massengercection.classList.toggle("massengercectionr")
//        });

// }

for (let index = 0; index < chartlist.length; index++) {
  chartlist[index].addEventListener('click', function () {
    massengercection.classList.toggle("massengercectionr")
    // messsage.classList.remove('massengercectionma')
    massengercectionmain.classList.remove('massengercectionm')
  })
}

divicon[2].addEventListener('click', function () {
  // var div=document.createElement('div')
  massengercectionmain.classList.add('massengercectionm')
  // div.appendChild(messsage)

})




var inputterxt = document.querySelector("#inputterxt")
var massengertype = document.querySelector(".massengertype");
var faarrowright = document.querySelector(".fa-arrow-right");

//  inputterxt.onkeyup=inputterxt.onkeypress=function(){
//     massengertype.innerHTML=this.value;
//  }
faarrowright.addEventListener("click", function () {
  let inputvalu = inputterxt.value;
  massengertype.innerHTML = inputvalu;

})







