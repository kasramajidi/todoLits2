const btn = document.querySelector(".btn")
const divInput = document.querySelector(".container-add")
const container = document.querySelector(".container")
const inputBtn = document.querySelector(".btn-input")
const textInput = document.querySelector(".input-container-add")
const divEdit = document.querySelector(".container-edit")
const btnEdit = document.querySelector(".btn-edit")
const btnCancel = document.querySelector(".btn-cancel")
const inputEdit = divEdit.querySelector(".input-container-add")

let counter = 0;
let statusEditNote = null;

document.addEventListener("DOMContentLoaded", loadToDoList)

btn.addEventListener("click", (e) => {

    divInput.style.display = "flex"
    container.classList.add("blur")
    textInput.value = ""
})


inputBtn.addEventListener("click", () => {
    divInput.style.display = "none"
    container.classList.remove("blur")
    const inputValue = textInput.value
    if(inputValue === ""){
        return alert("please input the text")
    }
    createElement(inputValue)
    saveToDoList();
})

function createElement(input) {
    counter++;
    const divAllElm = document.createElement("div")
    divAllElm.classList.add("div-note")
    divAllElm.dataset.noteId = counter
    const spanTitleElm = document.createElement("span")
    spanTitleElm.classList.add("div-note-title")
    spanTitleElm.textContent = `this is note ${counter}`
    const spanInput = document.createElement("span")
    spanInput.classList.add("maten")
    spanInput.textContent = input
    const divAllImg = document.createElement("div")
    divAllImg.classList.add("div-img")
    const imgPencil = document.createElement("img")
    imgPencil.classList.add("img-Pencil")
    imgPencil.src = "../image/Pencil.png"
    const imgTrash = document.createElement("img")
    imgTrash.classList.add("img-Trash")
    imgTrash.src = "../image/Trash.png"
    divAllImg.append(imgPencil, imgTrash)
    divAllElm.append(spanTitleElm, spanInput, divAllImg)
    container.appendChild(divAllElm)

    imgTrash.addEventListener("click", () => {
        divAllElm.remove();
        updateNumberNotes();
        saveToDoList();
    })

    imgPencil.addEventListener("click", () => {
        divEdit.style.display = "flex"
        container.classList.add("blur")

        inputEdit.value = spanInput.textContent
        statusEditNote = spanInput
    })
}


btnEdit.addEventListener("click", () => {
    if (statusEditNote) {
        statusEditNote.textContent = inputEdit.value
        statusEditNote = null
    }

    divEdit.style.display = "none"
    container.classList.remove("blur")

    saveToDoList();
})



btnCancel.addEventListener("click", () => {
    divEdit.style.display = "none"
    container.classList.remove("blur")
})

function updateNumberNotes (){
    const divNote = document.querySelectorAll(".div-note")

    counter = 0;

    divNote.forEach((number) => {
        counter++;
        const titleNote = number.querySelector(".div-note-title")
        titleNote.textContent = `this is note ${counter}`
    })
}


function saveToDoList (){
    const notes = [];
    const divNotes = document.querySelectorAll(".div-note")

    divNotes.forEach((item) => {
        const note = item.querySelector(".div-note-title").textContent
        const matn = item.querySelector(".maten").textContent
        notes.push({note, matn})
    })

    localStorage.setItem("notes", JSON.stringify(notes))
}


function loadToDoList (){
    const saveNots = JSON.parse(localStorage.getItem("notes")) || [];

    saveNots.forEach(item => {
        createElement(item.matn);
    });
}
