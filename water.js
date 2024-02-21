let w1 = document.querySelector(".w1");
let w2 = document.querySelector(".w2");
let w3 = document.querySelector(".w3");
let w4 = document.querySelector(".w4");
let w5 = document.querySelector(".w5");
let w6 = document.querySelector(".w6");
const waters = [w1, w2, w3, w4, w5, w6];
let plus = document.querySelector(".plus");
let parm = document.querySelector(".parm");
let pmid = document.querySelector(".pmid");
let minus = document.querySelector(".minus");
let txt = document.querySelector(".txt");
let x;
const head = document.querySelector(".head");
let curcolor = "rgb(77, 134, 191)";
let curcover = "rgb(132, 164, 197)";
let nocolor = "rgb(31, 31, 31)";
let bottle = document.querySelector(".bottle");
let popup = document.querySelector(".popup");
let close = document.querySelector(".close");
let apply = document.querySelector(".apply");
let wc1 = document.querySelector(".wc1");
let wc2 = document.querySelector(".wc2");
let wc3 = document.querySelector(".wc3");
let wc4 = document.querySelector(".wc4");
const waterc = [wc1, wc2, wc3, wc4];
let gc1 = document.querySelector(".gc1");
let gc2 = document.querySelector(".gc2");
let gc3 = document.querySelector(".gc3");
let gc4 = document.querySelector(".gc4");
const glassc = [gc1, gc2, gc3, gc4];
let bc1 = document.querySelector(".bc1");
let bc2 = document.querySelector(".bc2");
let bc3 = document.querySelector(".bc3");
let bc4 = document.querySelector(".bc4");
const backc = [bc1, bc2, bc3, bc4];
let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let bot = document.querySelector(".bot");
var clock = document.querySelector(".clock");
let custom = document.querySelector(".custom");

let buttons = document.querySelector(".buttons");
document.body.style.backgroundColor = nocolor;
document.body.style.transform = "scale(0)";
plus.style.borderColor = nocolor;
minus.style.borderColor = nocolor;

var storedData = localStorage.getItem('userData');
var storedDataw6 = localStorage.getItem('userDataw6');
var storedDataw5 = localStorage.getItem('userDataw5');
var storedDataw4 = localStorage.getItem('userDataw4');
var storedDataw3 = localStorage.getItem('userDataw3');
var storedDataw2 = localStorage.getItem('userDataw2');
var storedDataw1 = localStorage.getItem('userDataw1');
var storedDatacur = localStorage.getItem('userCur');
var storedDataA1 = localStorage.getItem('userA1');
var storedDataA2 = localStorage.getItem('userA2');
var storedDataBot = localStorage.getItem('userBot');
var storedDataBack = localStorage.getItem('userBack');
var storedDataNo = localStorage.getItem('userNo');

if (storedData) {
    if (storedData == "0") {
        x = 0;
    }
    else if (storedData == "500") {
        x = 500;
    }
    else if (storedData == "1000") {
        x = 1000;
    }
    else if (storedData == "1500") {
        x = 1500;
    }
    else if (storedData == "2000") {
        x = 2000;
    }
    else if (storedData == "2500") {
        x = 2500;
    }
    else if (storedData == "3000") {
        x = 3000;
    }
    else {
        x = 0;
    }
    txt.textContent = x + "ML";
}
else {
    x = 0;
    txt.textContent = x + "ML";
}
if (storedDataw6) {
    w6.style.backgroundColor = storedDataw6;
}
if (storedDataw5) {
    w5.style.backgroundColor = storedDataw5;
}
if (storedDataw4) {
    w4.style.backgroundColor = storedDataw4;
}
if (storedDataw3) {
    w3.style.backgroundColor = storedDataw3;
}
if (storedDataw2) {
    w2.style.backgroundColor = storedDataw2;
}
if (storedDataw1) {
    w1.style.backgroundColor = storedDataw1;
}
if (storedDatacur) {
    curcolor = storedDatacur;
}
if (storedDataA1) {
    a1.style.backgroundColor = storedDataA1;
}
if (storedDataA2) {
    a2.style.backgroundColor = storedDataA1;
}
if (storedDataBot) {
    bot.style.backgroundColor = storedDataA1;
}
if (storedDataBack) {
    document.body.style.backgroundColor = storedDataBack;
}
if (storedDataNo) {
    nocolor = storedDataNo;
}
plus.style.borderColor = nocolor;
minus.style.borderColor = nocolor;
custom.style.borderColor = nocolor;

