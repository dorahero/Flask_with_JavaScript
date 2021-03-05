document.addEventListener("DOMContentLoaded", function () {
    let sp = document.getElementById("idsp");
    let sp2 = document.getElementById("idsp2");
    sp2.addEventListener("click",reset);
    
    let imgs = document.getElementsByName("img");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", click);
        imgs[i].addEventListener("mouseover", mouseover);
        imgs[i].addEventListener("mouseout", mouseout);
    }
    
    let starOn = "{{ url_for('static', filename='images/chngstar.gif') }}";
    let starOff = "{{ url_for('static', filename='images/star.gif') }}";
    let flag = true;

    function mouseover() {
        if (flag) {
            let n = parseInt(this.id.charAt(5));
            for (let i = 1; i <= n; i++) {
                document.getElementById(`idimg${i}`).src = starOn;
            }
            sp.innerHTML = `評分中...${n}分`;
        }
    }
    
    function mouseout() {
        if (flag) {
            let n = parseInt(this.id.charAt(5));
            for (let i = 1; i <= n; i++) {
                document.getElementById(`idimg${i}`).src = starOff;
            }
            sp.innerHTML = "請打分數";
        }
    }
    
    function click() {
        if (flag) {
            let n = parseInt(this.id.charAt(5));
            for (let i = 1; i <= n; i++) {
                // $(`idimg${i}`).src = starOn
                document.getElementById(`idimg${i}`).src = starOn;
            }
            sp.innerHTML = `<span style="color:red;font-weight:bold">&nbsp&nbsp${n}顆星！</span>`;
            sp2.innerHTML = "<button id='idbut'>清除重填</button>";
        }
        flag = false;
    }
    
    function reset() {
        for (let i = 0; i < imgs.length; i++) {
            document.getElementById(`idimg${i + 1}`).src = starOff;
        }
        sp.innerHTML = "請打分數";
        sp2.innerHTML = "";
        flag = true;
    }
});

