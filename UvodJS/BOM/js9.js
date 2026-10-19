const boardElement = document.getElementById("board");

let hrac = 0;

for (let rows = 0; rows < 3; rows++) {
    for (let columns = 0; columns < 3; columns++) {

        const buttonElement = document.createElement("button");
        buttonElement.innerHTML = "-";

        boardElement.appendChild(buttonElement);
        buttonElement.addEventListener("click", event => {
            if (buttonElement.innerHTML === "-") {
                if (hrac === 0) {
                    winCheck(rows, "0")
                    buttonElement.innerHTML = "O";
                    hrac = 1;
                } else if (hrac === 1) {
                    winCheck(rows, "X")
                    buttonElement.innerHTML = "X";
                    hrac = 0;
                }
            }
        })

    }
}

let rows = [0, 0, 0];

function winCheck (row, hrac) {
    if (hrac === "0") {
        rows[row] += 1;
        if (rows[row] === 3) {
            alert("Hrac O vyhral");
        }
    } else if (hrac === "X") {
        rows[row] -= 1;
        if (rows[row] === -3) {
            alert("Hrac X vyhral");
        }
    }
}