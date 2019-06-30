// jshint esversion: 6
const lname = document.getElementById("lname"),
    fname = document.getElementById("fname"),
    address = document.getElementById("address"),
    email = document.getElementById("email"),
    occupation = document.getElementById("occupation"), 
    amount = document.getElementById("amount"),
    request = document.querySelector('input[type="submit"]');


const getUser = (data)=> data.value;

//get user data
function userInfo() {
    return {
        lastName: getUser(lname),
        firstName: getUser(fname),
        address: getUser(address),
        email: getUser(email),
        occupation: getUser(occupation),
        amount: getUser(amount),
    };
}




request.addEventListener("click", submitUser);

function submitUser(e) {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/users", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function() {
        if (this.status === 201) {
            const getOneUser = this.responseText;
            console.log(userInfo());
            
        }
    };
    
    xhr.send(JSON.stringify(userInfo()));
}