this.addEventListener('load', function (event) {
    const bodyanim = document.body.animate(
        [
            {
                transform: "scale(0)"
            },
            {
                transform: "scale(0.1)"
            },
            {
                transform: "scale(0.2)"
            },
            {
                transform: "scale(0.3)"
            },
            {
                transform: "scale(0.4)"
            },
            {
                transform: "scale(0.5)"
            },
            {
                transform: "scale(0.6)"
            },
            {
                transform: "scale(0.7)"
            },
            {
                transform: "scale(0.8)"
            },
            {
                transform: "scale(0.9)"
            },
            {
                transform: "scale(1)"
            },
        ],
        {
            duration: 300,
            easing: "linear",
        }
    );
    bodyanim.addEventListener('finish', function (event) {
        document.body.style.transform = "scale(1)";
    });
});


// function bottleover() {
//     if (curcolor === window.getComputedStyle(wc1).backgroundColor) {
//         curcover = "rgb(119, 167, 214)";
//     }
//     else if (curcolor === window.getComputedStyle(wc2).backgroundColor) {
//         curcover = "rgb(255, 229, 145)";
//     }
//     else if (curcolor === window.getComputedStyle(wc3).backgroundColor) {
//         curcover = "rgb(85, 63, 59)";
//     }
//     else if (curcolor === window.getComputedStyle(wc4).backgroundColor) {
//         curcover = "rgb(175, 175, 175)";
//     }
//     waters.forEach(item => {
//         if (window.getComputedStyle(item).backgroundColor === curcolor) {
//             const itemover = item.animate(
//                 [
//                     {
//                         backgroundColor: curcolor
//                     },
//                     {
//                         backgroundColor: curcover
//                     },
//                 ],
//                 {
//                     duration: 250,
//                     easing: "linear",
//                 }
//             );
//             itemover.addEventListener('finish', function (event) {
//                 item.style.backgroundColor = curcover;
//             });
//             itemover.addEventListener('cancel', function (event) {
//                 item.style.backgroundColor = curcover;
//             });
//         }
//     });
// }

// function bottleout() {
//     waters.forEach(item => {
//         if (window.getComputedStyle(item).backgroundColor === curcover) {
//             const itemout = item.animate(
//                 [
//                     {
//                         backgroundColor: curcover
//                     },
//                     {
//                         backgroundColor: curcolor
//                     },
//                 ],
//                 {
//                     duration: 250,
//                     easing: "linear",
//                 }
//             );
//             itemout.addEventListener('finish', function (event) {
//                 item.style.backgroundColor = curcolor;
//             });
//             itemout.addEventListener('cancel', function (event) {
//                 item.style.backgroundColor = curcolor;
//             });
//         }
//     });
// }

function mesplus() {
    const mes = document.createElement("div");
    head.prepend(mes);
    mes.style.width = "50px";
    mes.style.height = "20px";
    mes.style.backgroundColor = nocolor;
    mes.style.alignSelf = "flex-end";
    mes.style.borderRadius = "7px";
    mes.style.border = "solid 2px";
    mes.style.color = nocolor;
    mes.style.fontSize = "17px";
    mes.style.textAlign = "center";
    mes.style.position = "absolute";
    mes.textContent = "+500";
    if (document.body.clientHeight <= 600) {
        mes.style.left = "790px";
        const mesanim = mes.animate(
            [
                {
                    top: "70px"
                },
                {
                    top: "95px",
                    color: "#8dea84",
                    borderColor: "#8dea84"
                },
                {
                    top: "120px",
                    color: nocolor,
                    borderColor: nocolor
                },
            ],
            {
                duration: 700,
                easing: "linear",
            }
        );

        mesanim.addEventListener('finish', function (event) {
            mes.remove();
        });
        mesanim.addEventListener('cancel', function (event) {
            mes.remove();
        });
    }
    else {
        mes.style.left = "";
        const mesanim = mes.animate(
            [
                {
                    top: "130px"
                },
                {
                    top: "155px",
                    color: "#8dea84",
                    borderColor: "#8dea84"
                },
                {
                    top: "180px",
                    color: nocolor,
                    borderColor: nocolor
                },
            ],
            {
                duration: 700,
                easing: "linear",
            }
        );

        mesanim.addEventListener('finish', function (event) {
            mes.remove();
        });
        mesanim.addEventListener('cancel', function (event) {
            mes.remove();
        });
    }

}

function mesminus() {
    const mes = document.createElement("div");
    head.prepend(mes);
    mes.style.width = "50px";
    mes.style.height = "20px";
    mes.style.backgroundColor = nocolor;
    mes.style.alignSelf = "flex-end";
    mes.style.borderRadius = "7px";
    mes.style.border = "solid 2px";
    mes.style.color = nocolor;
    mes.style.fontSize = "17px";
    mes.style.textAlign = "center";
    mes.style.position = "absolute";
    mes.textContent = "-500";
    if (document.body.clientHeight <= 600) {
        mes.style.left = "790px";
        const mesanim = mes.animate(
            [
                {
                    top: "70px"
                },
                {
                    top: "95px",
                    color: "#ee827c",
                    borderColor: "#ee827c"
                },
                {
                    top: "120px",
                    color: nocolor,
                    borderColor: nocolor
                },
            ],
            {
                duration: 700,
                easing: "linear",
            }
        );
        mesanim.addEventListener('finish', function (event) {
            mes.remove();
        });
        mesanim.addEventListener('cancel', function (event) {
            mes.remove();
        });
    }

    else {
        mes.style.left = "";
        const mesanim = mes.animate(
            [
                {
                    top: "130px"
                },
                {
                    top: "155px",
                    color: "#ee827c",
                    borderColor: "#ee827c"
                },
                {
                    top: "180px",
                    color: nocolor,
                    borderColor: nocolor
                },
            ],
            {
                duration: 700,
                easing: "linear",
            }
        );
        mesanim.addEventListener('finish', function (event) {
            mes.remove();
        });
        mesanim.addEventListener('cancel', function (event) {
            mes.remove();
        });
    }

}

function plusover() {
    const plusanims = plus.animate(
        [
            {
                borderColor: nocolor
            },
            {
                borderColor: "#dd7f7fbb"
            },
        ],
        {
            duration: 300,
            easing: "linear",
        }
    );
    plusanims.addEventListener('finish', function (event) {
        plus.style.borderColor = "#dd7f7fbb";
    });
}
function plusout() {
    const plusanims = plus.animate(
        [
            {
                borderColor: "#dd7f7fbb"
            },
            {
                borderColor: nocolor
            },
        ],
        {
            duration: 300,
            easing: "linear",
        }
    );
    plusanims.addEventListener('finish', function (event) {
        plus.style.borderColor = nocolor;
    });
}

function minusover() {
    const minusanims = minus.animate(
        [
            {
                borderColor: nocolor
            },
            {
                borderColor: "#34495e"
            },
        ],
        {
            duration: 300,
            easing: "linear",
        }
    );
    minusanims.addEventListener('finish', function (event) {
        minus.style.borderColor = "#34495e";
    });
}
function minusout() {
    const minusanims = minus.animate(
        [
            {
                borderColor: "#34495e"
            },
            {
                borderColor: nocolor
            },
        ],
        {
            duration: 300,
            easing: "linear",
        }
    );
    minusanims.addEventListener('finish', function (event) {
        minus.style.borderColor = nocolor;
    });
}

function localsave() {
    var inputData = x;
    var inputW6 = w6.style.backgroundColor;
    var inputW5 = w5.style.backgroundColor;
    var inputW4 = w4.style.backgroundColor;
    var inputW3 = w3.style.backgroundColor;
    var inputW2 = w2.style.backgroundColor;
    var inputW1 = w1.style.backgroundColor;
    localStorage.setItem('userData', inputData);
    localStorage.setItem('userDataw6', inputW6);
    localStorage.setItem('userDataw5', inputW5);
    localStorage.setItem('userDataw4', inputW4);
    localStorage.setItem('userDataw3', inputW3);
    localStorage.setItem('userDataw2', inputW2);
    localStorage.setItem('userDataw1', inputW1);
}

function popupopen() {
    // bottleout();
    bottle.style.pointerEvents = "none";
    popup.style.visibility = "visible";
    const popanim = popup.animate(
        [
            {
                transform: "scale(0)"
            },
            {
                transform: "scale(0.1)"
            },
            {
                transform: "scale(0.2)"
            },
            {
                transform: "scale(0.3)"
            },
            {
                transform: "scale(0.4)"
            },
            {
                transform: "scale(0.5)"
            },
            {
                transform: "scale(0.6)"
            },
            {
                transform: "scale(0.7)"
            },
            {
                transform: "scale(0.8)"
            },
            {
                transform: "scale(0.9)"
            },
            {
                transform: "scale(1)"
            },
        ],
        {
            duration: 200,
            easing: "linear",
        }
    );
    popanim.addEventListener('finish', function (event) {
        popup.style.transform = "scale(1)";
        bottle.style.pointerEvents = "all";
    });
}
function popupclose() {
    const popclose = popup.animate(
        [
            {
                transform: "scale(1)"
            },
            {
                transform: "scale(0.9)"
            },
            {
                transform: "scale(0.8)"
            },
            {
                transform: "scale(0.7)"
            },
            {
                transform: "scale(0.6)"
            },
            {
                transform: "scale(0.5)"
            },
            {
                transform: "scale(0.4)"
            },
            {
                transform: "scale(0.3)"
            },
            {
                transform: "scale(0.2)"
            },
            {
                transform: "scale(0.1)"
            },
            {
                transform: "scale(0)"
            },
        ],
        {
            duration: 200,
            easing: "linear",
        }
    );
    popclose.addEventListener('finish', function (event) {
        popup.style.transform = "scale(0)";
        popup.style.visibility = "hidden";
    });
}

