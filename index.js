const videographics = document.querySelector(".videographics");
const CPU = document.querySelector(".CPU");
const RAM = document.querySelector(".RAM");

const videographicsoutput = document.querySelector(".videographicsoutput");
const CPUoutput = document.querySelector(".CPUoutput");
const RAMoutput = document.querySelector(".RAMoutput");

videographics.addEventListener('click', function () {
    videographicsoutput.innerHTML = 'Изображение видеокарты'
});

CPU.addEventListener("click", function () {
    CPUoutput.innerHTML = "Изображение процессора"
});

RAM.addEventListener("click", function () {
    RAMoutput.innerHTML = "Изображение оперативной памяти"
})