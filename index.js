const modal =document.querySelector(".modal");
const changeBg = document.querySelector(".bg-color");

function openModal(){
console.log("modal is working");
modal.classList.add("modal-v")
}

function closeModal(){
    console.log("close f working");
    modal.classList.remove("modal-v");
}
