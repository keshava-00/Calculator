
let result = document.getElementById('resultInput');

let btns = document.getElementById('btnsBox');

btns.addEventListener("click",(event)=>{
    
    let tar = event.target.innerText;
    switch(tar){
        case 'Ac': emptyOutput();
        break;

        case "⌫": popOutput();
        break;

        case "😉": console.log("nothing work");
        break;

        case '=': resultOutput();
        break;

        default: result.value+=tar;
        break;
    }
})


function emptyOutput(){
    result.value = '';
}

function popOutput(){
    let str = result.value;
    console.log(str);
    result.value = str.slice(0,-1);
}

function resultOutput(){
    let str = result.value;
    let res = eval(str);
    result.value = res;
}

