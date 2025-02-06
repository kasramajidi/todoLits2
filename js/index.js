const btn = document.querySelector(".btn")
const divInput = document.querySelector(".container-add")
const container = document.querySelector(".container")
const inputBtn = document.querySelector(".btn-input")
const textInput = document.querySelector(".input-container-add")

let counter = 0;

btn.addEventListener("click", (e) => {
    
    divInput.style.display = "flex"
    container.classList.add("blur")
    textInput.value = ""
})


inputBtn.addEventListener("click", () => {
    divInput.style.display = "none"
    container.classList.remove("blur")
    const inputValue = textInput.value

    createElement(inputValue)

    
})

function createElement (input) {
    counter++;
    const divAllElm = document.createElement("div")
    divAllElm.classList.add("div-note")
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

}