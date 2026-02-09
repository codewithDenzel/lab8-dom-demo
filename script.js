//include it here all the id's

const title = document.getElementById("title");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const outputDiv = document.getElementById("output");


//query selector
const description = document.querySelector(".description");
const submitButton = document.getElementById("btnclick");

//event listener
submitButton.addEventListener("click", function() {
    //visual content
    submitButton.textContent = "Clicked!";

    let name = nameInput.value;
    let age = Number(ageInput.value);

    outputDiv.innerHTML = "<p style='color:green;'> Button was clicked! </p>";

    //loose quality
    if(age === 18){
        outputDiv.innerHTML += "<p style='color:blue;'> You are 18 years old! </p>";
    }
    else{
        outputDiv.innerHTML += "<p style='color:red;'> You are not 18 years old! </p>";
    }

    //strict quality
    if(age === 18){
        outputDiv.innerHTML += "<p style='color:blue;'> You are 18 years old! (STRICT) </p>";
    }
    else{
        outputDiv.innerHTML += "<p style='color:red;'> You are not 18 years old! (STRICT) </p>";
    }

    if(name!=""){
        outputDiv.innerHTML += "<p style='color:purple;'> Hello, " + name + " and you are " + age + " years old!</p>";
    }
    else{
        outputDiv.innerHTML += "<p style='color:orange;'> Please enter your name!</p>";
    }


});