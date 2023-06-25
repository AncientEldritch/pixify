 /*Dark/light mode*/
    
 const toggleButton = document.getElementById("display-toggle");
 const body = document.querySelector("body");
   
 function colorMode() {
   if (toggleButton.innerText === "Dark Mode") {
     body.style.backgroundColor = "var(--blue)"
     body.style.color = "white";
     toggleButton.innerText = "Light Mode";
   } else if (toggleButton.innerText === "Light Mode") {
     body.style.backgroundColor = "white"
     body.style.color = "black";
     toggleButton.innerText = "Dark Mode";
   }
 }
 
 toggleButton.addEventListener("click", () => {
   colorMode();
 });
 