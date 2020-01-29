var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

var post = document.getElementById("post");
var clickables = post.querySelectorAll("img");
var i;
for (i = 0; i < clickables.length; i++) {
  var img = clickables[i];
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    }
}

var span = document.getElementById("closeSpan")
span.onclick = function() {
  modal.style.display = "none";
}
modalImg.onclick = function() {
  modal.style.display = "none";
}
