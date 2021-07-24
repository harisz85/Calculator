var body = document.querySelector("body");
var circle = document.getElementById("circle");


// first theme selector

var one = document.getElementById("one");

one.addEventListener("click" , function() {

    body.classList.remove("bg2");
    body.classList.remove("bg3");

    circle.style.left=0;
    
})




//second theme selector

var two = document.getElementById("two");

two.addEventListener("click" , function() {

    
    body.classList.add("bg2");
    body.classList.remove("bg3");

    circle.style.left= "21px";
    
})


//third theme selector

var three = document.getElementById("three");

three.addEventListener("click", function() {

    body.classList.add("bg3");
    body.classList.remove("bg2");

    circle.style.left = "42px";

})




// Delete button


function del() {

    const value = document.getElementById("screen").value;

    document.getElementById("screen").value = value.substr(0, value.length - 1);


    return value;


}