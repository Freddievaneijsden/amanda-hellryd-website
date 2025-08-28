const form = document.querySelector('#form');
const output = document.querySelector('#output');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

function showRegistration(event) {
    event.preventDefault();

    const selectedInput = document.querySelector('input[name="frequency"]:checked');

     if (!selectedInput) {
        output.textContent = "Please select a newsletter frequency.";
        return;
    }

    saveRegistration(nameInput.value, emailInput.value, selectedInput.value);
    getRegistration("registration");

    output.textContent = `${nameInput.value}, I'll send my newsletter to ${emailInput.value} once every ${selectedInput.value}!`
}

function saveRegistration(nameValue, emailValue, frequencyValue) {
    const obj = {
        name: nameValue,
        email: emailValue,
        selected: frequencyValue
    };

    const stringifiedObj = JSON.stringify(obj);
    localStorage.setItem("registration", stringifiedObj);
}

function getRegistration(keyName) {
    let getRegistrationObject = localStorage.getItem(keyName);
    const parsedRegistration= JSON.parse(getRegistrationObject);

    console.log(parsedRegistration);
}

function showNewsFeed() {
    const newsFeed = document.querySelector(".news-feed");
    const registration = localStorage.getItem("registration");

    if (!registration) {
      newsFeed.style.display = "none";
    } else {
      newsFeed.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", showNewsFeed);
form.addEventListener('submit', showRegistration, false)