function plusFun() {
    for (let i = 5; i >= 0; i -= 1) {
        if (x == 3000) { break; }
        if (window.getComputedStyle(waters[i]).backgroundColor === nocolor) {
            plus.style.pointerEvents = "none";
            x += 500;
            waters[i].style.height = "0px";
            waters[i].style.backgroundColor = curcolor;
            const wplus = waters[i].animate(
                [
                    {
                        height: "0px"
                    },
                    {
                        height: "50px"
                    },
                ],
                {
                    duration: 200,
                    easing: "linear",
                }
            );
            wplus.addEventListener('finish', function (event) {
                waters[i].style.height = "50px";
                waters[i].style.backgroundColor = curcolor;
                plus.style.pointerEvents = "all";
            });

            wplus.addEventListener('cancel', function (event) {
                waters[i].style.height = "50px";
                waters[i].style.backgroundColor = curcolor;
                plus.style.pointerEvents = "all";
            });
            mesplus();
            txt.textContent = x + "ML";
            localsave();
            break;
        }
    }
}
function minusFun() {
    for (let i = 0; 0 <= 5; i += 1) {
        if (x == 0) { break; }
        if (window.getComputedStyle(waters[i]).backgroundColor === curcolor) {
            minus.style.pointerEvents = "none";
            x -= 500;
            const wform = waters[i].animate(
                [
                    {
                        height: "50px"
                    },
                    {
                        height: "0px"
                    },
                ],
                {
                    duration: 200,
                    easing: "linear",
                }
            );
            wform.addEventListener('finish', function (event) {
                waters[i].style.backgroundColor = nocolor;
                minus.style.pointerEvents = "all";
                localsave();
            });
            wform.addEventListener('cancel', function (event) {
                waters[i].style.backgroundColor = nocolor;
                minus.style.pointerEvents = "all";
                localsave();
            });
            mesminus();
            txt.textContent = x + "ML";
            break;

        }

    }
}

function reset() {
    waters.forEach(item => {
        item.style.backgroundColor = nocolor;
        x = 0;
        txt.textContent = x + "ML";
        localsave();
    });
}

function cusover() {
    const cusoveran = custom.animate(
        [
            {
                borderColor: nocolor
            },
            {
                borderColor: "#dd7f7fbb"
            }
        ],
        {
            duration: 300,
            easing: "linear",
        }
    );
    cusoveran.addEventListener('finish', function (event) {
        custom.style.borderColor = "#dd7f7fbb";
    });
}
function cusout() {
    const cusoveran = custom.animate(
        [
            {
                borderColor: "#dd7f7fbb"
            },
            {
                borderColor: nocolor
            }
        ],
        {
            duration: 300,
            easing: "linear",
        }
    );
    cusoveran.addEventListener('finish', function (event) {
        custom.style.borderColor = nocolor;
    });
}

var isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
if (isMobile) {
    // Mobile device
    custom.addEventListener('touchstart', function (event) {
        cusover();
        popupopen();
    });
    custom.addEventListener('touchend', function (event) {
        cusout();
    });
    close.addEventListener('touchstart', function (event) {
        popupclose();
    });

    plus.addEventListener('touchstart', function (event) {
        plusover();
        plusFun();
    });
    plus.addEventListener('touchend', function (event) {
        plusout();
    });
    minus.addEventListener('touchstart', function (event) {
        minusover();
        minusFun();
    });
    minus.addEventListener('touchend', function (event) {
        minusout();
    });
} else {
    // Desktop
    custom.addEventListener('mousedown', function (event) {
        popupopen();
    });
    close.addEventListener('mousedown', function (event) {
        popupclose();
    });

    plus.addEventListener('mouseover', function (event) {
        plusover();
    });
    plus.addEventListener('mouseout', function (event) {
        plusout();
    });
    minus.addEventListener('mouseover', function (event) {
        minusover();
    });
    minus.addEventListener('mouseout', function (event) {
        minusout();
    });

    plus.addEventListener('mousedown', function (event) {
        plusFun();
    });

    minus.addEventListener('mousedown', function (event) {
        minusFun();
    });

    custom.addEventListener('mouseover', cusover);
    custom.addEventListener('mouseout', cusout);
}


