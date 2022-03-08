
let flag_p1 = false;
function editname_p1() {
    document.getElementById("config-overlay").style.display = "block";
    document.getElementById("backdrop").style.display = "block";
    flag_p1 = true;
    console.log(flag_p1);
}
let flag_p2 = false;
function editname_p2() {
    document.getElementById("config-overlay").style.display = "block";
    document.getElementById("backdrop").style.display = "block";
    flag_p2 = true;
    console.log(flag_p2);
}

let player1_name = null;
let player2_name = null;
let final_outcome = null;

function confirm_p1() {
    if (flag_p1 == true) {
        let player = document.getElementById("wgb1");
        let playerval = document.getElementById("playername");
        player.textContent = playerval.value;
        player1_name = playerval.value;
        flag_p1 = false;
        cancel_namechange();
        playerval.value = "";
    }
}

function confirm_p2() {
    if (flag_p2 == true) {
        let player = document.getElementById("wgb2");
        let playerval = document.getElementById("playername");
        player.innerHTML = playerval.value;
        player2_name = playerval.value;
        flag_p2 = false;
        cancel_namechange();
        playerval.value = "";
    }
}

function cancel_namechange() {
    document.getElementById("config-overlay").style.display = "none";
    document.getElementById("backdrop").style.display = "none";
}

let playermanedit1 = document.getElementById("forp1");
let playermanedit2 = document.getElementById("forp2")
let modal_cancel = document.getElementById("cancel");
let confirm_player = document.getElementById("confirm");
modal_cancel.addEventListener('click', cancel_namechange);
playermanedit1.addEventListener('click', editname_p1);
playermanedit2.addEventListener('click', editname_p2);
confirm_player.addEventListener('click', confirm_p1);
confirm_player.addEventListener('click', confirm_p2);

let startGame = document.getElementById("start");
let startgame2 = document.getElementById("start2")

function init_all__to_() {
    let all_box = document.getElementsByClassName("input-turn");
    for (const key in all_box) {
        all_box[key].textContent = "-";
    }
    document.getElementById("first-play").textContent = "-";
    document.getElementById("sides").style.display = "block";
    document.getElementById("backdrop").style.display = "block";
}

function init_all__to_2() {
    let all_box = document.getElementsByClassName("input-turn");
    for (const key in all_box) {
        all_box[key].textContent = "-";
    }
    document.getElementById("wgb1").textContent = "PLAYER NAME";
    document.getElementById("wgb2").textContent = "PLAYER NAME";
    document.getElementById("first-play").textContent = "-";
    document.getElementById("sides").style.display = "block";
    document.getElementById("win_modal").style.display = "none";
    document.getElementById("backdrop").style.display = "block";
}
let first_symbol = null;
function who_will_start() {
    let items = ["0", "X"]
    const begin = items[Math.floor(Math.random() * items.length)];
    document.getElementById("first-play").innerHTML = begin;
    first_symbol = begin;
}

function close_decide() {
    document.getElementById("sides").style.display = "none";
    document.getElementById("backdrop").style.display = "none";
}

startGame.addEventListener('click', init_all__to_);
startgame2.addEventListener('click', init_all__to_2);
document.getElementById("decide").addEventListener('click', who_will_start);
document.getElementById("close").addEventListener('click', close_decide);

let btn_1 = document.getElementById("1");
let btn_2 = document.getElementById("2");
let btn_3 = document.getElementById("3");
let btn_4 = document.getElementById("4");
let btn_5 = document.getElementById("5");
let btn_6 = document.getElementById("6");
let btn_7 = document.getElementById("7");
let btn_8 = document.getElementById("8");
let btn_9 = document.getElementById("9");



