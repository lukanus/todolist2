
window.onload = function () {
    var a = document.getElementById("radd").addEventListener("click", pusta);
}

var x = 1;
var y = 1;


function pusta() {
    if (document.getElementById("txt").value == '') { }
    else { cozrobic() };
}

function addIcon(name, onClick) {
    var icon = new Image(20, 20);
    icon.src = "https://img.icons8.com/" + name + ".png";
    icon.onclick = onClick;
    icon.style.cursor = "pointer";
    return icon;
}

function cozrobic() {

    var box = document.createElement("div");
    box.id = "list" + x;
    var p = document.createElement("p")
    p.innerHTML = document.getElementById("txt").value;
    box.appendChild(p);
    document.getElementById("txt").value = "";

    box.appendChild(addIcon("dotty/80/000000/pencil-tip", myEdit));
    box.appendChild(addIcon("dotty/80/000000/trash", myDelete));
    var parent = document.getElementById("container");
    parent.appendChild(box);
    x++;
}

function myEdit(ev) {
    var b = ev.target;
    var div = b.parentElement;
    var p = div.firstChild;
    var input = document.createElement("input");
    input.id = "input" + y;
    div.replaceChild(input, p);
    div.replaceChild(addIcon("material/24/000000/checkmark", accept), b);
    y++;
}

function myDelete(ev) {
    var a = ev.target;
    a.parentElement.remove();
}

function accept(ev) {
    var check = ev.target;
    var div = check.parentElement;
    var input = div.firstChild;
    var p = document.createElement("p");
    p.innerHTML = input.value;
    div.replaceChild(p, input);
    div.replaceChild(addIcon("dotty/80/000000/pencil-tip", myEdit), check);
}
