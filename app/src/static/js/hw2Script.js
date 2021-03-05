let correctImg = "<img src='{{ url_for('static', filename='Images/O.png') }}' width=15px>";
let incorrectImg = "<img src='{{ url_for('static', filename='Images/X.png') }}' width=15px>";

function checkName() {//姓名檢查
    let nameObj = document.getElementById("name");
    let nameObjVal = nameObj.value;

    let sp = document.getElementById("nameReturn");
    let nameLen = nameObjVal.length;
    let flag = true;

    if (nameObjVal == "") {//判斷是否空白         
        sp.innerHTML = incorrectImg + " 姓名不能為空白";
    } else if (nameLen < 2) {//判斷字數
        sp.innerHTML = incorrectImg + " 姓名字數錯誤";
    } else {//判斷是否全為中文
        for (let i = 0; i < nameObjVal.length; i++) {
            let code = nameObjVal.charCodeAt(i);
            if (code < 0x4e00 || code > 0x9fff) {
                flag = false;
                sp.innerHTML = incorrectImg + " 姓名必須全部為中文";
                break;
            }
        }
        if (flag) {
            sp.innerHTML = correctImg + "<span class='correctImg'> 正確</span>";
        }
    }
}

function checkPwd() {//密碼檢查
    let pwdObj = document.getElementById("idPwd");
    let pwdObjVal = pwdObj.value;

    let sp = document.getElementById("pwdReturn");
    let pwdLen = pwdObjVal.length;
    let flag1 = false, flag2 = false, flag3 = false;

    if (pwdObjVal == "") {//判斷是否空白
        sp.innerHTML = incorrectImg + " 密碼不能為空白";
    } else if (pwdLen < 6) {//判斷字數
        sp.innerHTML = incorrectImg + " 密碼不能少於 6 個字";
    } else {//判斷格式
        re1 = /^[A-Z]$/;
        re2 = /^[\d]$/;
        re3 = /^[!@#$%^&*]$/;
        for (let i = 0; i < pwdLen; i++) {
            let ch = pwdObjVal.toUpperCase().charAt(i);
            if (re1.test(ch)) {
                flag1 = true;
            } else if (re2.test(ch)) {
                flag2 = true;
            } else if (re3.test(ch)) {
                flag3 = true;
            }
            if (flag1 && flag2 && flag3) break;
        }

        if (flag1 && flag2 && flag3) {
            sp.innerHTML = correctImg + "<span class='correctImg'> 正確</span>";
        } else {
            sp.innerHTML = incorrectImg + " 密碼格式錯誤";
        }
    }
}

function checkDate() {//日期檢查
    let dateObj = document.getElementById("date");
    let dateObjVal = dateObj.value;
    let dateObjValLen = dateObjVal.length;
    let sp = document.getElementById("dateReturn");

    re = /^[0-9]+\/[0-9]+\/[0-9]+$/;//日期格式條件:數字/數字/數字

    if (dateObjValLen == "") {//判斷是否空白
        sp.innerHTML = incorrectImg + " 日期不能為空白";
    } else if (!re.test(dateObjVal)) {//格式判斷
        sp.innerHTML = incorrectImg + " 日期格式錯誤";
    } else {
        let d = new Date(dateObjVal);

        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();

        let stYear = 0;
        let indexMon = dateObjVal.indexOf("/") + 1;
        let indexDay = dateObjVal.lastIndexOf("/") + 1;

        let yearLen = dateObjVal.substring(stYear, indexMon - 1).length;
        let yearInput = parseInt(dateObjVal.substring(stYear, indexMon - 1));
        let monthInput = parseInt(dateObjVal.substring(indexMon, indexDay - 1));
        let dayInput = parseInt(dateObjVal.substr(indexDay));

        re = /^[1-9]{1}[0-9]{3}$/;

        if (!re.test(dateObjVal.substring(stYear, indexMon - 1))) {//判斷年份是否為四位數
            sp.innerHTML = "<img src='{{ url_for('static', filename='Images/X.png') }}' width=15px>"
            sp.innerHTML += " 年分錯誤 (必須為四位數 )";
        } else if (d == "Invalid Date") {
            sp.innerHTML = incorrectImg + " 無此日期";
        } else {
            if (year == yearInput && month == monthInput && day == dayInput) {//確認日期與輸入日期一致(確認日期沒有自動進位)                        
                sp.innerHTML = correctImg + "<span class='correctImg'> 正確</span>";
            } else {
                sp.innerHTML = incorrectImg + " 無此日期";
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("name").onblur = checkName;
    document.getElementById("idPwd").onblur = checkPwd;
    document.getElementById("date").onblur = checkDate;
});