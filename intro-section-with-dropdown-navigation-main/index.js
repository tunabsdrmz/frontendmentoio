function myfunc(){
    document.getElementById("olfeatid").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.li-elements')) {
      var dropdowns = document.getElementsByClassName("olfeat");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }