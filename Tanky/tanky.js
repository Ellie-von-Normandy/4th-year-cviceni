let horizontalSize = 10;
let verticalSize = 10;
let ammo = 30;
let battlefield = [];
let battlefield2 = [];

restart()

function renderGrid () {
    const container = document.getElementById("battlefield-container");
    container.innerHTML = "";

    container.style.gridTemplateColumns = `repeat(${horizontalSize}, 50px)`;

    for (let a = 0; a < verticalSize; a++) {
        for (let b = 0; b < horizontalSize; b++) {
            let cell = document.createElement("button");
            cell.textContent = battlefield2[a][b];
            cell.onclick = function() {
                shoot(a, b);
            }
            container.appendChild(cell);
        }
    }
    checkWin();
}

function shoot(a, b) {
    if (ammo <= 0 || battlefield2[a][b] !== 0) {
        return;
    }
    ammo--;
    updateAmmo();
    if (battlefield[a][b] !== 0) {
        battlefield2[a][b] = "X";
    } else {
        battlefield2[a][b] = "-";
    }
    renderGrid();
}

function Tank1 () {
    let RandomRow = Math.floor(Math.random() * verticalSize);
    let RandomColumn = Math.floor(Math.random() * horizontalSize);
    if (battlefield[RandomRow][RandomColumn] === 0) {
        battlefield[RandomRow][RandomColumn] = 1;
    }
    renderGrid();
}

function Tank2 () {
    let placed2 = false;

    while (!placed2) {
        let RandomRow = Math.floor(Math.random() * verticalSize);
        let RandomColumn = Math.floor(Math.random() * horizontalSize);
        let Direction = Math.floor(Math.random() * 4) + 1;

        if (battlefield[RandomRow][RandomColumn] === 0) {
            if (Direction === 1 && RandomRow - 1 >= 0 && battlefield[RandomRow - 1][RandomColumn] === 0) {
                battlefield[RandomRow][RandomColumn] = 2;
                battlefield[RandomRow - 1][RandomColumn] = 2;
                placed2 = true;
            }
            else if (Direction === 2 && RandomRow + 1 < verticalSize && battlefield[RandomRow + 1][RandomColumn] === 0) {
                battlefield[RandomRow][RandomColumn] = 2;
                battlefield[RandomRow + 1][RandomColumn] = 2;
                placed2 = true;
            }
            else if (Direction === 3 && RandomColumn + 1 < horizontalSize && battlefield[RandomRow][RandomColumn + 1] === 0) {
                battlefield[RandomRow][RandomColumn] = 2;
                battlefield[RandomRow][RandomColumn + 1] = 2;
                placed2 = true;
            }
            else if (Direction === 4 && RandomColumn - 1 >= 0 && battlefield[RandomRow][RandomColumn - 1] === 0) {
                battlefield[RandomRow][RandomColumn] = 2;
                battlefield[RandomRow][RandomColumn - 1] = 2;
                placed2 = true;
            }
        }
    }
    renderGrid();
}

function Tank3 () {
    let placed3 = false;

    while (!placed3) {
        let RandomRow = Math.floor(Math.random() * verticalSize);
        let RandomColumn = Math.floor(Math.random() * horizontalSize);
        let Direction = Math.floor(Math.random() * 4) + 1;

        if (battlefield[RandomRow][RandomColumn] === 0) {
            if (Direction === 1 && RandomRow - 2 >= 0 && battlefield[RandomRow - 1][RandomColumn] === 0 && battlefield[RandomRow - 2][RandomColumn] === 0) {
                battlefield[RandomRow][RandomColumn] = 3;
                battlefield[RandomRow - 1][RandomColumn] = 3;
                battlefield[RandomRow - 2][RandomColumn] = 3;
                placed3 = true;
            }
            else if (Direction === 2 && RandomRow + 2 < verticalSize && battlefield[RandomRow + 1][RandomColumn] === 0 && battlefield[RandomRow + 2][RandomColumn] === 0) {
                battlefield[RandomRow][RandomColumn] = 3;
                battlefield[RandomRow + 1][RandomColumn] = 3;
                battlefield[RandomRow + 2][RandomColumn] = 3;
                placed3 = true;
            }
            else if (Direction === 3 && RandomColumn + 2 < horizontalSize && battlefield[RandomRow][RandomColumn + 1] === 0 && battlefield[RandomRow][RandomColumn + 2] === 0) {
                battlefield[RandomRow][RandomColumn] = 3;
                battlefield[RandomRow][RandomColumn + 1] = 3;
                battlefield[RandomRow][RandomColumn + 2] = 3;
                placed3 = true;
            }
            else if (Direction === 4 && RandomColumn - 2 >= 0 && battlefield[RandomRow][RandomColumn - 1] === 0 && battlefield[RandomRow][RandomColumn - 2] === 0) {
                battlefield[RandomRow][RandomColumn] = 3;
                battlefield[RandomRow][RandomColumn - 1] = 3;
                battlefield[RandomRow][RandomColumn - 2] = 3;
                placed3 = true;
            }
        }
    }
    renderGrid();
}

function Tank4 () {
    let placed4 = false;

    while (!placed4) {
        let RandomRow = Math.floor(Math.random() * verticalSize);
        let RandomColumn = Math.floor(Math.random() * horizontalSize);
        let Direction = Math.floor(Math.random() * 4) + 1;

        if (battlefield[RandomRow][RandomColumn] === 0) {
            if (Direction === 1 && RandomRow - 3 >= 0 && battlefield[RandomRow - 1][RandomColumn] === 0 && battlefield[RandomRow - 2][RandomColumn] === 0 && battlefield[RandomRow - 3][RandomColumn] === 0) {
                battlefield[RandomRow][RandomColumn] = 4;
                battlefield[RandomRow - 1][RandomColumn] = 4;
                battlefield[RandomRow - 2][RandomColumn] = 4;
                battlefield[RandomRow - 3][RandomColumn] = 4;
                placed4 = true;
            }
            else if (Direction === 2 && RandomRow + 3 < verticalSize && battlefield[RandomRow + 1][RandomColumn] === 0 && battlefield[RandomRow + 2][RandomColumn] === 0 && battlefield[RandomRow + 3][RandomColumn] === 0) {
                battlefield[RandomRow][RandomColumn] = 4;
                battlefield[RandomRow + 1][RandomColumn] = 4;
                battlefield[RandomRow + 2][RandomColumn] = 4;
                battlefield[RandomRow + 3][RandomColumn] = 4;
                placed4 = true;
            }
            else if (Direction === 3 && RandomColumn + 3 < horizontalSize && battlefield[RandomRow][RandomColumn + 1] === 0 && battlefield[RandomRow][RandomColumn + 2] === 0 && battlefield[RandomRow][RandomColumn + 3] === 0) {
                battlefield[RandomRow][RandomColumn] = 4;
                battlefield[RandomRow][RandomColumn + 1] = 4;
                battlefield[RandomRow][RandomColumn + 2] = 4;
                battlefield[RandomRow][RandomColumn + 3] = 4;
                placed4 = true;
            }
            else if (Direction === 4 && RandomColumn - 3 >= 0 && battlefield[RandomRow][RandomColumn - 1] === 0 && battlefield[RandomRow][RandomColumn - 2] === 0 && battlefield[RandomRow][RandomColumn - 3] === 0) {
                battlefield[RandomRow][RandomColumn] = 4;
                battlefield[RandomRow][RandomColumn - 1] = 4;
                battlefield[RandomRow][RandomColumn - 2] = 4;
                battlefield[RandomRow][RandomColumn - 3] = 4;
                placed4 = true;
            }
        }
    }
    renderGrid();
}

function Tank5 () {
    let placed5 = false;

    while (!placed5) {
        let RandomRow = Math.floor(Math.random() * verticalSize);
        let RandomColumn = Math.floor(Math.random() * horizontalSize);
        let Direction = Math.floor(Math.random() * 4) + 1;

        if (battlefield[RandomRow][RandomColumn] === 0) {
            if (Direction === 1 && RandomRow - 4 >= 0 && battlefield[RandomRow - 1][RandomColumn] === 0 && battlefield[RandomRow - 2][RandomColumn] === 0 && battlefield[RandomRow - 3][RandomColumn] === 0 && battlefield[RandomRow - 4][RandomColumn] === 0) {
                battlefield[RandomRow][RandomColumn] = 5;
                battlefield[RandomRow - 1][RandomColumn] = 5;
                battlefield[RandomRow - 2][RandomColumn] = 5;
                battlefield[RandomRow - 3][RandomColumn] = 5;
                battlefield[RandomRow - 4][RandomColumn] = 5;
                placed5 = true;
            }
            else if (Direction === 2 && RandomRow + 4 < verticalSize && battlefield[RandomRow + 1][RandomColumn] === 0 && battlefield[RandomRow + 2][RandomColumn] === 0 && battlefield[RandomRow + 3][RandomColumn] === 0 && battlefield[RandomRow + 4][RandomColumn] === 0) {
                battlefield[RandomRow][RandomColumn] = 5;
                battlefield[RandomRow + 1][RandomColumn] = 5;
                battlefield[RandomRow + 2][RandomColumn] = 5;
                battlefield[RandomRow + 3][RandomColumn] = 5;
                battlefield[RandomRow + 4][RandomColumn] = 5;
                placed5 = true;
            }
            else if (Direction === 3 && RandomColumn + 4 < horizontalSize && battlefield[RandomRow][RandomColumn + 1] === 0 && battlefield[RandomRow][RandomColumn + 2] === 0 && battlefield[RandomRow][RandomColumn + 3] === 0 && battlefield[RandomRow][RandomColumn + 4] === 0) {
                battlefield[RandomRow][RandomColumn] = 5;
                battlefield[RandomRow][RandomColumn + 1] = 5;
                battlefield[RandomRow][RandomColumn + 2] = 5;
                battlefield[RandomRow][RandomColumn + 3] = 5;
                battlefield[RandomRow][RandomColumn + 4] = 5;
                placed5 = true;
            }
            else if (Direction === 4 && RandomColumn - 4 >= 0 && battlefield[RandomRow][RandomColumn - 1] === 0 && battlefield[RandomRow][RandomColumn - 2] === 0 && battlefield[RandomRow][RandomColumn - 3] === 0 && battlefield[RandomRow][RandomColumn - 4] === 0) {
                battlefield[RandomRow][RandomColumn] = 5;
                battlefield[RandomRow][RandomColumn - 1] = 5;
                battlefield[RandomRow][RandomColumn - 2] = 5;
                battlefield[RandomRow][RandomColumn - 3] = 5;
                battlefield[RandomRow][RandomColumn - 4] = 5;
                placed5 = true;
            }
        }
    }
    renderGrid();
}

function updateAmmo() {

    const ammoCounter = document.getElementById("ammo-counter");

    if (ammo > 0) {
        ammoCounter.textContent = "Ammo Left: " + ammo;
    } else {
        alert("Game over TwT")
        window.location.reload();
    }

}

function restart() {

    horizontalSize = 0;
    while (horizontalSize < 5) {
        horizontalSize = Number(prompt("Please enter horizontal size (must be 5 or above):"));
    }

    verticalSize = 0;
    while (verticalSize < 5) {
        verticalSize = Number(prompt("Please enter vertical size (must be 5 or above):"));
    }

    ammo = Math.floor((horizontalSize * verticalSize) * 0.5);

    battlefield = [];
    for (let i = 0; i < verticalSize; i++) {
        battlefield[i] = [];
        for (let j = 0; j < horizontalSize; j++) {
            battlefield[i][j] = 0;
        }
    }

    battlefield2 = [];
    for (let i = 0; i < verticalSize; i++) {
        battlefield2[i] = [];
        for (let j = 0; j < horizontalSize; j++) {
            battlefield2[i][j] = 0;
        }
    }

    Tank1();
    Tank2();
    Tank3();
    Tank4();
    Tank5();

    updateAmmo();
    renderGrid();
}

function checkWin() {

    let count = 0;

    for(let x = 0; x < verticalSize; x++) {
        for (let y = 0; y < horizontalSize; y++) {
            if (battlefield2[x][y] === "X") {
                count++;
            }
        }
    }

    if (count >= 15) {
        alert("You win!!");
        window.location.reload();
    }
}