let form = document.querySelector("form");
form.addEventListener("submit", Submit);
function Submit() {
  event.preventDefault();
  let name = form.name.value;
  let email = form.email.value;
  let captcha=form.captcha_checkbox.value;
  console.log(captcha)
 // console.log(name, email);
  //This field is required.
  //error if name or email invalid
  if (name == "" && email == "" && captcha=="off") {
    document.getElementById("war_name").innerText = "This field is required.";
    document.getElementById("war_email").innerText =
      "This field is required.";
    document.getElementById("war_captcha").innerText="This field is required.";
      document.getElementById("name").style.border="1px solid rgb(189, 68, 68)";
      document.getElementById("email").style.border="1px solid rgb(189, 68, 68)";
  }
  
  
  else if(name==""){
    document.getElementById("name").style.border="1px solid rgb(189, 68, 68)";
    document.getElementById("war_name").innerText = "This field is required.";

    
    document.getElementById("email").style.border="1px solid #e0e0e0";
    document.getElementById("war_email").innerText ="";
    document.getElementById("war_captcha").innerText="This field is required.";
  }



  else if(email==""){
    // for chanege color frome name input tag
    document.getElementById("name").style.border="1px solid #e0e0e0";
    document.getElementById("war_name").innerText = "";



    document.getElementById("email").style.border="1px solid rgb(189, 68, 68)";
    document.getElementById("war_email").innerText =
      "This field is required.";
  }
  else if(captcha=="off"){
    document.getElementById("name").style.border="1px solid #e0e0e0";
    document.getElementById("war_name").innerText = "";

    document.getElementById("war_email").innerText =
    "";
    document.getElementById("email").style.border="1px solid #e0e0e0";
    document.getElementById("war_captcha").innerText="This field is required.";

  }


  else {
    
    document.getElementById("email").style.border="1px solid #e0e0e0";
    document.getElementById("name").style.border="1px solid #e0e0e0";
    document.getElementById("war_captcha").innerText="";

    document.getElementById("war_name").innerText =
      "";
      document.getElementById("war_email").innerText =
      "";




   document.getElementById("submit").innerText="Sending..."
    setTimeout(greet,1500)
  }
}

function greet(){
  document.getElementById("form").innerText = "";
  let tag = document.createElement("p");
  tag.innerText =
    "Thanks for contacting us! We will be in touch with you shortly.";
  document.getElementById("form").append(tag);
}
function off(){
  document.getElementById("captcha_checkbox").value="on"
}
