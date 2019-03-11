
window.onload = function() {
   var a = document.getElementById("radd").addEventListener("click", pusta);   
}
var x = 1;
function pusta() {
    if (document.getElementById("txt").value == ''){}
    else {cozrobic()};
}

function cozrobic() {
    
    var box = document.createElement("div");
        box.id = "list" + x;
            var p = document.createElement("p")
                 p.innerHTML = document.getElementById("txt").value;
                 box.appendChild(p);
                 document.getElementById("txt").value = "";
            var pencil = new Image(20,20);
                pencil.src = "https://img.icons8.com/dotty/80/000000/pencil-tip.png";
                box.appendChild(pencil);
                pencil.onclick = myEdit;
                pencil.style.cursor = "pointer";
            var bin = new Image(20,20);
                bin.src = "https://img.icons8.com/dotty/80/000000/trash.png";
                box.appendChild(bin);
                bin.onclick = myDelete;
                bin.style.cursor = "pointer";
    var parent = document.getElementById("container");
    parent.appendChild(box);
    x++;    
}
y = 1;  
function myEdit(ev) {
   var b = ev.target;
   var div = b.parentElement;
   var p = div.firstChild;
   var input = document.createElement("input");
        input.id ="input" + y;
   div.replaceChild(input,  p);
        var check = new Image(20,20);
        check.src = "https://img.icons8.com/material/24/000000/checkmark.png";
        div.replaceChild(check, b);
        check.onclick = accept;
        check.style.cursor = "pointer";
        y++;
}

function myDelete(ev) {
    var a = ev.target;
    a.parentElement.remove();
}
function accept(ev){
    var check = ev.target;
    var div = check.parentElement;
    var input = div.firstChild;
    var p = document.createElement("p");
    p.innerHTML = input.value;
    div.replaceChild(p,input);
    var pencil = new Image(20,20);
    pencil.src = "https://img.icons8.com/dotty/80/000000/pencil-tip.png";
    div.replaceChild(pencil , check);
    pencil.onclick = myEdit;  
}
