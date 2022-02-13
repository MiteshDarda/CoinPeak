// Logout Button
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const overlayOpen = document.querySelector(".profile");
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
const escTaker = function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        console.log("Yes");
        closeModal();
    };
};
overlayOpen.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', escTaker);

// Api fetching and updating
document.getElementById('username').innerHTML = `Hello! ${JSON.parse(localStorage.getItem('isLoggedIn')).fullName}.`
const logoutBtn = document.getElementById('logoutBtn')
let input=document.getElementById('input')
const searchBtn=document.getElementById('searchBtn')
let cryptoName=false;
const crypto=document.getElementById('crypto')

var trending1 = document.getElementById('one')
var trending2 = document.getElementById('two')
var trending3 = document.getElementById('three')
for (let i = 0; i < 100; i++) {
    var newRow = table.insertRow(i + 1)

    var cel0 = newRow.insertCell(0)
    var cel1 = newRow.insertCell(1)
    var cel2 = newRow.insertCell(2)
    var cel3 = newRow.insertCell(3)
}

fetch('https://api.coincap.io/v2/assets')
    .then(response => response.json())
    .then(dataa => {
        dataa.data.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
        trending1.innerHTML = `${dataa.data[0].name} || $ ${dataa.data[0].priceUsd}`
        trending2.innerHTML = `${dataa.data[1].name} || $ ${dataa.data[1].priceUsd}`
        trending3.innerHTML = `${dataa.data[3].name} || $ ${dataa.data[2].priceUsd}`
        for (let i = 0; i < 100; i++) {
            var x = table.rows[i + 1].cells
            table.rows[i + 1].setAttribute("id", dataa.data[i].id)
            x[0].innerHTML = dataa.data[i].name
            x[1].innerHTML = dataa.data[i].priceUsd
            x[2].innerHTML = dataa.data[i].changePercent24Hr
            x[3].innerHTML = dataa.data[i].symbol
        }
    })
    .catch(e => {
        alert('Please Wait!!')

    })
setInterval(() => {
    fetch('https://api.coincap.io/v2/assets')
        .then(response => response.json())
        .then(dataa => {
            trending1.innerHTML = `${dataa.data[0].name} || $ ${dataa.data[0].priceUsd}`
            trending2.innerHTML = `${dataa.data[1].name} || $ ${dataa.data[1].priceUsd}`
            trending3.innerHTML = `${dataa.data[3].name} || $ ${dataa.data[2].priceUsd}`
            if(!cryptoName){
                dataa.data.sort(function(a, b){
                    if(a.name < b.name) { return -1; }
                    if(a.name > b.name) { return 1; }
                    return 0;
                })
            }
            else{
                dataa.data.sort(function(a, b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()) { return -1; }
                    if(a.name.toLowerCase() < b.name.toLowerCase()) { return 1; }
                    return 0;
                })
            }
            for (let i = 0; i < 100; i++) {
                table.rows[i + 1].setAttribute("id", dataa.data[i].id)
                var x = table.rows[i + 1].cells
                x[0].innerHTML = dataa.data[i].name
                x[1].innerHTML = dataa.data[i].priceUsd
                x[2].innerHTML = dataa.data[i].changePercent24Hr
                x[3].innerHTML = dataa.data[i].symbol
            }
        })

}, 500)

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn')
    location.href = "index.html"
})
searchBtn.addEventListener('click',()=>{
    location.href=`#${input.value}`
    document.getElementById('input.value').style.color='red';

})
crypto.addEventListener('click',()=>{
    cryptoName=!cryptoName
})
