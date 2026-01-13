var inp = document.getElementById("Answer");

function EnterNumber(num) {
    inp.value += num;
}

function EnterOperator(op) {
    inp.value += op;
}

function EnterClear() {
    inp.value = "";
}

function EnterEqual() {
    try {
        inp.value = eval(inp.value);
    } catch (e) {
        inp.value = "Error";
    }
}
