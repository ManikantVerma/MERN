function change() {
    let ele = document.getElementsByTagName("h1")
    ele[0].innerText = "Hello India"

    let ele1 = document.getElementById("param")
    ele1.innerText = "This is new param"
    ele1.style.backgroundColor="green"
 document.getElementById("img").src = "images.jpeg";
 document.getElementById("cards").classList.toggle("horizontal");
   
}
/* function clock(){
    let ele = document.getElementById("myclock")
    let date = new Date()

    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let time = h + ":" + m + ":" + s

    setTimeout(()=>{
        clock()
    },1000)
    ele.innerText = time
}
clock() */

function clock() {
    let d = new Date();
    let h = d.getHours();
    let ampm = h >= 12 ? "PM" : "AM";

    h = h % 12;
    if (h == 0) h = 12;

    document.getElementById("myclock").innerHTML =
        h + ":" +
        d.getMinutes() + ":" +
        d.getSeconds() + " " + ampm;
}

setInterval(clock, 1000);
