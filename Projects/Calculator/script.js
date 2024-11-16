document.getElementById('reset').addEventListener('click', e => {
    document.getElementById("result").value = "";
});
document.getElementById('answer').addEventListener('click', e => {
    let input = document.getElementById("result").value;
    try {
        if (/^[0-9+\-*/().\s]*$/.test(input)) {
            document.getElementById("result").value = eval(input);
        } else {
            document.getElementById("result").value = "Invalid input!";
        }
    } catch (error) {
        document.getElementById("result").value = "Error!";
    }
});
document.getElementById('1').addEventListener('click', e => {
    document.getElementById("result").value = document.getElementById("result").value + "1";
});
document.getElementById('2').addEventListener('click', e => {
    document.getElementById("result").value = document.getElementById("result").value + "2";
});
document.getElementById('3').addEventListener('click', e => {
    document.getElementById("result").value = document.getElementById("result").value + "3";
});
document.getElementById('4').addEventListener('click', e => {
    document.getElementById("result").value = document.getElementById("result").value + "4";
});
document.getElementById('5').addEventListener('click', e => {
    document.getElementById("result").value = document.getElementById("result").value + "5";
});
document.getElementById('6').addEventListener('click', e => {
    document.getElementById("result").value = document.getElementById("result").value + "6";
});
document.getElementById('7').addEventListener('click', e => {
    document.getElementById("result").value = document.getElementById("result").value + "7";
});
document.getElementById('8').addEventListener('click', e => {
    document.getElementById("result").value = document.getElementById("result").value + "8";
});
document.getElementById('9').addEventListener('click', e => {
    document.getElementById("result").value = document.getElementById("result").value + "9";
});
document.getElementById('0').addEventListener('click', e => {
    document.getElementById("result").value = document.getElementById("result").value + "0";
});
document.getElementById('plus').addEventListener('click', e => {
    if (checkLastChar(document.getElementById("result").value)) {
        document.getElementById("result").value = document.getElementById("result").value.slice(0, -1) + "+";
    } else {
        document.getElementById("result").value = document.getElementById("result").value + "+";
    }
});
document.getElementById('sub').addEventListener('click', e => {
    if (checkLastChar(document.getElementById("result").value)) {
        document.getElementById("result").value = document.getElementById("result").value.slice(0, -1) + "\-";
    } else {
        document.getElementById("result").value = document.getElementById("result").value + "\-";
    }
});
document.getElementById('decimal').addEventListener('click', e => {
    if (checkLastChar(document.getElementById("result").value)) {
        document.getElementById("result").value = document.getElementById("result").value.slice(0, -1) + ".";
    } else {
        document.getElementById("result").value = document.getElementById("result").value + ".";
    }
});
document.getElementById('div').addEventListener('click', e => {
    if (checkLastChar(document.getElementById("result").value)) {
        document.getElementById("result").value = document.getElementById("result").value.slice(0, -1) + "/";
    } else {
        document.getElementById("result").value = document.getElementById("result").value + "/";
    }
});
document.getElementById('mul').addEventListener('click', e => {
    if (checkLastChar(document.getElementById("result").value)) {
        document.getElementById("result").value = document.getElementById("result").value.slice(0, -1) + "*";
    } else {
        document.getElementById("result").value = document.getElementById("result").value + "*";
    }
});
document.getElementById('del').addEventListener('click', e => {
    let temp = document.getElementById("result").value;
    if (temp.length >= 1) {
        document.getElementById("result").value = temp.slice(0, -1);
    } else {
        document.getElementById("result").value = "";
    }
});

function checkLastChar(input) {
    if (input.charAt(input.length - 1) == '+' || input.charAt(input.length - 1) == '-' || input.charAt(input.length - 1) == '*' || input.charAt(input.length - 1) == '/' || input.charAt(input.length - 1) == '.') {
        return true;
    } else {
        return false;
    }
}