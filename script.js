const informations = document.querySelector(".info");
const downloadBtn = document.querySelector(".download");
const showBtn = document.querySelector(".extend-btn");
const about = document.querySelector("#about")

const showInfo = () => {
    if (informations.style.maxHeight == "0px") {
        informations.style.maxHeight = "1000px";
        showBtn.innerHTML = '<i class="fas fa-angle-double-up"></i>';
    } else {
        informations.style.maxHeight = "0px";
        showBtn.innerHTML = '<i class="fas fa-angle-double-down"></i>';
           
    }
}


showBtn.addEventListener('click', showInfo);