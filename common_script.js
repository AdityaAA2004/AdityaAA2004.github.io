var a = window.matchMedia("(prefers-color-scheme:dark)");
console.log(a.matches);
function toggle_background(){
    var color = $("body").css("background-color");
    var parts = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete (parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    } 
    var hexString ='#'+parts.join('').toUpperCase();
    if (hexString == "#000000"){
        $("body").css("background-color","#BFE0E3"); 
        $("body").css("color","black");
    }
    else{
        $("body").css("background-color","#000000"); 
        $("body").css("color","white");
    }
}

