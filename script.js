let a = document.getElementsByClassName('container');
let b = document.getElementById('mode');
let c = document.getElementsByClassName('select');
let s = document.getElementById('0');
let X = document.getElementById('X');
let button = document.getElementById('button');

let s1 = 0;
let x1 = 0;

let flag = false;
let stop = false;
let func = false;


let updateScore = ()=>{
    if((a[0].innerHTML == '0' && a[3].innerHTML == '0' && a[6].innerHTML == '0') || (a[1].innerHTML == '0' && a[4].innerHTML == '0' && a[7].innerHTML == '0') || (a[2].innerHTML == '0' && a[5].innerHTML == '0' && a[8].innerHTML == '0') || (a[0].innerHTML == '0' && a[4].innerHTML == '0' && a[8].innerHTML == '0') || (a[2].innerHTML == '0' && a[4].innerHTML == '0' && a[6].innerHTML == '0')|| (a[0].innerHTML == '0' && a[1].innerHTML == '0' && a[2].innerHTML == '0') || (a[3].innerHTML == '0' && a[4].innerHTML == '0' && a[5].innerHTML == '0') || (a[6].innerHTML == '0' && a[7].innerHTML == '0' && a[8].innerHTML == '0')) {
        if(!stop){
        s1+=1
        }
        s.innerHTML = `Score_0 : ${s1}`;
        stop = true;
    } else if((a[0].innerHTML == 'X' && a[3].innerHTML == 'X' && a[6].innerHTML == 'X') || (a[1].innerHTML == 'X' && a[4].innerHTML == 'X' && a[7].innerHTML == 'X') || (a[2].innerHTML == 'X' && a[5].innerHTML == 'X' && a[8].innerHTML == 'X') || (a[0].innerHTML == 'X' && a[4].innerHTML == 'X' && a[8].innerHTML == 'X') || (a[2].innerHTML == 'X' && a[4].innerHTML == 'X' && a[6].innerHTML == 'X') || (a[0].innerHTML == 'X' && a[1].innerHTML == 'X' && a[2].innerHTML == 'X') || (a[3].innerHTML == 'X' && a[4].innerHTML == 'X' && a[5].innerHTML == 'X') || (a[6].innerHTML == 'X' && a[7].innerHTML == 'X' && a[8].innerHTML == 'X')){
        if(!stop){
        x1+=1
        }
        X.innerHTML = `Score_X : ${x1}`;
        stop = true;
    }
}

let friend = () => {
    a[0].addEventListener('click', () => {
        if (a[0].innerHTML == "" && !stop) {
            if (!flag) {
                a[0].innerHTML = "0";
                flag = !flag;
            } else {
                a[0].innerHTML = "X";
                flag = !flag;
            }
        }
        updateScore();

    })

    a[1].addEventListener('click', () => {
        if (a[1].innerHTML == "" && !stop) {
            if (!flag) {
                a[1].innerHTML = "0";
                flag = !flag;
            } else {
                a[1].innerHTML = "X";
                flag = !flag;
            }
        }
        updateScore();

    })

    a[2].addEventListener('click', () => {
        if (a[2].innerHTML == "" && !stop) {
            if (!flag) {
                a[2].innerHTML = "0";
                flag = !flag;
            } else {
                a[2].innerHTML = "X";
                flag = !flag;
            }
        }
        updateScore();

    })

    a[3].addEventListener('click', () => {
        if (a[3].innerHTML == "" && !stop) {
            if (!flag) {
                a[3].innerHTML = "0";
                flag = !flag;
            } else {
                a[3].innerHTML = "X";
                flag = !flag;
            }
        }
        updateScore();

    })

    a[4].addEventListener('click', () => {
        if (a[4].innerHTML == "" && !stop) {
            if (!flag) {
                a[4].innerHTML = "0";
                flag = !flag;
            } else {
                a[4].innerHTML = "X";
                flag = !flag;
            }
        }
        updateScore();

    })

    a[5].addEventListener('click', () => {
        if (a[5].innerHTML == "" && !stop) {
            if (!flag) {
                a[5].innerHTML = "0";
                flag = !flag;
            } else {
                a[5].innerHTML = "X";
                flag = !flag;
            }
        }
        updateScore();

    })

    a[6].addEventListener('click', () => {
        if (a[6].innerHTML == "" && !stop) {
            if (!flag) {
                a[6].innerHTML = "0";
                flag = !flag;
            } else {
                a[6].innerHTML = "X";
                flag = !flag;
            }
        }
        updateScore();

    })

    a[7].addEventListener('click', () => {
        if (a[7].innerHTML == "" && !stop) {
            if (!flag) {
                a[7].innerHTML = "0";
                flag = !flag;
            } else {
                a[7].innerHTML = "X";
                flag = !flag;
            }
        }
        updateScore();

    })

    a[8].addEventListener('click', () => {
        if (a[8].innerHTML == "" && !stop) {
            if (!flag) {
                a[8].innerHTML = "0";
                flag = !flag;
            } else {
                a[8].innerHTML = "X";
                flag = !flag;
            }
        }
        updateScore();

    })
}

