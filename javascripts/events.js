let output = document.getElementById("output-target");
let header = document.getElementsByTagName("h1")[0];
let wholePage = document.getElementsByTagName("body")[0];
let buttonSection = document.getElementById("guinea_pig");
let inputField = document.getElementById("keypress_input");
// variables for buttons
let guinea = document.getElementById("guinea_pig");
let hulk = document.getElementById("make_large");
let colors = document.getElementById("add_color");
let borders = document.getElementById("add_border")
let rounding = document.getElementById("add_rounding")
// When any section is clicked the output target text should be "You clicked on the {text of the section}'
function sectionSelect(item){
    output.innerHTML = `You clicked the ${item.innerHTML} section`;
    // console.log(`You clicked the ${item.innerHTML} section`)
}

wholePage.addEventListener("click", function(){
    let clickElement = event.target;
    
    sectionSelect(clickElement);

});


// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header"
header.addEventListener("mouseover" , function(){
    output.innerHTML = "<p>You moused over the header.</p>";
});
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
header.addEventListener("mouseleave", function(){
    output.innerHTML = "<p>You left me!!</p>";
});

// when text is entered into the input box it is mirrored in the output div
inputField.addEventListener('input', function(){
    output.innerHTML = inputField.value;
});



// function for changing the styling of buttons.
wholePage.addEventListener("click", function(){
let clickButton = event.target.id;
if(clickButton === hulk.id){
    guinea.classList.toggle("hulk");
    }
    else if (clickButton === colors.id){
        guinea.classList.toggle("blue");
    }
    else if (clickButton === borders.id){
        guinea.classList.toggle("borders");
    }
    else if (clickButton === rounding.id){
        guinea.classList.toggle("rounding");
    }

});
