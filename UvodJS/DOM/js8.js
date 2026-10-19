let input = prompt("Zadejte cislo");
linecount = Number(input);
pyramida(linecount);
document.write("<br>")
input = prompt("Zadejte cislo")
linecount = Number(input);
pyramida(linecount);

function pyramida() {

    document.write("<div style='text-align: center;'>");

    for (let i = 0; i < linecount; i++) {
        let line = "";
        for (let j = 0; j <= i; j++) {
            line += "  *  ";
        }
        document.write("<span style='text-align: center; margin-left: auto; margin-right: auto;'>" + line + "</span><br>");

    }

    document.write("</div>");

}