const first_sect = document.getElementById("first-sect")
const cube = document.getElementById('cube');

const eyeImg = document.createElement("img");
eyeImg.src = "./img/Eye.svg"
eyeImg.id = 'eye';
const aqua_div = document.createElement("div")
aqua_div.id = "aqua"; 
cube.addEventListener('mouseover', function() {
    first_sect.appendChild(eyeImg)
    first_sect.appendChild(aqua_div)
});

cube.addEventListener('mouseout', function() {
    first_sect.removeChild(eyeImg)
    first_sect.removeChild(aqua_div)
});
const aqua = document.getElementById("aqua")

