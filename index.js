window.onload = function() {
  const modal = document.getElementById("modal");
  const btn = document.getElementById("btn");
  btn.onclick = function() {
    modal.style.display = "block";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}