apply.addEventListener('mousedown', function (event) {
    waterc.forEach(item => {
        if (item.style.border === "4px solid rgb(165, 165, 165)") {
            waters.forEach(item2 => {
                if (item2.style.backgroundColor === curcolor) {
                    item2.style.backgroundColor = window.getComputedStyle(item).backgroundColor;
                }

            });
            curcolor = window.getComputedStyle(item).backgroundColor;

            var inputCur = curcolor;
            var inputW6 = w6.style.backgroundColor;
            var inputW5 = w5.style.backgroundColor;
            var inputW4 = w4.style.backgroundColor;
            var inputW3 = w3.style.backgroundColor;
            var inputW2 = w2.style.backgroundColor;
            var inputW1 = w1.style.backgroundColor;
            localStorage.setItem('userCur', inputCur);
            localStorage.setItem('userDataw6', inputW6);
            localStorage.setItem('userDataw5', inputW5);
            localStorage.setItem('userDataw4', inputW4);
            localStorage.setItem('userDataw3', inputW3);
            localStorage.setItem('userDataw2', inputW2);
            localStorage.setItem('userDataw1', inputW1);
        }
    });
    glassc.forEach(item => {
        if (item.style.border === "4px solid rgb(165, 165, 165)") {
            a1.style.backgroundColor = window.getComputedStyle(item).backgroundColor;
            a2.style.backgroundColor = window.getComputedStyle(item).backgroundColor;
            bot.style.backgroundColor = window.getComputedStyle(item).backgroundColor;

            var inputA1 = a1.style.backgroundColor;
            var inputA2 = a2.style.backgroundColor;
            var inputBot = bot.style.backgroundColor;
            localStorage.setItem('userA1', inputA1);
            localStorage.setItem('userA2', inputA2);
            localStorage.setItem('userBot', inputBot);
        }
    });
    backc.forEach(item => {
        if (item.style.border === "4px solid rgb(165, 165, 165)") {
            document.body.style.backgroundColor = window.getComputedStyle(item).backgroundColor;
            nocolor = window.getComputedStyle(item).backgroundColor;
            waters.forEach(item2 => {
                if (item2.style.backgroundColor !== curcolor) {
                    item2.style.backgroundColor = nocolor;
                }
            });

            plus.style.borderColor = nocolor;
            minus.style.borderColor = nocolor;
            var inputBack = document.body.style.backgroundColor;
            var inputNo = nocolor;
            var inputW6 = w6.style.backgroundColor;
            var inputW5 = w5.style.backgroundColor;
            var inputW4 = w4.style.backgroundColor;
            var inputW3 = w3.style.backgroundColor;
            var inputW2 = w2.style.backgroundColor;
            var inputW1 = w1.style.backgroundColor;
            localStorage.setItem('userBack', inputBack);
            localStorage.setItem('userNo', inputNo);
            localStorage.setItem('userDataw6', inputW6);
            localStorage.setItem('userDataw5', inputW5);
            localStorage.setItem('userDataw4', inputW4);
            localStorage.setItem('userDataw3', inputW3);
            localStorage.setItem('userDataw2', inputW2);
            localStorage.setItem('userDataw1', inputW1);
        }
    });
});

