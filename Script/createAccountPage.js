let mail = JSON.parse(localStorage.getItem("mail"));

let user = JSON.parse(localStorage.getItem("user")) || [];

document.getElementById("mail").value = mail;

document.querySelector("form").onsubmit = function () {
    event.preventDefault();
    console.log("inside")
    let email = document.getElementById("mail").value;
    let password = document.getElementById("password").value;
    let f_name = document.getElementById("f_name").value;
    let l_name = document.getElementById("l_name").value;
    let date = document.getElementById("date").value;
    let zip = document.getElementById("zipCode").value;
    let username = document.getElementById("username").value;
    let city = document.getElementById("city").value;
    if (email === "" || password === "" || f_name === "" || l_name === "" || date === "" || zip === "" || username === "" || city === "") {
        let req = document.getElementsByClassName("req");
        console.log(req)
        for (let i = 0; i < req.length; i++) {
            req[i].style.display = "block";
        }
    } else {
        let obj = {
            email,
            password,
            f_name,
            l_name,
            date,
            zip,
            username,
            city
        }
        user.push(obj);
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "./thankYouPage.html";
    }
}