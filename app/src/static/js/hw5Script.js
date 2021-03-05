document.addEventListener("DOMContentLoaded", function () {

    // change 後會執行 function
    document.getElementById("yearHw5").addEventListener("change", setDate);
    document.getElementById("monthHw5").addEventListener("change", setDate);
    document.getElementById("dateHw5").addEventListener("change", printDate);
    let pEle = document.getElementById("pHw5");

    let d = new Date();

    setYear();
    setMonth();

    function setYear() {
        let y = d.getFullYear();
        for (let i = 2010; i <= 2025; i++) {
            let optionElement = document.createElement("option");
            optionElement.setAttribute("value", i);
            let optionText = document.createTextNode(i);
            optionElement.appendChild(optionText);
            document.getElementById("yearHw5").appendChild(optionElement);
        }
    }

    function setMonth() {
        let m = d.getMonth() + 1;
        for (let i = 1; i <= 12; i++) {
            let optionElement = document.createElement("option");
            optionElement.setAttribute("value", i);
            let optionText = document.createTextNode(i);
            optionElement.appendChild(optionText);
            document.getElementById("monthHw5").appendChild(optionElement);
        }
    }

    function setDate() {
        document.getElementById("dateHw5").innerHTML = "<option value='0' selected>--</option>";

        let y = document.getElementById("yearHw5").value;
        let m = document.getElementById("monthHw5").value;

        if (y * m != 0) {
            let nDate = new Date(y, m, 0);
            let lastDate = nDate.getDate();

            for (let i = 1; i <= lastDate; i++) {
                let optionElement = document.createElement("option");
                console.log(1);
                optionElement.setAttribute("value", i);
                let optionText = document.createTextNode(i);
                optionElement.appendChild(optionText);
                document.getElementById("dateHw5").appendChild(optionElement);
            }
        }
        printDate();
    }

    function printDate() {
        let tableEle = document.getElementById("tableHw5");
        tableEle.removeAttribute("class");
        tableEle.innerHTML = "";

        let yearVal = document.getElementById("yearHw5").value;
        let monthVal = document.getElementById("monthHw5").value;
        let dateVal = document.getElementById("dateHw5").value;

        if (yearVal != 0 || monthVal != 0) {
            pEle.innerHTML = "選擇日期中..."
        } else {
            pEle.innerHTML = "請選擇日期"
        }

        if (yearVal * monthVal * dateVal != 0) {
            pEle.innerHTML = `您選擇的日期是 ${yearVal} 年 ${monthVal} 月 ${dateVal} 日`;
            tableEle.innerHTML = "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";

            let firstDate = new Date(yearVal, monthVal - 1, 1);
            let firstDay = firstDate.getDay();
            let lastDate = new Date(yearVal, monthVal, 0);
            let dateNum = lastDate.getDate();

            let str = "<tr>";

            for (let i = 0; i < firstDay; i++) {
                str += "<td></td>";
            }
            for (let i = 1; i <= dateNum; i++) {
                if (i == dateVal) {
                    str += `<td class = "today">${i}</td>`;
                } else {
                    str += `<td>${i}</td>`;
                }

                let checkDate = new Date(yearVal, monthVal - 1, i);
                // 若是星期六，換行
                if (checkDate.getDay() == 6) {
                    str += "<tr>";
                }
            }

            tableEle.innerHTML += str;
            tableEle.setAttribute("class", "tableHw5");
        }
    }
});