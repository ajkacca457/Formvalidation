const name=document.querySelector("#name");
const email=document.querySelector("#email");
const zip=document.querySelector("#zip");
const phone=document.querySelector("#phone");



name.addEventListener("blur",valname);
email.addEventListener("blur",valemail);
zip.addEventListener("blur",valzip );
phone.addEventListener("blur",valphone);

function valname(){
const re=/^[a-zA-z]{2,10}[0-9]$/

if(!re.test(name.value)) {
  name.classList.add("is-invalid");
  }
else {
  name.classList.remove("is-invalid");
}

}



function valemail(){

  const re=/^([a-zA-z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)\.([a-z]{3,5})/

  if(!re.test(email.value)) {
    email.classList.add("is-invalid");
  }
  else {
    email.classList.remove("is-invalid");
  }


}

function valzip(){
const re=/^[0-9]{3}(-[0-9]{3})?$/

if(!re.test(zip.value)) {
  zip.classList.add("is-invalid");
}
else {
  zip.classList.remove("is-invalid");
}

}

function valphone(){
const re=/(\+[0-9]{3})(-[0-9]{10})/

if(!re.test(phone.value)) {
  phone.classList.add("is-invalid");
}
else {
  phone.classList.remove("is-invalid");
}

}
