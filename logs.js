function register() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let cpassword = document.querySelector("#cpassword").value;

    if (password === cpassword) {
        localStorage.setItem(email, password);



        alert("Successfully registered. Please sign to grow yourself.");
        document.getElementById("register-form").action = "login.html";
    } else {
        alert("Password does not match");
    }
}


function verifySignIn() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;



    let storedPassword = localStorage.getItem(email);



    if (storedPassword !== null && storedPassword === password) {
        console.log("Vishesh");
        document.getElementById("login-form").action = "jobs.html";
    } else {
        alert("Incorrect credentials or User does not exist");
    }
}