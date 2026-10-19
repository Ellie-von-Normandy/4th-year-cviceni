let battlefield = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let battlefield2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let ammo = 30;

Tank1();
Tank2();
Tank3();
Tank4();
Tank5();

updateAmmoDisplay();
renderGrid();

function renderGrid () {
    const container = document.getElementById("battlefield-container");
    container.innerHTML = "";

    for (let a = 0; a < 10; a++) {
        for (let b = 0; b < 10; b++) {
            let cell = document.createElement("button");
            cell.textContent = battlefield2[a][b];

            cell.onclick = function() {
                shoot(a, b);
            }

            container.appendChild(cell);
        }
    }
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
    let RandomRow = Math.floor(Math.random() * 10);
    let RandomColumn = Math.floor(Math.random() * 10);
    if (battlefield[RandomRow][RandomColumn] === 0) {
        battlefield[RandomRow][RandomColumn] = 1;
    }
    renderGrid();
}

function Tank2 () {

    let placed2 = false;

    while (!placed2) {
        let RandomRow = Math.floor(Math.random() * 10);
        let RandomColumn = Math.floor(Math.random() * 10);
        let Direction = Math.floor(Math.random() * 4) + 1;

        if (battlefield[RandomRow][RandomColumn] === 0) {
            if (Direction === 1 && RandomRow - 1 >= 0 && battlefield[RandomRow - 1][RandomColumn] === 0) {
                battlefield[RandomRow][RandomColumn] = 2;
                battlefield[RandomRow - 1][RandomColumn] = 2;
                placed2 = true;
            }

            else if (Direction === 2 && RandomRow + 1 < 10 && battlefield[RandomRow + 1][RandomColumn] === 0) {
                battlefield[RandomRow][RandomColumn] = 2;
                battlefield[RandomRow + 1][RandomColumn] = 2;
                placed2 = true;
            }

            else if (Direction === 3 && RandomColumn + 1 < 10 && battlefield[RandomRow][RandomColumn + 1] === 0) {
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
    renderGrid();
    }
}

function Tank3 () {
    let placed3 = false;

    while (!placed3) {
        let RandomRow = Math.floor(Math.random() * 10);
        let RandomColumn = Math.floor(Math.random() * 10);
        let Direction = Math.floor(Math.random() * 4) + 1;

        if (battlefield[RandomRow][RandomColumn] === 0) {

            if (Direction === 1 && RandomRow - 2 >= 0 && battlefield[RandomRow - 1][RandomColumn] === 0 && battlefield[RandomRow - 2][RandomColumn] === 0) {
                battlefield[RandomRow][RandomColumn] = 3;
                battlefield[RandomRow - 1][RandomColumn] = 3;
                battlefield[RandomRow - 2][RandomColumn] = 3;
                placed3 = true;
            }

            else if (Direction === 2 && RandomRow + 2 < 10 && battlefield[RandomRow + 1][RandomColumn] === 0 && battlefield[RandomRow + 2][RandomColumn] === 0) {
                battlefield[RandomRow][RandomColumn] = 3;
                battlefield[RandomRow + 1][RandomColumn] = 3;
                battlefield[RandomRow + 2][RandomColumn] = 3;
                placed3 = true;
            }

            else if (Direction === 3 && RandomColumn + 2 < 10 && battlefield[RandomRow][RandomColumn + 1] === 0 && battlefield[RandomRow][RandomColumn + 2] === 0) {
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
        let RandomRow = Math.floor(Math.random() * 10);
        let RandomColumn = Math.floor(Math.random() * 10);
        let Direction = Math.floor(Math.random() * 4) + 1;

        if (battlefield[RandomRow][RandomColumn] === 0) {

            if (Direction === 1 && RandomRow - 3 >= 0 && battlefield[RandomRow - 1][RandomColumn] === 0 && battlefield[RandomRow - 2][RandomColumn] === 0 && battlefield[RandomRow - 3][RandomColumn] === 0) {
                battlefield[RandomRow][RandomColumn] = 4;
                battlefield[RandomRow - 1][RandomColumn] = 4;
                battlefield[RandomRow - 2][RandomColumn] = 4;
                battlefield[RandomRow - 3][RandomColumn] = 4;
                placed4 = true;
            }

            else if (Direction === 2 && RandomRow + 3 < 10 && battlefield[RandomRow + 1][RandomColumn] === 0 && battlefield[RandomRow + 2][RandomColumn] === 0 && battlefield[RandomRow + 3][RandomColumn] === 0) {
                battlefield[RandomRow][RandomColumn] = 4;
                battlefield[RandomRow + 1][RandomColumn] = 4;
                battlefield[RandomRow + 2][RandomColumn] = 4;
                battlefield[RandomRow + 3][RandomColumn] = 4;
                placed4 = true;
            }

            else if (Direction === 3 && RandomColumn + 3 < 10 && battlefield[RandomRow][RandomColumn + 1] === 0 && battlefield[RandomRow][RandomColumn + 2] === 0 && battlefield[RandomRow][RandomColumn + 3] === 0) {
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
    let placed4 = false;

    while (!placed4) {
        let RandomRow = Math.floor(Math.random() * 10);
        let RandomColumn = Math.floor(Math.random() * 10);
        let Direction = Math.floor(Math.random() * 4) + 1;

        if (battlefield[RandomRow][RandomColumn] === 0) {

            if (Direction === 1 && RandomRow - 4 >= 0 && battlefield[RandomRow - 1][RandomColumn] === 0 && battlefield[RandomRow - 2][RandomColumn] === 0 && battlefield[RandomRow - 3][RandomColumn] === 0 && battlefield[RandomRow - 4][RandomColumn] === 0) {
                battlefield[RandomRow][RandomColumn] = 5;
                battlefield[RandomRow - 1][RandomColumn] = 5;
                battlefield[RandomRow - 2][RandomColumn] = 5;
                battlefield[RandomRow - 3][RandomColumn] = 5;
                battlefield[RandomRow - 4][RandomColumn] = 5;
                placed4 = true;
            } else if (Direction === 2 && RandomRow + 4 < 10 && battlefield[RandomRow + 1][RandomColumn] === 0 && battlefield[RandomRow + 2][RandomColumn] === 0 && battlefield[RandomRow + 3][RandomColumn] === 0 && battlefield[RandomRow + 4][RandomColumn] === 0) {
                battlefield[RandomRow][RandomColumn] = 5;
                battlefield[RandomRow + 1][RandomColumn] = 5;
                battlefield[RandomRow + 2][RandomColumn] = 5;
                battlefield[RandomRow + 3][RandomColumn] = 5;
                battlefield[RandomRow + 4][RandomColumn] = 5;
                placed4 = true;
            } else if (Direction === 3 && RandomColumn + 4 < 10 && battlefield[RandomRow][RandomColumn + 1] === 0 && battlefield[RandomRow][RandomColumn + 2] === 0 && battlefield[RandomRow][RandomColumn + 3] === 0 && battlefield[RandomRow][RandomColumn + 4] === 0) {
                battlefield[RandomRow][RandomColumn] = 5;
                battlefield[RandomRow][RandomColumn + 1] = 5;
                battlefield[RandomRow][RandomColumn + 2] = 5;
                battlefield[RandomRow][RandomColumn + 3] = 5;
                battlefield[RandomRow][RandomColumn + 4] = 5;
                placed4 = true;
            } else if (Direction === 4 && RandomColumn - 4 >= 0 && battlefield[RandomRow][RandomColumn - 1] === 0 && battlefield[RandomRow][RandomColumn - 2] === 0 && battlefield[RandomRow][RandomColumn - 3] === 0 && battlefield[RandomRow][RandomColumn - 4] === 0) {
                battlefield[RandomRow][RandomColumn] = 5;
                battlefield[RandomRow][RandomColumn - 1] = 5;
                battlefield[RandomRow][RandomColumn - 2] = 5;
                battlefield[RandomRow][RandomColumn - 3] = 5;
                battlefield[RandomRow][RandomColumn - 4] = 5;
                placed4 = true;
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
    }
}

function restartGame() {
    ammo = 30;

    battlefield = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    battlefield2 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];


    Tank1();
    Tank2();
    Tank3();
    Tank4();
    Tank5();

    updateAmmo();
    renderGrid();
}