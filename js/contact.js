let inputs = document.querySelectorAll("input"),
    btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    alert("Név: " + inputs[0].value + "\nÜzenet: " + inputs[1].value);
});