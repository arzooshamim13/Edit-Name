console.log("Hello  World !");
let image = document.getElementById("image");
let head = document.getElementById("head");
function over() {
    image.src = "images/doll 2.jpg";
}
function out() {
    image.src = "images/doll 1.jpg";
}
function edit() {
    let mess = prompt("Enter Your Edit Name");
    head.innerText = mess;
    if (mess === "") {
        head.innerText = "No Name";
        alert("Enter Name");
    }
}