let turn_count = 0
function win_check() {
    if ((btn_1.innerHTML === "0" && btn_2.innerHTML === "0" && btn_3.innerHTML === "0") || 
    (btn_1.innerHTML === "X" && btn_2.innerHTML === "X" && btn_3.innerHTML === "X")) {
        if(btn_1.innerHTML === "0"){
            document.getElementById("wnner-name").textContent = document.getElementById("wgb2").textContent
            final_outcome = document.getElementById("wnner-name").textContent;
            console.log(final_outcome)
            document.getElementById("resultX").value = final_outcome;
            document.getElementById("win_modal").style.display = "block";
            document.getElementById("backdrop").style.display = "block";
        }
        else{
            document.getElementById("wnner-name").textContent = document.getElementById("wgb1").textContent
            final_outcome = document.getElementById("wnner-name").textContent;
            console.log(final_outcome)
            document.getElementById("resultX").value = final_outcome;
            document.getElementById("win_modal").style.display = "block";
            document.getElementById("backdrop").style.display = "block";
        }
    }
    else if ((btn_1.innerHTML === "0" && btn_4.innerHTML === "0" && btn_7.innerHTML === "0") || 
    (btn_1.innerHTML === "X" && btn_4.innerHTML === "X" && btn_7.innerHTML === "X")) {
        if(btn_1.innerHTML === "0"){
            document.getElementById("wnner-name").textContent = document.getElementById("wgb2").textContent
            final_outcome = document.getElementById("wnner-name").textContent;
            console.log(final_outcome)
            document.getElementById("resultX").value = final_outcome;
            document.getElementById("win_modal").style.display = "block";
            document.getElementById("backdrop").style.display = "block";
        }
        else{
            document.getElementById("wnner-name").textContent = document.getElementById("wgb1").textContent
            final_outcome = document.getElementById("wnner-name").textContent;
            console.log(final_outcome)
            document.getElementById("resultX").value = final_outcome;
            document.getElementById("win_modal").style.display = "block";
            document.getElementById("backdrop").style.display = "block";
        }
    }
    else if ((btn_1.innerHTML === "0" && btn_5.innerHTML === "0" && btn_9.innerHTML === "0") || 
    (btn_1.innerHTML === "X" && btn_5.innerHTML === "X" && btn_9.innerHTML === "X")) {
        if(btn_1.innerHTML === "0"){
            document.getElementById("wnner-name").textContent = document.getElementById("wgb2").textContent
            final_outcome = document.getElementById("wnner-name").textContent;
            console.log(final_outcome)
            document.getElementById("resultX").value = final_outcome;
            document.getElementById("backdrop").style.display = "block";
            document.getElementById("win_modal").style.display = "block";
        }
        else{
            document.getElementById("wnner-name").textContent = document.getElementById("wgb1").textContent
            final_outcome = document.getElementById("wnner-name").textContent;
            console.log(final_outcome)
            document.getElementById("resultX").value = final_outcome;
            document.getElementById("win_modal").style.display = "block";
            document.getElementById("backdrop").style.display = "block";
        }
    }
    else if ((btn_4.innerHTML === "0" && btn_5.innerHTML === "0" && btn_6.innerHTML === "0") || 
    (btn_4.innerHTML === "X" && btn_5.innerHTML === "X" && btn_6.innerHTML === "X")) {
        if(btn_4.innerHTML === "0"){
            document.getElementById("wnner-name").textContent = document.getElementById("wgb2").textContent
            final_outcome = document.getElementById("wnner-name").textContent;
            console.log(final_outcome)
            document.getElementById("resultX").value = final_outcome;
            document.getElementById("win_modal").style.display = "block";
            document.getElementById("backdrop").style.display = "block";
        }
        else{
            document.getElementById("wnner-name").textContent = document.getElementById("wgb1").textContent
            final_outcome = document.getElementById("wnner-name").textContent;
            console.log(final_outcome)
            document.getElementById("resultX").value = final_outcome;
            document.getElementById("win_modal").style.display = "block";
            document.getElementById("backdrop").style.display = "block";
        }
    }
    
    else if ((btn_7.innerHTML === "0" && btn_8.innerHTML === "0" && btn_9.innerHTML === "0") || 
    (btn_7.innerHTML === "X" && btn_8.innerHTML === "X" && btn_9.innerHTML === "X")) {
        if(btn_7.innerHTML === "0"){
            document.getElementById("wnner-name").textContent = document.getElementById("wgb2").textContent
            final_outcome = document.getElementById("wnner-name").textContent;
            console.log(final_outcome)
            document.getElementById("resultX").value = final_outcome;
            document.getElementById("win_modal").style.display = "block";
            document.getElementById("backdrop").style.display = "block";
        }
        else{
            document.getElementById("wnner-name").textContent = document.getElementById("wgb1").textContent
            final_outcome = document.getElementById("wnner-name").textContent;
            console.log(final_outcome)
            document.getElementById("resultX").value = final_outcome;
            document.getElementById("win_modal").style.display = "block";
            document.getElementById("backdrop").style.display = "block";
        }
    }
    
    else if ((btn_3.innerHTML === "0" && btn_5.innerHTML === "0" && btn_7.innerHTML === "0") || 
    (btn_3.innerHTML === "X" && btn_5.innerHTML === "X" && btn_7.innerHTML === "X")) {
        if(btn_3.innerHTML === "0"){
            document.getElementById("wnner-name").textContent = document.getElementById("wgb2").textContent
            final_outcome = document.getElementById("wnner-name").textContent;
            console.log(final_outcome)
            document.getElementById("resultX").value = final_outcome;
            document.getElementById("win_modal").style.display = "block";
            document.getElementById("backdrop").style.display = "block";
        }
        else{
            document.getElementById("wnner-name").textContent = document.getElementById("wgb1").textContent
            final_outcome = document.getElementById("wnner-name").textContent;
            console.log(final_outcome)
            document.getElementById("resultX").value = final_outcome;
            document.getElementById("win_modal").style.display = "block";
            document.getElementById("backdrop").style.display = "block";
        }
    }
    
    else if ((btn_3.innerHTML === "0" && btn_6.innerHTML === "0" && btn_9.innerHTML === "0") || 
    (btn_3.innerHTML === "X" && btn_6.innerHTML === "X" && btn_9.innerHTML === "X")) {
        if(btn_3.innerHTML === "0"){
            document.getElementById("wnner-name").textContent = document.getElementById("wgb2").textContent
            final_outcome = document.getElementById("wnner-name").textContent;
            console.log(final_outcome)
            document.getElementById("resultX").value = final_outcome;
            document.getElementById("win_modal").style.display = "block";
            document.getElementById("backdrop").style.display = "block";
        }
        else{
            document.getElementById("wnner-name").textContent = document.getElementById("wgb1").textContent
            final_outcome = document.getElementById("wnner-name").textContent;
            console.log(final_outcome)
            document.getElementById("resultX").value = final_outcome;
            document.getElementById("win_modal").style.display = "block";
            document.getElementById("backdrop").style.display = "block";
        }
    }
    else if ((btn_2.innerHTML === "0" && btn_5.innerHTML === "0" && btn_8.innerHTML === "0") || 
    (btn_2.innerHTML === "X" && btn_5.innerHTML === "X" && btn_8.innerHTML === "X")) {
        if(btn_2.innerHTML === "0"){
            document.getElementById("wnner-name").textContent = document.getElementById("wgb2").textContent;
            final_outcome = document.getElementById("wnner-name").textContent;
            console.log(final_outcome)
            document.getElementById("resultX").value = final_outcome;            
            document.getElementById("win_modal").style.display = "block";
            document.getElementById("backdrop").style.display = "block";
        }
        else{
            document.getElementById("wnner-name").textContent = document.getElementById("wgb1").textContent;
            final_outcome = document.getElementById("wnner-name").textContent;
            console.log(final_outcome)
            document.getElementById("resultX").value = final_outcome;
            document.getElementById("win_modal").style.display = "block";
            document.getElementById("backdrop").style.display = "block";
        }
    }
}
function marker1() {
    const sym = btn_1.innerHTML = first_symbol;
    if (first_symbol == "X") {
        first_symbol = "0";
    }
    else {
        first_symbol = "X"
    }
    turn_count += 1
    win_check();
}

function marker2() {
    const sym = btn_2.innerHTML = first_symbol;
    if (first_symbol == "X") {
        first_symbol = "0";
    }
    else {
        first_symbol = "X"
    }
    turn_count += 1
    win_check();
}

function marker3() {
    const sym = btn_3.innerHTML = first_symbol;
    if (first_symbol == "X") {
        first_symbol = "0";
    }
    else {
        first_symbol = "X"
    }
    turn_count += 1
    win_check();
}

function marker4() {
    const sym = btn_4.innerHTML = first_symbol;
    if (first_symbol == "X") {
        first_symbol = "0";
    }
    else {
        first_symbol = "X"
    }
    turn_count += 1
    win_check();
}

function marker5() {
    const sym = btn_5.innerHTML = first_symbol;
    if (first_symbol == "X") {
        first_symbol = "0";
    }
    else {
        first_symbol = "X"
    }
    turn_count += 1
    win_check();
}

function marker6() {
    const sym = btn_6.innerHTML = first_symbol;
    if (first_symbol == "X") {
        first_symbol = "0";
    }
    else {
        first_symbol = "X"
    }
    turn_count += 1
    win_check();
}

function marker7() {
    const sym = btn_7.innerHTML = first_symbol;
    if (first_symbol == "X") {
        first_symbol = "0";
    }
    else {
        first_symbol = "X"
    }
    turn_count += 1
    win_check();
}

function marker8() {
    const sym = btn_8.innerHTML = first_symbol;
    if (first_symbol == "X") {
        first_symbol = "0";
    }
    else {
        first_symbol = "X"
    }
    turn_count += 1
    win_check();
}

function marker9() {
    const sym = btn_9.innerHTML = first_symbol;
    if (first_symbol == "X") {
        first_symbol = "0";
    }
    else {
        first_symbol = "X"
    }
    turn_count += 1
    win_check();
}

btn_1.addEventListener('click', marker1)
btn_2.addEventListener('click', marker2)
btn_3.addEventListener('click', marker3)
btn_4.addEventListener('click', marker4)
btn_5.addEventListener('click', marker5)
btn_6.addEventListener('click', marker6)
btn_7.addEventListener('click', marker7)
btn_8.addEventListener('click', marker8)
btn_9.addEventListener('click', marker9)



function store_players(){
    document.getElementById("p1").value = player1_name;
    document.getElementById("p2").value = player2_name;
    console.log(final_outcome);
}

let result = document.getElementById("result-btn");
result.addEventListener('click',store_players);