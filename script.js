var item = document.getElementById("items");
var menu = document.getElementById("bar");

item.style.right = "-300px";
menu.onclick = function () {
  if (item.style.right == "-300px") {
    item.style.right = "0";
  } else {
    item.style.right = "-300px";
  }
};
