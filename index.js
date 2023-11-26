var container = document.getElementById("container")
var whiteBgButton = document.getElementById("whiteBg")

function setWhiteBg() {
  container.classList.remove("black-bg")
  container.classList.add("white-bg")
}

function setBlackBg() {
  container.classList.remove("white-bg")
  container.classList.add("black-bg")
}