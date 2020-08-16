window.onload = function() {
  const modal = document.getElementById("modal");
  const btn = document.getElementById("btn");
  const close = document.getElementById("close");
  btn.onclick = function() {
    modal.style.display = "block";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  close.onclick = function() {
    modal.style.display = "none";
  }
}