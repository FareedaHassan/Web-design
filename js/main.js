var getname = prompt("this is week 08 :(! Who are you?");

console.log(getname);

document.getElementById("username").innerText = getname;

//tool tip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })