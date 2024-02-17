let w1 = document.querySelector(".w1");
let w2 = document.querySelector(".w2");
let w3 = document.querySelector(".w3");
let w4 = document.querySelector(".w4");
let w5 = document.querySelector(".w5");
let w6 = document.querySelector(".w6");
let plus = document.querySelector(".plus");
let parm = document.querySelector(".parm");
let pmid = document.querySelector(".pmid");
let minus = document.querySelector(".minus");
let txt = document.querySelector(".txt");
let x;
const head = document.querySelector(".head");
let curcolor = "#4d86bf";
let curcover = "#84a4c5";
let nocolor = "#1F1F1F";
let bottle = document.querySelector(".bottle");
let popup = document.querySelector(".popup");
let close = document.querySelector(".close");
document.body.style.backgroundColor = nocolor;
document.body.style.transform = "scale(0)";

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

function mesplus() {
    const mes = document.createElement("div");
    head.prepend(mes);
    mes.style.width = "50px";
    mes.style.height = "20px";
    mes.style.backgroundColor = nocolor;
    mes.style.alignSelf = "flex-end";
    mes.style.borderRadius = "7px";
    mes.style.border = "solid 2px #1F1F1F";
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
                    color: "#627a47",
                    borderColor: "#627a47"
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
                    color: "#627a47",
                    borderColor: "#627a47"
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
    mes.style.border = "solid 2px #1F1F1F";
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
                    color: "#9e4634",
                    borderColor: "#9e4634"
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
                    color: "#9e4634",
                    borderColor: "#9e4634"
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

plus.addEventListener('mousedown', function (event) {
    if (x == 3000) {
        x = 3000;
        w1.style.backgroundColor = curcolor;
    }
    else if (x == 2500) {
        x += 500;
        w1.style.height = "0px";
        w1.style.backgroundColor = curcolor;
        const w1a = w1.animate(
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
        w1a.addEventListener('finish', function (event) {
            w1.style.height = "50px";
            w1.style.backgroundColor = curcolor;
        });

        w1a.addEventListener('cancel', function (event) {
            w1.style.height = "50px";
            w1.style.backgroundColor = curcolor;
        });
        mesplus();
    }
    else if (x == 2000) {
        x += 500;
        w2.style.height = "0px";
        w2.style.backgroundColor = curcolor;
        const w2a = w2.animate(
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
        w2a.addEventListener('finish', function (event) {
            w2.style.height = "50px";
            w2.style.backgroundColor = curcolor;
        });
        w2a.addEventListener('cancel', function (event) {
            w2.style.height = "50px";
            w2.style.backgroundColor = curcolor;
        });
        mesplus();
    }
    else if (x == 1500) {
        x += 500;
        w3.style.height = "0px";
        w3.style.backgroundColor = curcolor;
        const w3a = w3.animate(
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
        w3a.addEventListener('finish', function (event) {
            w3.style.height = "50px";
            w3.style.backgroundColor = curcolor;
        });
        w3a.addEventListener('cancel', function (event) {
            w3.style.height = "50px";
            w3.style.backgroundColor = curcolor;
        });
        mesplus();
    }
    else if (x == 1000) {
        x += 500;
        w4.style.height = "0px";
        w4.style.backgroundColor = curcolor;
        const w4a = w4.animate(
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
        w4a.addEventListener('finish', function (event) {
            w4.style.height = "50px";
            w4.style.backgroundColor = curcolor;
        });
        w4a.addEventListener('cancel', function (event) {
            w4.style.height = "50px";
            w4.style.backgroundColor = curcolor;
        });
        mesplus();
    }
    else if (x == 500) {
        x += 500;
        w5.style.height = "0px";
        w5.style.backgroundColor = curcolor;
        const w5a = w5.animate(
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
        w5a.addEventListener('finish', function (event) {
            w5.style.height = "50px";
            w5.style.backgroundColor = curcolor;
        });
        w5a.addEventListener('cancel', function (event) {
            w5.style.height = "50px";
            w5.style.backgroundColor = curcolor;
        });
        mesplus();
    }
    else {
        x = 0;
        x += 500;
        w6.style.height = "0px";
        w6.style.backgroundColor = curcolor;
        const w6a = w6.animate(
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
        w6a.addEventListener('finish', function (event) {
            w6.style.height = "50px";
            w6.style.backgroundColor = curcolor;
        });
        w6a.addEventListener('cancel', function (event) {
            w6.style.height = "50px";
            w6.style.backgroundColor = curcolor;
        });
        mesplus();
    }
    txt.textContent = x + "ML";
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

});

minus.addEventListener('mousedown', function (event) {
    if (x == 500) {
        x -= 500;
        const w6a2 = w6.animate(
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
        w6a2.addEventListener('finish', function (event) {
            w6.style.backgroundColor = nocolor;
            var inputW6 = w6.style.backgroundColor;
            localStorage.setItem('userDataw6', inputW6);
        });
        w6a2.addEventListener('cancel', function (event) {
            w6.style.backgroundColor = nocolor;
            var inputW6 = w6.style.backgroundColor;
            localStorage.setItem('userDataw6', inputW6);
        });
        mesminus();
    }
    else if (x == 1000) {
        x -= 500;
        const w5a2 = w5.animate(
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
        w5a2.addEventListener('finish', function (event) {
            w5.style.backgroundColor = nocolor;
            var inputW5 = w5.style.backgroundColor;
            localStorage.setItem('userDataw5', inputW5);
        });
        w5a2.addEventListener('cancel', function (event) {
            w5.style.backgroundColor = nocolor;
            var inputW5 = w5.style.backgroundColor;
            localStorage.setItem('userDataw5', inputW5);
        });
        mesminus();
    }
    else if (x == 1500) {
        x -= 500;
        const w4a2 = w4.animate(
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
        w4a2.addEventListener('finish', function (event) {
            w4.style.backgroundColor = nocolor;
            var inputW4 = w4.style.backgroundColor;
            localStorage.setItem('userDataw4', inputW4);
        });
        w4a2.addEventListener('cancel', function (event) {
            w4.style.backgroundColor = nocolor;
            var inputW4 = w4.style.backgroundColor;
            localStorage.setItem('userDataw4', inputW4);
        });
        mesminus();
    }
    else if (x == 2000) {
        x -= 500;
        const w3a2 = w3.animate(
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
        w3a2.addEventListener('finish', function (event) {
            w3.style.backgroundColor = nocolor;
            var inputW3 = w3.style.backgroundColor;
            localStorage.setItem('userDataw3', inputW3);
        });
        w3a2.addEventListener('cancel', function (event) {
            w3.style.backgroundColor = nocolor;
            var inputW3 = w3.style.backgroundColor;
            localStorage.setItem('userDataw3', inputW3);
        });
        mesminus();
    }
    else if (x == 2500) {
        x -= 500;
        const w2a2 = w2.animate(
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
        w2a2.addEventListener('finish', function (event) {
            w2.style.backgroundColor = nocolor;
            var inputW2 = w2.style.backgroundColor;
            localStorage.setItem('userDataw2', inputW2);
        });
        w2a2.addEventListener('cancel', function (event) {
            w2.style.backgroundColor = nocolor;
            var inputW2 = w2.style.backgroundColor;
            localStorage.setItem('userDataw2', inputW2);
        });
        mesminus();
    }
    else if (x == 3000) {
        x -= 500;
        const w1a2 = w1.animate(
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
        w1a2.addEventListener('finish', function (event) {
            w1.style.backgroundColor = nocolor;
            var inputW1 = w1.style.backgroundColor;
            localStorage.setItem('userDataw1', inputW1);
        });
        w1a2.addEventListener('cancel', function (event) {
            w1.style.backgroundColor = nocolor;
            var inputW1 = w1.style.backgroundColor;
            localStorage.setItem('userDataw1', inputW1);
        });
        mesminus();
    }
    else {
        x = 0;
        w6.style.backgroundColor = nocolor;
    }
    txt.textContent = x + "ML";
    var inputData = x;
    localStorage.setItem('userData', inputData);
});

plus.addEventListener('mouseover', function (event) {
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
});
plus.addEventListener('mouseout', function (event) {
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
});

minus.addEventListener('mouseover', function (event) {
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
});
minus.addEventListener('mouseout', function (event) {
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
});

bottle.addEventListener('mouseover', function (event) {
    if (x == 3000) {
        const w6over = w6.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w6over.addEventListener('finish', function (event) {
            w6.style.backgroundColor = curcover;
        });
        const w5over = w5.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w5over.addEventListener('finish', function (event) {
            w5.style.backgroundColor = curcover;
        });
        const w4over = w4.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w4over.addEventListener('finish', function (event) {
            w4.style.backgroundColor = curcover;
        });
        const w3over = w3.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w3over.addEventListener('finish', function (event) {
            w3.style.backgroundColor = curcover;
        });
        const w2over = w2.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w2over.addEventListener('finish', function (event) {
            w2.style.backgroundColor = curcover;
        });
        const w1over = w1.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w1over.addEventListener('finish', function (event) {
            w1.style.backgroundColor = curcover;
        });
    }
    else if (x == 2500) {
        const w6over = w6.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w6over.addEventListener('finish', function (event) {
            w6.style.backgroundColor = curcover;
        });
        const w5over = w5.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w5over.addEventListener('finish', function (event) {
            w5.style.backgroundColor = curcover;
        });
        const w4over = w4.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w4over.addEventListener('finish', function (event) {
            w4.style.backgroundColor = curcover;
        });
        const w3over = w3.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w3over.addEventListener('finish', function (event) {
            w3.style.backgroundColor = curcover;
        });
        const w2over = w2.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w2over.addEventListener('finish', function (event) {
            w2.style.backgroundColor = curcover;
        });
    }
    else if (x == 2000) {
        const w6over = w6.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w6over.addEventListener('finish', function (event) {
            w6.style.backgroundColor = curcover;
        });
        const w5over = w5.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w5over.addEventListener('finish', function (event) {
            w5.style.backgroundColor = curcover;
        });
        const w4over = w4.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w4over.addEventListener('finish', function (event) {
            w4.style.backgroundColor = curcover;
        });
        const w3over = w3.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w3over.addEventListener('finish', function (event) {
            w3.style.backgroundColor = curcover;
        });
    }
    else if (x == 1500) {
        const w6over = w6.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w6over.addEventListener('finish', function (event) {
            w6.style.backgroundColor = curcover;
        });
        const w5over = w5.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w5over.addEventListener('finish', function (event) {
            w5.style.backgroundColor = curcover;
        });
        const w4over = w4.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w4over.addEventListener('finish', function (event) {
            w4.style.backgroundColor = curcover;
        });
    }
    else if (x == 1000) {
        const w6over = w6.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w6over.addEventListener('finish', function (event) {
            w6.style.backgroundColor = curcover;
        });
        const w5over = w5.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w5over.addEventListener('finish', function (event) {
            w5.style.backgroundColor = curcover;
        });
    }
    else if (x == 500) {
        const w6over = w6.animate(
            [
                {
                    backgroundColor: curcolor
                },
                {
                    backgroundColor: curcover
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w6over.addEventListener('finish', function (event) {
            w6.style.backgroundColor = curcover;
        });
    }
});
bottle.addEventListener('mouseout', function (event) {
    if (x == 3000) {
        const w6out = w6.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w6out.addEventListener('finish', function (event) {
            w6.style.backgroundColor = curcolor;
        });
        const w5out = w5.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w5out.addEventListener('finish', function (event) {
            w5.style.backgroundColor = curcolor;
        });
        const w4out = w4.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w4out.addEventListener('finish', function (event) {
            w4.style.backgroundColor = curcolor;
        });
        const w3out = w3.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w3out.addEventListener('finish', function (event) {
            w3.style.backgroundColor = curcolor;
        });
        const w2out = w2.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w2out.addEventListener('finish', function (event) {
            w2.style.backgroundColor = curcolor;
        });
        const w1out = w1.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w1out.addEventListener('finish', function (event) {
            w1.style.backgroundColor = curcolor;
        });
    }
    else if (x == 2500) {
        const w6out = w6.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w6out.addEventListener('finish', function (event) {
            w6.style.backgroundColor = curcolor;
        });
        const w5out = w5.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w5out.addEventListener('finish', function (event) {
            w5.style.backgroundColor = curcolor;
        });
        const w4out = w4.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w4out.addEventListener('finish', function (event) {
            w4.style.backgroundColor = curcolor;
        });
        const w3out = w3.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w3out.addEventListener('finish', function (event) {
            w3.style.backgroundColor = curcolor;
        });
        const w2out = w2.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w2out.addEventListener('finish', function (event) {
            w2.style.backgroundColor = curcolor;
        });
    }
    else if (x == 2000) {
        const w6out = w6.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w6out.addEventListener('finish', function (event) {
            w6.style.backgroundColor = curcolor;
        });
        const w5out = w5.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w5out.addEventListener('finish', function (event) {
            w5.style.backgroundColor = curcolor;
        });
        const w4out = w4.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w4out.addEventListener('finish', function (event) {
            w4.style.backgroundColor = curcolor;
        });
        const w3out = w3.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w3out.addEventListener('finish', function (event) {
            w3.style.backgroundColor = curcolor;
        });
    }
    else if (x == 1500) {
        const w6out = w6.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w6out.addEventListener('finish', function (event) {
            w6.style.backgroundColor = curcolor;
        });
        const w5out = w5.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w5out.addEventListener('finish', function (event) {
            w5.style.backgroundColor = curcolor;
        });
        const w4out = w4.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w4out.addEventListener('finish', function (event) {
            w4.style.backgroundColor = curcolor;
        });
    }
    else if (x == 1000) {
        const w6out = w6.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w6out.addEventListener('finish', function (event) {
            w6.style.backgroundColor = curcolor;
        });
        const w5out = w5.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w5out.addEventListener('finish', function (event) {
            w5.style.backgroundColor = curcolor;
        });
    }
    else if (x == 500) {
        const w6out = w6.animate(
            [
                {
                    backgroundColor: curcover
                },
                {
                    backgroundColor: curcolor
                },
            ],
            {
                duration: 250,
                easing: "linear",
            }
        );
        w6out.addEventListener('finish', function (event) {
            w6.style.backgroundColor = curcolor;
        });
    }
});

var isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if (isMobile) {
    // Mobile device
    bottle.addEventListener('touchstart', function (event) {
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
                duration: 300,
                easing: "linear",
            }
        );
        popanim.addEventListener('finish', function (event) {
            popup.style.transform = "scale(1)";
        });
    });
    close.addEventListener('touchstart', function (event) {
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
                duration: 300,
                easing: "linear",
            }
        );
        popclose.addEventListener('finish', function (event) {
            popup.style.transform = "scale(0)";
        });
    });
} else {
    // Desktop
    bottle.addEventListener('mousedown', function (event) {
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
                duration: 300,
                easing: "linear",
            }
        );
        popanim.addEventListener('finish', function (event) {
            popup.style.transform = "scale(1)";
        });
    });
    close.addEventListener('mousedown', function (event) {
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
                duration: 300,
                easing: "linear",
            }
        );
        popclose.addEventListener('finish', function (event) {
            popup.style.transform = "scale(0)";
        });
    });

}



var storedData = localStorage.getItem('userData');
var storedDataw6 = localStorage.getItem('userDataw6');
var storedDataw5 = localStorage.getItem('userDataw5');
var storedDataw4 = localStorage.getItem('userDataw4');
var storedDataw3 = localStorage.getItem('userDataw3');
var storedDataw2 = localStorage.getItem('userDataw2');
var storedDataw1 = localStorage.getItem('userDataw1');


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
