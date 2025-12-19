function appendValue(value){
    document.getElementById("display").value += value;
}

function cleardisplay(){
    document.getElementById("display").value = "";
}

function deleteLast(){
  display.value= display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(Error){
        display.value = "Error";
    }
}
    