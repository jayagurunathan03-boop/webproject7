const texts = [
    "Cyber Security Student",
    "Ethical Hacking Enthusiast",
    "Network Security Learner",
    "Secure Web Developer",
    "Future Security Analyst"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing-text")
    .textContent = letter;

    if(letter.length === currentText.length){

        setTimeout(() => {

            index = 0;
            count++;

        },1500);

    }

    setTimeout(type,120);

})();

/* Dark / Light Mode */

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeToggle.textContent = "☀️";
    }else{
        themeToggle.textContent = "🌙";
    }

});

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment =
        target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText =
            target;
        }
    };

    updateCounter();

});
window.addEventListener("load", () => {

    document.querySelector(".java")
    .style.width = "85%";

    document.querySelector(".python")
    .style.width = "80%";

    document.querySelector(".html")
    .style.width = "90%";

    document.querySelector(".css")
    .style.width = "85%";

    document.querySelector(".js")
    .style.width = "75%";

    document.querySelector(".network")
    .style.width = "80%";

    document.querySelector(".hacking")
    .style.width = "75%";

});
function showProject(project){

    const modal =
    document.getElementById("projectModal");

    const title =
    document.getElementById("modalTitle");

    const text =
    document.getElementById("modalText");

    if(project === "password"){

        title.textContent =
        "Password Strength Analyzer";

        text.textContent =
        "This project evaluates password security levels and provides recommendations for creating stronger passwords. Developed using Python.";

    }

    if(project === "portfolio"){

        title.textContent =
        "Cyber Security Portfolio";

        text.textContent =
        "A responsive portfolio website developed using HTML, CSS, and JavaScript to showcase skills, certifications, and projects.";

    }

    if(project === "network"){

        title.textContent =
        "Network Monitoring Tool";

        text.textContent =
        "An ongoing cyber security project focused on monitoring network traffic and identifying suspicious activities.";

    }

    modal.style.display = "block";
}

function closeModal(){

    document.getElementById(
        "projectModal"
    ).style.display = "none";
}

window.onclick = function(event){

    const modal =
    document.getElementById("projectModal");

    if(event.target === modal){

        modal.style.display = "none";
    }
}
const form =
document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;

    document.getElementById("nameError")
    .textContent = "";

    document.getElementById("emailError")
    .textContent = "";

    document.getElementById("messageError")
    .textContent = "";

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const message =
    document.getElementById("message").value.trim();

    if(name === ""){

        document.getElementById("nameError")
        .textContent = "Name is required";

        valid = false;
    }

    if(email === ""){

        document.getElementById("emailError")
        .textContent = "Email is required";

        valid = false;
    }

    if(message === ""){

        document.getElementById("messageError")
        .textContent = "Message is required";

        valid = false;
    }

    if(valid){

        document.getElementById("successMsg")
        .textContent =
        "Message sent successfully!";

        form.reset();
    }

});