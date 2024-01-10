

// slider image setup  

let flag = 0;

function ccontroller(m) {
    flag = flag + m;
    slideshow(flag);
}

slideshow(flag);

function slideshow(num) {
    let slider = document.getElementsByClassName("slide");

    if (num == slider.length) {
        flag = 0;
        num = 0;
    }
    if (num < 0) {
        flag = slider.length - 1;
        num = slider.length - 1;
    }

    for (let k of slider) {
        k.style.display = "none";
    }

    slider[num].style.display = "flex"
}


