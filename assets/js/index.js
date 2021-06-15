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
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

function handleSubmitRegister(name){

  var warningform = document.querySelector('.' + name + ' .warning-form');
  var inputElement =  document.querySelectorAll('.' + name +' .form__group--input');
  inputElement = Array.prototype.slice.call(inputElement);
  var check = true;  
  inputElement.forEach((elm, index)=>{
    var inputValue = elm.value;
    if(inputValue.trim() === ''){
      check=false;
      warningform.innerHTML = 'Vui lòng nhập đày đủ thông tin!'
    }
  })
  
  var pass = document.querySelector("input[name ='pass']");
  var repass = document.querySelector("input[name ='repass']");
  if(pass.value != repass.value && check == true){
    check=false;
    warningform.innerHTML = 'Mật khẩu không khớp!'
  }
  if(check == true){
    warningform.innerHTML = '';
    inputElement.forEach((elm, index)=>{
      elm.value = ''
    })
    alert("Đăng ký thành công!");
  }
}

function handleSubmitLogin(name){

  var warningform = document.querySelector('.' + name +' .warning-form');
  var inputElement =  document.querySelectorAll('.' + name +' .form__group--input');
  inputElement = Array.prototype.slice.call(inputElement);
  var check = true;  
  console.log(inputElement)
  inputElement.forEach((elm, index)=>{
    var inputValue = elm.value;
    if(inputValue.trim() === ''){
      check=false;
      warningform.innerHTML = 'Vui lòng nhập đày đủ thông tin!'
    }
  })
  
  if(check == true){
    warningform.innerHTML = '';
    var modal = document.querySelector(".modal-Login")
    modal.classList.add('hiddens')
  }
}

function handleCancel(){
  var modal = document.querySelector(".modal")
  modal.classList.add('hiddens')
}

searchBtn.addEventListener("click", expand);

