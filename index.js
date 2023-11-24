let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = "";

for (const key of buttons) {
    key.addEventListener('click',(e)=>{
        let buttonValue = e.target.innerText;

        if(buttonValue == "X"){
            buttonValue = "*";
            screenValue += buttonValue;
            screen.value = screenValue;
        }
        else if(buttonValue == "C"){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonValue == "="){
            screenValue = eval(screen.value);
            screen.value = screenValue;
        }
        else{
            screenValue += buttonValue;
            screen.value = screenValue;
        }
    });
}