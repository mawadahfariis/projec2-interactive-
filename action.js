const numbers=document.querySelectorAll(".rtn-btn");
const submitnumber=document.querySelector(".doneSubmit");
const ratingsquare=document.querySelector(".square1");
const thankingsquare=document.querySelector(".square2");
const chosennum=document.getElementById("chosen-number");

let selectednum=null;

numbers.forEach(button=>{
    button.addEventListener("click",()=>{
        selectednum=button.textContent;
    });
});

submitnumber.addEventListener("click", () => {
    if (selectednum) {
      ratingsquare.style.display = "none"; 
      thankingsquare.style.display = "flex"; 
      chosennum.textContent = selectednum; 
    } else {

      alert("Please select a number first!"); 
    }
  });
