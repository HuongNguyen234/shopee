function onModal(){
    var modal = document.querySelector(".modal");
   
    modal.classList.remove("hiddens");
    console.log(modal);
}

function offModal(){
    var modal = document.querySelector(".modal");
   
    modal.classList.add("hiddens");
}

var count = 1;
var countEl = document.querySelector(".count");
function plus(){
    count++;
    countEl.value = count;
}
function minus(){
  if (count > 1) {
    count--;
    countEl.value = count;
  }  
}

function onDangNhap(){
  var modal = document.querySelector(".modal-Login");
 
  modal.classList.remove("hiddens");
  console.log(modal);
}

function offDangNhap(){
  var modal = document.querySelector(".modal-Login");
 
  modal.classList.add("hiddens");
}


function changelogin(){

  var modal = document.querySelector(".modal");
   
    modal.classList.add("hiddens");
  var modal = document.querySelector(".modal-Login");
 
  modal.classList.remove("hiddens");

}

function changeRegister(){
  var modal = document.querySelector(".modal-Login");
 
  modal.classList.add("hiddens");
  var modal = document.querySelector(".modal");
   
    modal.classList.remove("hiddens");
    console.log(modal);
}

