const table = document.getElementById("table");
const cell = document.querySelectorAll('[id=cell]');
const img = document.getElementById("knight")
let cellno = 0;

function fillBoard() {
    let idx = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            ;
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    cell[idx].style.backgroundColor = "white";
                    idx++;
                }
                else {
                    cell[idx].style.backgroundColor = "black";
                    idx++;
                }
            }
            else {
                if (j % 2 == 0) {
                    cell[idx].style.backgroundColor = "black";
                    idx++;
                }
                else {
                    cell[idx].style.backgroundColor = "white";
                    idx++;
                }
            }
        }
    }
}

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {

        table.rows[i].cells[j].onclick = function () {
            cell[cellno].childNodes[1].style.display = "none"
            cellno = (((i) * 8) + j)
            fillBoard();
            cell[cellno].childNodes[1].style.display = "block"

            if (i - 2 >= 0) {
                if (j - 1 >= 0) {
                    table.rows[i - 2].cells[j - 1].style.backgroundColor = 'gold';
                }
                if (j + 1 < 8) {
                    table.rows[i - 2].cells[j + 1].style.backgroundColor = 'gold';
                }
            }

            if (i - 1 >= 0) {
                if (j - 2 >= 0) {
                    table.rows[i - 1].cells[j - 2].style.backgroundColor = 'gold';
                }
                if (j + 2 < 8) {
                    table.rows[i - 1].cells[j + 2].style.backgroundColor = 'gold';
                }
            }

            if (i + 1 < 8) {
                if (j - 2 >= 0) {
                    table.rows[i + 1].cells[j - 2].style.backgroundColor = 'gold';
                }
                if (j + 2 < 8) {
                    table.rows[i + 1].cells[j + 2].style.backgroundColor = 'gold';
                }
            }

            if (i + 2 < 8) {
                if (j - 1 >= 0) {
                    table.rows[i + 2].cells[j - 1].style.backgroundColor = 'gold';
                }
                if (j + 1 < 8) {
                    table.rows[i + 2].cells[j + 1].style.backgroundColor = 'gold';
                }
            }
        }
    }
}