wc1.addEventListener('mousedown', function (event) {
    if (wc1.style.border === "4px solid rgb(165, 165, 165)") {
        wc1.style.border = "none";
        const pixelValue = window.getComputedStyle(wc1).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        wc1.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc1).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        wc1.style.height = intValue2 + "px";
    }
    else {
        wc1.style.border = "4px solid rgb(165, 165, 165)";
        const pixelValue = window.getComputedStyle(wc1).width;
        const intValue = parseInt(pixelValue, 10) - 8;
        wc1.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc1).height;
        const intValue2 = parseInt(pixelValue2, 10) - 8;
        wc1.style.height = intValue2 + "px";
    }
    if (wc2.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(wc2).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        wc2.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc2).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        wc2.style.height = intValue2 + "px";
    }
    else if (wc3.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(wc3).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        wc3.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc3).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        wc3.style.height = intValue2 + "px";
    }
    else if (wc4.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(wc4).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        wc4.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc4).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        wc4.style.height = intValue2 + "px";
    }
    wc2.style.border = "none";
    wc3.style.border = "none";
    wc4.style.border = "none";
});
wc2.addEventListener('mousedown', function (event) {
    if (wc2.style.border === "4px solid rgb(165, 165, 165)") {
        wc2.style.border = "none";
        const pixelValue = window.getComputedStyle(wc2).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        wc2.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc2).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        wc2.style.height = intValue2 + "px";
    }
    else {
        wc2.style.border = "4px solid rgb(165, 165, 165)";
        const pixelValue = window.getComputedStyle(wc2).width;
        const intValue = parseInt(pixelValue, 10) - 8;
        wc2.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc2).height;
        const intValue2 = parseInt(pixelValue2, 10) - 8;
        wc2.style.height = intValue2 + "px";
    }
    if (wc1.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(wc1).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        wc1.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc1).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        wc1.style.height = intValue2 + "px";
    }
    else if (wc3.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(wc3).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        wc3.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc3).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        wc3.style.height = intValue2 + "px";
    }
    else if (wc4.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(wc4).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        wc4.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc4).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        wc4.style.height = intValue2 + "px";
    }
    wc1.style.border = "none";
    wc3.style.border = "none";
    wc4.style.border = "none";
});
wc3.addEventListener('mousedown', function (event) {
    if (wc3.style.border === "4px solid rgb(165, 165, 165)") {
        wc3.style.border = "none";
        const pixelValue = window.getComputedStyle(wc3).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        wc3.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc3).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        wc3.style.height = intValue2 + "px";
    }
    else {
        wc3.style.border = "4px solid rgb(165, 165, 165)";
        const pixelValue = window.getComputedStyle(wc3).width;
        const intValue = parseInt(pixelValue, 10) - 8;
        wc3.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc3).height;
        const intValue2 = parseInt(pixelValue2, 10) - 8;
        wc3.style.height = intValue2 + "px";
    }
    if (wc1.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(wc1).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        wc1.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc1).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        wc1.style.height = intValue2 + "px";
    }
    else if (wc2.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(wc2).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        wc2.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc2).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        wc2.style.height = intValue2 + "px";
    }
    else if (wc4.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(wc4).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        wc4.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc4).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        wc4.style.height = intValue2 + "px";
    }
    wc1.style.border = "none";
    wc2.style.border = "none";
    wc4.style.border = "none";
});
wc4.addEventListener('mousedown', function (event) {
    if (wc4.style.border === "4px solid rgb(165, 165, 165)") {
        wc4.style.border = "none";
        const pixelValue = window.getComputedStyle(wc4).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        wc4.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc4).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        wc4.style.height = intValue2 + "px";
    }
    else {
        wc4.style.border = "4px solid rgb(165, 165, 165)";
        const pixelValue = window.getComputedStyle(wc4).width;
        const intValue = parseInt(pixelValue, 10) - 8;
        wc4.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc4).height;
        const intValue2 = parseInt(pixelValue2, 10) - 8;
        wc4.style.height = intValue2 + "px";
    }
    if (wc1.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(wc1).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        wc1.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc1).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        wc1.style.height = intValue2 + "px";
    }
    else if (wc2.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(wc2).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        wc2.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc2).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        wc2.style.height = intValue2 + "px";
    }
    else if (wc3.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(wc3).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        wc3.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(wc3).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        wc3.style.height = intValue2 + "px";
    }
    wc1.style.border = "none";
    wc2.style.border = "none";
    wc3.style.border = "none";
});

gc1.addEventListener('mousedown', function (event) {
    if (gc1.style.border === "4px solid rgb(165, 165, 165)") {
        gc1.style.border = "none";
        const pixelValue = window.getComputedStyle(gc1).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        gc1.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc1).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        gc1.style.height = intValue2 + "px";
    }
    else {
        gc1.style.border = "4px solid rgb(165, 165, 165)";
        const pixelValue = window.getComputedStyle(gc1).width;
        const intValue = parseInt(pixelValue, 10) - 8;
        gc1.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc1).height;
        const intValue2 = parseInt(pixelValue2, 10) - 8;
        gc1.style.height = intValue2 + "px";
    }
    if (gc2.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(gc2).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        gc2.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc2).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        gc2.style.height = intValue2 + "px";
    }
    else if (gc3.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(gc3).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        gc3.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc3).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        gc3.style.height = intValue2 + "px";
    }
    else if (gc4.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(gc4).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        gc4.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc4).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        gc4.style.height = intValue2 + "px";
    }
    gc2.style.border = "none";
    gc3.style.border = "none";
    gc4.style.border = "none";
});
gc2.addEventListener('mousedown', function (event) {
    if (gc2.style.border === "4px solid rgb(165, 165, 165)") {
        gc2.style.border = "none";
        const pixelValue = window.getComputedStyle(gc2).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        gc2.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc2).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        gc2.style.height = intValue2 + "px";
    }
    else {
        gc2.style.border = "4px solid rgb(165, 165, 165)";
        const pixelValue = window.getComputedStyle(gc2).width;
        const intValue = parseInt(pixelValue, 10) - 8;
        gc2.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc2).height;
        const intValue2 = parseInt(pixelValue2, 10) - 8;
        gc2.style.height = intValue2 + "px";
    }
    if (gc1.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(gc1).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        gc1.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc1).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        gc1.style.height = intValue2 + "px";
    }
    else if (gc3.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(gc3).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        gc3.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc3).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        gc3.style.height = intValue2 + "px";
    }
    else if (gc4.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(gc4).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        gc4.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc4).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        gc4.style.height = intValue2 + "px";
    }
    gc1.style.border = "none";
    gc3.style.border = "none";
    gc4.style.border = "none";
});
gc3.addEventListener('mousedown', function (event) {
    if (gc3.style.border === "4px solid rgb(165, 165, 165)") {
        gc3.style.border = "none";
        const pixelValue = window.getComputedStyle(gc3).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        gc3.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc3).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        gc3.style.height = intValue2 + "px";
    }
    else {
        gc3.style.border = "4px solid rgb(165, 165, 165)";
        const pixelValue = window.getComputedStyle(gc3).width;
        const intValue = parseInt(pixelValue, 10) - 8;
        gc3.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc3).height;
        const intValue2 = parseInt(pixelValue2, 10) - 8;
        gc3.style.height = intValue2 + "px";
    }
    if (gc1.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(gc1).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        gc1.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc1).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        gc1.style.height = intValue2 + "px";
    }
    else if (gc2.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(gc2).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        gc2.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc2).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        gc2.style.height = intValue2 + "px";
    }
    else if (gc4.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(gc4).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        gc4.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc4).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        gc4.style.height = intValue2 + "px";
    }
    gc1.style.border = "none";
    gc2.style.border = "none";
    gc4.style.border = "none";
});
gc4.addEventListener('mousedown', function (event) {
    if (gc4.style.border === "4px solid rgb(165, 165, 165)") {
        gc4.style.border = "none";
        const pixelValue = window.getComputedStyle(gc4).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        gc4.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc4).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        gc4.style.height = intValue2 + "px";
    }
    else {
        gc4.style.border = "4px solid rgb(165, 165, 165)";
        const pixelValue = window.getComputedStyle(gc4).width;
        const intValue = parseInt(pixelValue, 10) - 8;
        gc4.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc4).height;
        const intValue2 = parseInt(pixelValue2, 10) - 8;
        gc4.style.height = intValue2 + "px";
    }
    if (gc1.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(gc1).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        gc1.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc1).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        gc1.style.height = intValue2 + "px";
    }
    else if (gc2.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(gc2).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        gc2.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc2).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        gc2.style.height = intValue2 + "px";
    }
    else if (gc3.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(gc3).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        gc3.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(gc3).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        gc3.style.height = intValue2 + "px";
    }
    gc1.style.border = "none";
    gc2.style.border = "none";
    gc3.style.border = "none";
});

