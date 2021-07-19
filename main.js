var menu = ["Neapolitan Pizza", "Sicilian Pizza", "Cheese Pizza", "Extra Cheese Pizza", "Paneer Pizza"];


function getmenu() {
    if (document.getElementById("seemenu").innerHTML === "Show Menu") {
        var htmlpart;
        htmlpart = "<ol class='menu'>"
        menu.sort();
        for (var i = 0; i < menu.length; i++) {
            htmlpart = htmlpart + '<li>' + menu[i] + '</li>'
        }

        htmlpart = htmlpart + "</ol>";
        document.getElementById("display_menu").innerHTML = htmlpart;
        document.getElementById("display_menu").style.visibility = "visible";
        document.getElementById("seemenu").style.marginTop = "175px";
        document.getElementById("seemenu").innerHTML = "Hide Menu";
    } else {
        document.getElementById("display_menu").style.visibility = "hidden";
        document.getElementById("seemenu").style.marginTop = "415px";
        document.getElementById("seemenu").innerHTML = "Show Menu";
    }
}

function add() {

    if (document.getElementById("menu_add").value != "") {
        menu.sort();
        var htmlparttwo;
        var item = document.getElementById("menu_add").value;
        menu.push(item);

        htmlparttwo = "<section class='menucard'>"

        for (var i = 0; i < menu.length; i++) {

            htmlparttwo = htmlparttwo + '<div class="menucard">' + '<img src="https://www.freepngimg.com/thumb/pizza/7-pizza-png-image.png">' + menu[i] + '</div>'
        }
        htmlparttwo = htmlparttwo + "</section>"
        document.getElementById("display_addedmenu").innerHTML = htmlparttwo;
        document.getElementById("menu_add").value = "";

    }

}
