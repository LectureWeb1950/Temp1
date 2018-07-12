function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}
window.onload = function () {
    for (let i = 0; i < document.getElementsByTagName("textarea").length; i++) {
        document.getElementsByTagName("textarea")[i].onmouseenter = function () {
            document.getElementsByTagName("textarea")[i].style.background = '#bdcfed';
        }
        document.getElementsByTagName("textarea")[i].onmouseleave = function () {
            document.getElementsByTagName("textarea")[i].style.background = 'white';
        }
    }
}
var tables = document.getElementsByTagName('h3');
for (var i = 0, td; i < tables.length; i++) {
    order = document.createElement('strong');
    order.appendChild(document.createTextNode(i + 1));
    tables[i].insertBefore(order, tables[i].firstChild);
}

