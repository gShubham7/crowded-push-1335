let form=document.querySelector("#form1")

form.addEventListener("submit",blak)

function blak(){
    event.preventDefault();
    let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
    if(email=="" && password==""){
        document.getElementById("blakEmail").innerText="*The Email Field is Required";
        document.getElementById("blakPassword").innerText="*The Password Field is Required"
        
        
    }
    else if(email=="" && password!=""){
        document.getElementById("blakEmail").innerText="*The Email Field is Required";
    }
    else if(email!="" && password==""){
        document.getElementById("blakPassword").innerText="*The Password Field is Required"
    }
    
    else{
        compare()
    }
}
let form2=document.querySelector("#form2")

form2.addEventListener("submit",blako)

function blako(){
event.preventDefault()
let emailId=document.getElementById("emailId").value;
if(emailId==""){
    document.getElementById("blakEmailId").innerText="*The Email Field is Required";
}
else{
    if(emailId.includes("@")){
        getData()
        window.location.href="createAccountPage.html"
    }
    else{
        window.location.href="emailnotfound.html"
    }
}
}
// form2.addEventListener("submit",getData)

function getData(){
    let emailId=document.querySelector("#emailId").value;
    localStorage.setItem("mail",JSON.stringify(emailId))
}

function compare(){
    let user=JSON.parse(localStorage.getItem("user")) || [];
    event.preventDefault();
    let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
    for(let i=0;i<user.length;i++){
        if(email==user[i].email && password==user[i].password){
            alert("You Have Been Successfully Sign In")
            window.location.href="index.html"
        }
    }
}
document.querySelector("#crt~h3>span").addEventListener("click",function(){
    window.location.href="createAccountPage.html"
})
document.querySelector("#bottom").addEventListener("click",function(){
    window.location.href="customersupport.html"
})
document.querySelector("#forgot").addEventListener("click",function(){
    window.location.href="thankYouPage.html"
})
