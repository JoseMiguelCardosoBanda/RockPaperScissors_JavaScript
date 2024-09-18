const args = process.argv.slice(2);

if(args[0] === undefined){
    console.log("There are no moves to play");
    return;
}

const readline = require("readline-sync");
var Table = require('cli-table');
const crypto = require("crypto");
let pcMove = Math.floor((Math.random() * args.length) + 1);
let size = args.length;
let cycle = args.length-1;
let key = '';
let hmac = '';

function startGame(){
    console.log("Select an option");
    genHmac();
    moveList();
    const option = readline.question("Your move: ");
    menuOptions(option);
}

function genHmac(){
    key = crypto.createHash('sha3-256').update(args[pcMove-1]).digest('hex');
    hmac = crypto.createHmac('sha256',key).update(args[pcMove-1]).digest('hex');
    console.log('HMAC: '+ hmac);
}

function moveList(){
    let n = 1;
    args.forEach(element => {
        console.log(n + " - " + element);
        n++;
    });
    console.log("0 - exit");
    console.log("? - help");
}

function menuOptions(op){
    switch(op){
        case "?":
            console.log("Your move is: help");
            showTable();
            break;
        case "0":
            console.log("Your move is: exit");
            console.log("Closing game...");
            process.exit(0);
        default:
            console.log("Your move is: " + args[op-1]);
            let p = Math.floor(size/2);
            let result = Math.sign((op - pcMove + p + size) % size - p);
            if(op > size || op === ""){
                console.log("ERROR!! Invalid Move, Try Using a Listed Move");
                startGame();
            }else if(result == 1){
                console.log("Computer Move: " + args[pcMove-1]);
                console.log("You Win!!!");
                console.log("HMAC Key: "+ key);
                console.log("If you want to validate de PC's choice, go to: https://www.devglan.com/online-tools/hmac-sha256-online");
            }else if(result == -1){
                console.log("Computer Move: " + args[pcMove-1]);
                console.log("You Lose...");
                console.log("HMAC Key: "+ key);
                console.log("If you want to validate de PC's choice, go to: https://www.devglan.com/online-tools/hmac-sha256-online");
            }else{
                console.log("Computer Move: " + args[pcMove-1]);
                console.log("It's a Draw");
                console.log("HMAC Key: "+ key);
                console.log("If you want to validate de PC's choice, go to: https://www.devglan.com/online-tools/hmac-sha256-online");
            }
    }
}

function showTable(){
    let form = Math.floor(size/2);
    let header = ['v PC / User >'];
    args.forEach(e => {
        header.push(e);
    })
    var table = new Table({
        head: header
    });
    for(let i = 0; i <= cycle; i++){
        let conditions = [];
        for(let j = 0; j <= cycle; j++){
            let calc = Math.sign((j - i + form + size) % size - form);
            if(calc == 1){
                conditions.push("Win");
            }else if(calc == -1){
                conditions.push("Lose");
            }else{
                conditions.push("Draw");
            }
            if(j == cycle){
                table.push(
                    {[args[i]]: conditions}
                );
            }
        }
    }
    console.log(table.toString());
    startGame();
}

startGame();