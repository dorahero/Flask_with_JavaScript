document.addEventListener("DOMContentLoaded", function () {

    let buts = document.getElementsByName("butHw");

    for(let i = 0; i < buts.length; i++){
        document.getElementById(`but${i}`).addEventListener("click", divChange);
    }

    let divHws = document.getElementsByName("divHw");

    function divChange(){
        for(let i = 0; i < divHws.length; i++){
            let n = parseInt(this.id.charAt(3));
            if(n==i){
                divHws[i].style.display = "block";
                if(i!=0){
                    buts[i].setAttribute("class","chosen spanHw");
                }                        
            }else{
                divHws[i].style.display = "none";
                if(i!=0){
                    buts[i].setAttribute("class","spanHw");
                }
            }                    
        }
    }

});