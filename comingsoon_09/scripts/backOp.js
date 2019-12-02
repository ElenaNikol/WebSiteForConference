function showPopUp(n) {
    document.getElementsByClassName("popUp")[n].style.display = "initial";
    document.getElementsByClassName("backOpacity")[0].style.opacity = "0.5";
    document.getElementsByClassName("backOpacity")[1].style.opacity = "0.5";
    document.getElementsByClassName("backOpacity")[0].style.backgroundColor = "gray";
    document.getElementsByClassName("backOpacity")[1].style.backgroundColor = "gray";
}
function closePopUp(n) {
    document.getElementsByClassName("popUp")[n].style.display = "none";
    document.getElementsByClassName("backOpacity")[0].style.opacity = "1";
    document.getElementsByClassName("backOpacity")[1].style.opacity = "1";
    document.getElementsByClassName("backOpacity")[0].style.backgroundColor = "transparent";
    document.getElementsByClassName("backOpacity")[1].style.backgroundColor = "transparent";
}