let arr = [];
let x;

let random = ()=>{
    x = Math.round(Math.random()*8)
}

let ai = ()=>{
    a[0].addEventListener('click', () => {
        arr.push(0);
        if (a[0].innerHTML == "" && !stop) {
            if (!flag) {
                a[0].innerHTML = "0";
                random();
                if(a[0].innerHTML== "" || a[1].innerHTML== "" || a[2].innerHTML== "" || a[3].innerHTML== "" || a[4].innerHTML== "" || a[5].innerHTML== "" || a[6].innerHTML== "" || a[7].innerHTML== "" || a[8].innerHTML== "") {
                while(arr[0] == x ||arr[1] == x || arr[2] == x || arr[3] == x || arr[4] == x || arr[5] == x || arr[6] == x || arr[7] == x || arr[8] == x) {
                    random();
                }
            }
            updateScore();
            if(!stop) {
                a[x].innerHTML = "X";
            }
                arr.push(x);
            }
        }
        updateScore();

    })

    a[1].addEventListener('click', () => {
        arr.push(1);
        if (a[1].innerHTML == "" && !stop) {
            if (!flag) {
                a[1].innerHTML = "0";
                random();
                if(a[0].innerHTML== "" || a[1].innerHTML== "" || a[2].innerHTML== "" || a[3].innerHTML== "" || a[4].innerHTML== "" || a[5].innerHTML== "" || a[6].innerHTML== "" || a[7].innerHTML== "" || a[8].innerHTML== "") {
                while(arr[0] == x ||arr[1] == x || arr[2] == x || arr[3] == x || arr[4] == x || arr[5] == x || arr[6] == x || arr[7] == x || arr[8] == x) {
                    random();
                }
            }
            updateScore();
            if(!stop) {
                    a[x].innerHTML = "X";
            }
                arr.push(x);
            }
        }
        updateScore();

    })

    a[2].addEventListener('click', () => {
        arr.push(2);
        if (a[2].innerHTML == "" && !stop) {
            if (!flag) {
                a[2].innerHTML = "0";
                random();
                if(a[0].innerHTML== "" || a[1].innerHTML== "" || a[2].innerHTML== "" || a[3].innerHTML== "" || a[4].innerHTML== "" || a[5].innerHTML== "" || a[6].innerHTML== "" || a[7].innerHTML== "" || a[8].innerHTML== "") {
                while(arr[0] == x ||arr[1] == x || arr[2] == x || arr[3] == x || arr[4] == x || arr[5] == x || arr[6] == x || arr[7] == x || arr[8] == x) {
                    random();
                }
            }
            updateScore();
            if(!stop) {
                a[x].innerHTML = "X";
            }
                arr.push(x);
            }
        }
        updateScore();

    })

    a[3].addEventListener('click', () => {
        arr.push(3);
        if (a[3].innerHTML == "" && !stop) {
            if (!flag) {
                a[3].innerHTML = "0";
                random();
                if(a[0].innerHTML== "" || a[1].innerHTML== "" || a[2].innerHTML== "" || a[3].innerHTML== "" || a[4].innerHTML== "" || a[5].innerHTML== "" || a[6].innerHTML== "" || a[7].innerHTML== "" || a[8].innerHTML== "") {
                while(arr[0] == x ||arr[1] == x || arr[2] == x || arr[3] == x || arr[4] == x || arr[5] == x || arr[6] == x || arr[7] == x || arr[8] == x) {
                    random();
                }
            }
            updateScore();
            if(!stop) {
                a[x].innerHTML = "X";
            }
                arr.push(x);
            }
        }
        updateScore();

    })

    a[4].addEventListener('click', () => {
        arr.push(4);
        if (a[4].innerHTML == "" && !stop) {
            if (!flag) {
                a[4].innerHTML = "0";
                random();
                if(a[0].innerHTML== "" || a[1].innerHTML== "" || a[2].innerHTML== "" || a[3].innerHTML== "" || a[4].innerHTML== "" || a[5].innerHTML== "" || a[6].innerHTML== "" || a[7].innerHTML== "" || a[8].innerHTML== "") {
                while(arr[0] == x ||arr[1] == x || arr[2] == x || arr[3] == x || arr[4] == x || arr[5] == x || arr[6] == x || arr[7] == x || arr[8] == x) {
                    random();
                }
            }
            updateScore();
            if(!stop) {
                a[x].innerHTML = "X";
            }
                arr.push(x);
            }
        }
        updateScore();

    })

    a[5].addEventListener('click', () => {
        arr.push(5);
        if (a[5].innerHTML == "" && !stop) {
            if (!flag) {
                a[5].innerHTML = "0";
                random();
                if(a[0].innerHTML== "" || a[1].innerHTML== "" || a[2].innerHTML== "" || a[3].innerHTML== "" || a[4].innerHTML== "" || a[5].innerHTML== "" || a[6].innerHTML== "" || a[7].innerHTML== "" || a[8].innerHTML== "") {
                while(arr[0] == x ||arr[1] == x || arr[2] == x || arr[3] == x || arr[4] == x || arr[5] == x || arr[6] == x || arr[7] == x || arr[8] == x) {
                    random();
                }
            }
            updateScore();
            if(!stop) {
                a[x].innerHTML = "X";
            }
                arr.push(x);
            }
        }
        updateScore();

    })

    a[6].addEventListener('click', () => {
        arr.push(6);
        if (a[6].innerHTML == "" && !stop) {
            if (!flag) {
                a[6].innerHTML = "0";
                random();
                if(a[0].innerHTML== "" || a[1].innerHTML== "" || a[2].innerHTML== "" || a[3].innerHTML== "" || a[4].innerHTML== "" || a[5].innerHTML== "" || a[6].innerHTML== "" || a[7].innerHTML== "" || a[8].innerHTML== "") {
                while(arr[0] == x ||arr[1] == x || arr[2] == x || arr[3] == x || arr[4] == x || arr[5] == x || arr[6] == x || arr[7] == x || arr[8] == x) {
                    random();
                }
            }
            updateScore();
            if(!stop) {
                a[x].innerHTML = "X";
            }
                arr.push(x);
            }
        }
        updateScore();

    })

    a[7].addEventListener('click', () => {
        arr.push(7);
        if (a[7].innerHTML == "" && !stop) {
            if (!flag) {
                a[7].innerHTML = "0";
                random();
                if(a[0].innerHTML== "" || a[1].innerHTML== "" || a[2].innerHTML== "" || a[3].innerHTML== "" || a[4].innerHTML== "" || a[5].innerHTML== "" || a[6].innerHTML== "" || a[7].innerHTML== "" || a[8].innerHTML== "") {
                while(arr[0] == x ||arr[1] == x || arr[2] == x || arr[3] == x || arr[4] == x || arr[5] == x || arr[6] == x || arr[7] == x || arr[8] == x) {
                    random();
                }
            }
            updateScore();
            if(!stop) {
                a[x].innerHTML = "X";
            }
                arr.push(x);
            }
        }
        updateScore();

    })

    a[8].addEventListener('click', () => {
        arr.push(8);
        if (a[8].innerHTML == "" && !stop) {
            if (!flag) {
                a[8].innerHTML = "0";
                random();
                if(a[0].innerHTML== "" || a[1].innerHTML== "" || a[2].innerHTML== "" || a[3].innerHTML== "" || a[4].innerHTML== "" || a[5].innerHTML== "" || a[6].innerHTML== "" || a[7].innerHTML== "" || a[8].innerHTML== "") {
                while(arr[0] == x ||arr[1] == x || arr[2] == x || arr[3] == x || arr[4] == x || arr[5] == x || arr[6] == x || arr[7] == x || arr[8] == x) {
                    random();
                }
            }
            updateScore();
            if(!stop) {
                a[x].innerHTML = "X";
            }
                arr.push(x);
            }
        }
        updateScore();

    })
}

c[0].addEventListener('click', ()=>{
    b.style.display = "none";
        ai();
    
})

c[1].addEventListener('click', ()=>{
    b.style.display = "none";
        friend();
})

button.addEventListener('click',()=>{
    a[0].innerHTML = "";
    a[1].innerHTML = "";
    a[2].innerHTML = "";
    a[3].innerHTML = "";
    a[4].innerHTML = "";
    a[5].innerHTML = "";
    a[6].innerHTML = "";
    a[7].innerHTML = "";
    a[8].innerHTML = "";

    stop = false;
    flag = false;
    arr = [];
})