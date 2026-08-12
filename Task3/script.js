const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener("click", function () {
       let value = this.innerText;
        if (value === "AC") {
          display.value = "";
        }
        else if (value === "X") {
          display.value = display.value.slice(0, -1);
        }
        else if (value === "=") {
          try {
           display.value = eval(display.value);
           }
          catch {
           display.value = "Error";
          }
        }
        else {
         display.value += value;
        }
    });
}