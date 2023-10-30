const counterElement = document.getElementById("counter-el");
const incrementBtn = document.querySelector("#increment-btn");
const decrementBtn = document.querySelector("#decrement-btn");
const saveElement = document.querySelector("#save-el");
const saveBtn = document.querySelector("#save-btn");

let counter = 0;


function increment (){
    counter++;

    counterElement.innerText = counter;

}

incrementBtn.addEventListener("click", increment);

function decrement (){
    counter--;

    counterElement.innerText = counter;

}

decrementBtn.addEventListener("click", decrement);

function save() {
    saveElement.textContent += counter + " - ";
    counter = 0;
    counterElement.innerText = counter;
}

saveBtn.addEventListener("click",save);

