console.log("");

const input = document.querySelector('form input[type="number"]');
const output = document.querySelector("p");

function checkAge() {
    if (input.value >= 18) {
        output.innerHTML = "volljährig";
    } else {
        output.innerHTML = "minderjährig"
    }

}