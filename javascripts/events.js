let output = document.getElementById("output-target");
let header = document.getElementsByTagName("h1")[0];
let wholePage = document.getElementsByTagName("body")[0];

// When any section is clicked the output target text should be "You clicked on the {text of the section}'
function sectionSelect(item){
    output.innerHTML += `You clicked the ${item.innerHTML} section`;
}
wholePage.addEventListener("click", function(){
    let currentElement = event.target;
    sectionSelect(currentElement.innerHTML);
});





// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header"
header.addEventListener("mouseover" , function(){
    output.innerHTML += "<p>You moused over the header.</p>";
});
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
header.addEventListener("mouseleave", function(){
    output.innerHTML += "<p>You left me!!</p>";
});

