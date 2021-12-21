const myimage = document.getElementById('myimage')
const mytitel = document.getElementById('mytitel')
let paintings = ["img/painting0.jpg",
"img/painting1.jpg",
"img/painting2.jpg",
"img/painting3.jpg",
"img/painting4.jpg",
"img/painting5.jpg"]

function changeImage(index){
    myimage.src = paintings[index];
    mytitel.innerHTML = titles[index]

    
}

let titles = [
    "de schilderijen van Gogh",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rhône",
    "Zonnebloemen",
    "Boerderij in de Provence",

]


