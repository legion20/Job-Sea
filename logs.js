function register() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let cpassword = document.querySelector("#cpassword").value;
    let name = document.querySelector('#name').value;

    if (password === cpassword) {
        localStorage.setItem(email, password);



        alert("Successfully registered. Please sign to start learning.");
        location.replace("https://legion20.github.io/Job-Sea/login.html");
    } else {
        alert("Password does not match");
    }
}


function verifySignIn() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;



    let storedPassword = localStorage.getItem(email);



    if (storedPassword !== null && storedPassword === password) {
        location.replace("https://legion20.github.io/Job-Sea/jobs.html");
    } else {
        alert("Incorrect credentials or User does not exist");
    }
}