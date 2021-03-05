document.addEventListener("DOMContentLoaded", function () {

    let ad1Href = "http://tw.boss.info/products/gt-1/";
    let ad2Href = "http://tw.boss.info/products/gt-001/";
    let ad3Href = "http://tw.boss.info/products/gt-100/";
    let ad4Href = "http://tw.boss.info/products/me-80/";
    let adsHref = [ad1Href, ad2Href, ad3Href, ad4Href];

    let ad1Img = "{{ url_for('static', filename='images/ad1_gt-1.jpg') }}";
    let ad2Img = "{{ url_for('static', filename='images/ad2_gt-001.jpg') }}";
    let ad3Img = "{{ url_for('static', filename='images/ad3_gt-100.jpg') }}";
    let ad4Img = "{{ url_for('static', filename='images/ad4_me-80.jpg') }}";
    let adsImg = [ad1Img, ad2Img, ad3Img, ad4Img];

    let ad1Title = "BOSS GT-1";
    let ad2Title = "BOSS GT-001";
    let ad3Title = "BOSS GT-100";
    let ad4Title = "BOSS ME-80";
    let adsTitle = [ad1Title, ad2Title, ad3Title, ad4Title];

    let playBut = "{{ url_for('static', filename='images/play.png') }}";
    let pauseBut = "{{ url_for('static', filename='images/pause.png') }}";

    let imgEle = document.getElementById("idImg");
    let aEle = document.getElementById("idA");
    let sps = document.getElementsByClassName("num");

    for (let i = 0; i < sps.length; i++) {
        document.getElementById(`sp${i + 1}Hw4`).addEventListener("click", clickSpNumber);
    }

    document.getElementById("left").addEventListener("click", left);
    document.getElementById("right").addEventListener("click", right);
    let playEle = document.getElementById("play");
    playEle.addEventListener("click", play);

    let adn = 1;
    // set play or not
    let flag = true;

    final();

    function final() {
        imgEle.src = adsImg[adn - 1];
        imgEle.title = adsTitle[adn -1];
        aEle.href = adsHref[adn - 1];
        for (let i = 0; i < sps.length; i++) {
            if (adn == i + 1) {
                sps[i].setAttribute("class", "num red");
            } else {
                sps[i].setAttribute("class", "num black");
            }
        }
        if (flag) {
            // 三秒後執行 change
            timeoutID = setTimeout(change, 3000);
        }

    }

    function change() {
        if (flag) {
            clearTimeout(timeoutID);
            adn++;
            if (adn > adsHref.length) {
                adn = 1;
            }
            final();
        }
    }

    function clickSpNumber() {
        clearTimeout(timeoutID);
        adn = this.id.charAt(2);
        flag = false;
        playEle.src = playBut;
        final();
    }

    function left() {
        clearTimeout(timeoutID);
        if (adn == 1) {
            adn = adsHref.length;
        } else {
            adn--;
        }
        flag = false;
        playEle.src = playBut;
        final();
    }

    function right() {
        clearTimeout(timeoutID);
        if (adn == adsHref.length) {
            adn = 1;
        } else {
            adn++;
        }
        flag = false;
        playEle.src = playBut;
        final();
    }

    function play() {
        if (flag) {
            flag = false;
            playEle.src = playBut;
        } else {
            flag = true;
            playEle.src = pauseBut;
        }
        final();
    }
});