var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function close_modal() {
    modal.style.display = "none";
}

// window.onclick = function(event){
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

function fun_open() {
    modal.style.display = "block";
}
// setTimeout(fun_open,5000)
// var i = 1;
// setTimeout(function run() {
//     fun_open();
//     setTimeout(run, 5000);
// }, 5000);

setTimeout(fun_open, 5000)

var timerId = setTimeout(function out() {
    fun_open();
    timerId = setTimeout(out, 5000);
}, 5000);