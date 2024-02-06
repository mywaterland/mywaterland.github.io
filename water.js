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
let curcolor="#4d86bf";

function mesplus() {
    const mes = document.createElement("div");
    head.prepend(mes);
    mes.style.width = "50px";
    mes.style.height = "20px";
    mes.style.backgroundColor = "#1F1F1F";
    mes.style.alignSelf = "flex-end";
    mes.style.borderRadius = "7px";
    mes.style.border = "solid 2px #1F1F1F";
    mes.style.color = "#1F1F1F";
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
                    color: "#1F1F1F",
                    borderColor: "#1F1F1F"
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
                    color: "#1F1F1F",
                    borderColor: "#1F1F1F"
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
    mes.style.backgroundColor = "#1F1F1F";
    mes.style.alignSelf = "flex-end";
    mes.style.borderRadius = "7px";
    mes.style.border = "solid 2px #1F1F1F";
    mes.style.color = "#1F1F1F";
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
                    color: "#1F1F1F",
                    borderColor: "#1F1F1F"
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
                    color: "#1F1F1F",
                    borderColor: "#1F1F1F"
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
        w1.style.backgroundColor = "#4d86bf";
    }
    else if (x == 2500) {
        x += 500;

        w1.style.height = "0px";
        w1.style.backgroundColor = "#4d86bf";
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
            w1.style.backgroundColor = "#4d86bf";
        });

        w1a.addEventListener('cancel', function (event) {
            w1.style.height = "50px";
            w1.style.backgroundColor = "#4d86bf";
        });
        mesplus();
    }
    else if (x == 2000) {
        x += 500;
        w2.style.height = "0px";
        w2.style.backgroundColor = "#4d86bf";
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
            w2.style.backgroundColor = "#4d86bf";
        });
        w2a.addEventListener('cancel', function (event) {
            w2.style.height = "50px";
            w2.style.backgroundColor = "#4d86bf";
        });
        mesplus();
    }
    else if (x == 1500) {
        x += 500;
        w3.style.height = "0px";
        w3.style.backgroundColor = "#4d86bf";
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
            w3.style.backgroundColor = "#4d86bf";
        });
        w3a.addEventListener('cancel', function (event) {
            w3.style.height = "50px";
            w3.style.backgroundColor = "#4d86bf";
        });
        mesplus();
    }
    else if (x == 1000) {
        x += 500;
        w4.style.height = "0px";
        w4.style.backgroundColor = "#4d86bf";
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
            w4.style.backgroundColor = "#4d86bf";
        });
        w4a.addEventListener('cancel', function (event) {
            w4.style.height = "50px";
            w4.style.backgroundColor = "#4d86bf";
        });
        mesplus();
    }
    else if (x == 500) {
        x += 500;
        w5.style.height = "0px";
        w5.style.backgroundColor = "#4d86bf";
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
            w5.style.backgroundColor = "#4d86bf";
        });
        w5a.addEventListener('cancel', function (event) {
            w5.style.height = "50px";
            w5.style.backgroundColor = "#4d86bf";
        });
        mesplus();
    }
    else {
        x = 0;
        x += 500;
        w6.style.height = "0px";
        w6.style.backgroundColor = "#4d86bf";
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
            w6.style.backgroundColor = "#4d86bf";
        });
        w6a.addEventListener('cancel', function (event) {
            w6.style.height = "50px";
            w6.style.backgroundColor = "#4d86bf";
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
            w6.style.backgroundColor = "#1F1F1F";
            var inputW6 = w6.style.backgroundColor;
            localStorage.setItem('userDataw6', inputW6);
        });
        w6a2.addEventListener('cancel', function (event) {
            w6.style.backgroundColor = "#1F1F1F";
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
            w5.style.backgroundColor = "#1F1F1F";
            var inputW5 = w5.style.backgroundColor;
            localStorage.setItem('userDataw5', inputW5);
        });
        w5a2.addEventListener('cancel', function (event) {
            w5.style.backgroundColor = "#1F1F1F";
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
            w4.style.backgroundColor = "#1F1F1F";
            var inputW4 = w4.style.backgroundColor;
            localStorage.setItem('userDataw4', inputW4);
        });
        w4a2.addEventListener('cancel', function (event) {
            w4.style.backgroundColor = "#1F1F1F";
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
            w3.style.backgroundColor = "#1F1F1F";
            var inputW3 = w3.style.backgroundColor;
            localStorage.setItem('userDataw3', inputW3);
        });
        w3a2.addEventListener('cancel', function (event) {
            w3.style.backgroundColor = "#1F1F1F";
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
            w2.style.backgroundColor = "#1F1F1F";
            var inputW2 = w2.style.backgroundColor;
            localStorage.setItem('userDataw2', inputW2);
        });
        w2a2.addEventListener('cancel', function (event) {
            w2.style.backgroundColor = "#1F1F1F";
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
            w1.style.backgroundColor = "#1F1F1F";
            var inputW1 = w1.style.backgroundColor;
            localStorage.setItem('userDataw1', inputW1);
        });
        w1a2.addEventListener('cancel', function (event) {
            w1.style.backgroundColor = "#1F1F1F";
            var inputW1 = w1.style.backgroundColor;
            localStorage.setItem('userDataw1', inputW1);
        });
        mesminus();
    }
    else {
        x = 0;
        w6.style.backgroundColor = "#1F1F1F";
    }
    txt.textContent = x + "ML";
    var inputData = x;
    localStorage.setItem('userData', inputData);
});

plus.addEventListener('mouseover', function (event) {
    const plusanims = plus.animate(
        [
            {
                borderColor: "#1F1F1F"
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
                borderColor: "#1F1F1F"
            },
        ],
        {
            duration: 300,
            easing: "linear",
        }
    );
    plusanims.addEventListener('finish', function (event) {
        plus.style.borderColor = "#1F1F1F";
    });
});

minus.addEventListener('mouseover', function (event) {
    const minusanims = minus.animate(
        [
            {
                borderColor: "#1F1F1F"
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
                borderColor: "#1F1F1F"
            },
        ],
        {
            duration: 300,
            easing: "linear",
        }
    );
    minusanims.addEventListener('finish', function (event) {
        minus.style.borderColor = "#1F1F1F";
    });
});

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
