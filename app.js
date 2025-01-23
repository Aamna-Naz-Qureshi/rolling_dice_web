const img = document.getElementById("img");
const but = document.getElementById("but");

but.addEventListener("click", function () {
  let dice = Math.trunc(Math.random() * 6 + 1);
  img.src = `./Untitled design (1)/${dice}.png`

});
