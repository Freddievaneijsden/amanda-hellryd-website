const form = document.querySelector('#form');
const output = document.querySelector('#output');
const name = document.querySelector('#name');
const email = document.querySelector('#email');

function showRegistration(event) {
    event.preventDefault();

    const selected = document.querySelector('input[name="frequency"]:checked');

     if (!selected) {
        output.textContent = "Please select a newsletter frequency.";
        return;
    }

    output.textContent = `${name.value}, I'll send my newsletter to ${email.value} once every ${selected.value}!`
}

form.addEventListener('submit', showRegistration)

