const inputbox = document.getElementById("input-box");
const goodcontainer = document.getElementById("good-container");

function addTask() {
    if (inputbox.value === '') {
        alert('Add your task')
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        goodcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputbox.value = "";
    saveData();

}
goodcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "Li") {
        e.target.classgood.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}
    , false);

function saveData() {
    localStorage.setItem("data", goodcontainer.innerHTML);
}
function showTask() {
    goodcontainer.innerHTML = localStorage.getItem("data");
}
showTask();



