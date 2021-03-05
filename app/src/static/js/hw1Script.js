document.addEventListener("DOMContentLoaded", function () {
    let tb1 = document.getElementById("tableHw1");
    let str = "";

    for (let i = 1; i <= 9; i++) {
        str += "<tr>"
        for (let j = 2; j <= 9; j++) {
            str += `<td class="tdHw1">${j}*${i}=${i * j}</td>`;
        }
    }

    str += "</table>";

    tb1.innerHTML = str;
})