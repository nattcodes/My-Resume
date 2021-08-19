//contact pop-up
function toggle(){
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
}
//-----------contact pop-up

//about pop-up
function toggler(){
    const blur = document.getElementById("blur");
    const navBlur = document.getElementById("navblur");
    const closeA = document.querySelector(".close-a")

    navBlur.classList.toggle("active");
    navBlur.onclick = ()=>{
        blur.classList.add("hide");
    }
    closeA.onclick = ()=>{
        blur.classList.remove("hide");
    }

    const popupA = document.getElementById("popup-a");
    popupA.classList.toggle("active");
    

}
//-----------about pop-up