bc1.addEventListener('mousedown', function (event) {
    if (bc1.style.border === "4px solid rgb(165, 165, 165)") {
        bc1.style.border = "none";
        const pixelValue = window.getComputedStyle(bc1).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        bc1.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc1).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        bc1.style.height = intValue2 + "px";
    }
    else {
        bc1.style.border = "4px solid rgb(165, 165, 165)";
        const pixelValue = window.getComputedStyle(bc1).width;
        const intValue = parseInt(pixelValue, 10) - 8;
        bc1.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc1).height;
        const intValue2 = parseInt(pixelValue2, 10) - 8;
        bc1.style.height = intValue2 + "px";
    }
    if (bc2.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(bc2).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        bc2.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc2).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        bc2.style.height = intValue2 + "px";
    }
    else if (bc3.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(bc3).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        bc3.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc3).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        bc3.style.height = intValue2 + "px";
    }
    else if (bc4.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(bc4).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        bc4.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc4).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        bc4.style.height = intValue2 + "px";
    }
    bc2.style.border = "none";
    bc3.style.border = "none";
    bc4.style.border = "none";
});
bc2.addEventListener('mousedown', function (event) {
    if (bc2.style.border === "4px solid rgb(165, 165, 165)") {
        bc2.style.border = "none";
        const pixelValue = window.getComputedStyle(bc2).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        bc2.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc2).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        bc2.style.height = intValue2 + "px";
    }
    else {
        bc2.style.border = "4px solid rgb(165, 165, 165)";
        const pixelValue = window.getComputedStyle(bc2).width;
        const intValue = parseInt(pixelValue, 10) - 8;
        bc2.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc2).height;
        const intValue2 = parseInt(pixelValue2, 10) - 8;
        bc2.style.height = intValue2 + "px";
    }
    if (bc1.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(bc1).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        bc1.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc1).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        bc1.style.height = intValue2 + "px";
    }
    else if (bc3.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(bc3).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        bc3.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc3).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        bc3.style.height = intValue2 + "px";
    }
    else if (bc4.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(bc4).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        bc4.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc4).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        bc4.style.height = intValue2 + "px";
    }
    bc1.style.border = "none";
    bc3.style.border = "none";
    bc4.style.border = "none";
});
bc3.addEventListener('mousedown', function (event) {
    if (bc3.style.border === "4px solid rgb(165, 165, 165)") {
        bc3.style.border = "none";
        const pixelValue = window.getComputedStyle(bc3).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        bc3.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc3).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        bc3.style.height = intValue2 + "px";
    }
    else {
        bc3.style.border = "4px solid rgb(165, 165, 165)";
        const pixelValue = window.getComputedStyle(bc3).width;
        const intValue = parseInt(pixelValue, 10) - 8;
        bc3.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc3).height;
        const intValue2 = parseInt(pixelValue2, 10) - 8;
        bc3.style.height = intValue2 + "px";
    }
    if (bc1.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(bc1).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        bc1.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc1).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        bc1.style.height = intValue2 + "px";
    }
    else if (bc2.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(bc2).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        bc2.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc2).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        bc2.style.height = intValue2 + "px";
    }
    else if (bc4.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(bc4).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        bc4.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc4).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        bc4.style.height = intValue2 + "px";
    }
    bc1.style.border = "none";
    bc2.style.border = "none";
    bc4.style.border = "none";
});
bc4.addEventListener('mousedown', function (event) {
    if (bc4.style.border === "4px solid rgb(165, 165, 165)") {
        bc4.style.border = "none";
        const pixelValue = window.getComputedStyle(bc4).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        bc4.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc4).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        bc4.style.height = intValue2 + "px";
    }
    else {
        bc4.style.border = "4px solid rgb(165, 165, 165)";
        const pixelValue = window.getComputedStyle(bc4).width;
        const intValue = parseInt(pixelValue, 10) - 8;
        bc4.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc4).height;
        const intValue2 = parseInt(pixelValue2, 10) - 8;
        bc4.style.height = intValue2 + "px";
    }
    if (bc1.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(bc1).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        bc1.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc1).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        bc1.style.height = intValue2 + "px";
    }
    else if (bc2.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(bc2).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        bc2.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc2).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        bc2.style.height = intValue2 + "px";
    }
    else if (bc3.style.border === "4px solid rgb(165, 165, 165)") {
        const pixelValue = window.getComputedStyle(bc3).width;
        const intValue = parseInt(pixelValue, 10) + 8;
        bc3.style.width = intValue + "px";
        const pixelValue2 = window.getComputedStyle(bc3).height;
        const intValue2 = parseInt(pixelValue2, 10) + 8;
        bc3.style.height = intValue2 + "px";
    }
    bc1.style.border = "none";
    bc2.style.border = "none";
    bc3.style.border = "none";
});

function updateClock() {
    // Create a new Date object to get the current time
    var now = new Date();

    // Extract hours, minutes, and seconds from the Date object
    var hours = now.getHours();
    var minutes = now.getMinutes();

    const lastResetTime = localStorage.getItem('lastResetTime');
    // Get the current date and time
    const nowx = new Date();
    const midnight = new Date(nowx.getFullYear(), nowx.getMonth(), nowx.getDate(), 0, 0, 0); // Midnight of the current day
    // Check if the current time is after midnight and the last reset time is before midnight
    if (nowx > midnight && (!lastResetTime || new Date(lastResetTime) < midnight)) {
        // Reset the measured data (replace this with your actual reset logic)
        reset();

        // Update the last reset time to the current time

    }
    localStorage.setItem('lastResetTime', nowx);
    // Add leading zero if the hours/minutes are less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;


    // Update the clock display
    clock.textContent = hours + ':' + minutes;
}

// Call updateClock() immediately to display the current time
updateClock();

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);

