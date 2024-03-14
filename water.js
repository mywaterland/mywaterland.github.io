let w1 = document.getElementById("w1");
let w2 = document.getElementById("w2");
let w3 = document.getElementById("w3");
let w4 = document.getElementById("w4");
let w5 = document.getElementById("w5");
let w6 = document.getElementById("w6");
const waters = [w1, w2, w3, w4, w5, w6];
let plus = document.getElementById("plus");
let parm = document.querySelector(".parm");
let pmid = document.getElementById("pmid");
let pl = document.getElementById("pl");
let pr = document.getElementById("pr");
const parms = [pl, pr];
let minus = document.getElementById("minus");
let marm = document.getElementById("marm");
let txt = document.getElementById("txt");
let x;
let y;
const head = document.querySelector(".head");
let curcolor = "rgb(77, 134, 191)";
let curcover = "rgb(132, 164, 197)";
let nocolor = "rgb(31, 31, 31)";
let bottle = document.getElementById("bottle");
let popup = document.querySelector(".popup");
let t1 = document.getElementById("t1");
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
const GlassArr = [a1, a2, bot];
var clock = document.getElementById("clock");
let buttons = document.getElementById("buttons");
let menu = document.getElementById("menu");
let menupic = document.getElementById("menupic");
let mline = document.getElementById("mline");
let mline2 = document.getElementById("mline2");
let mline3 = document.getElementById("mline3");
const mlines = [mline, mline2, mline3];
let about = document.getElementById("about");
let custom = document.getElementById("custom");
let bodybool = false;
let aboutbool = false;
const abouttop = window.getComputedStyle(about).top;
const customtop = window.getComputedStyle(custom).top;
let aboutgotop = "9.7%";
let customgotop = "5%";
let menuBackbool = true;
let comptop = "19.5%";
let link = document.getElementById("link");
let tline = document.getElementById("tline");
let breset = document.getElementById("reset");
let body = document.body;
let sign = document.getElementById("sign");
let AboutPopup = document.getElementById("AboutPopup");
let AboutApp = document.getElementById("AboutApp");
let AboutAuthor = document.getElementById("AboutAuthor");

body.style.backgroundColor = nocolor;


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
menupic.style.borderColor = "#f2f3f400";
waters.forEach(item => {
    item.style.opacity = "0";
});
GlassArr.forEach(item => {
    item.style.opacity = "0";
});
txt.style.opacity = "0";
parms.forEach(item => {
    item.style.width = "0px";
});
pmid.style.height = "0px";
plus.style.marginLeft = "0px";
marm.style.width = "0px";
clock.style.opacity = "0";
menupic.style.opacity = "0";
link.style.opacity = "0";
sign.style.opacity = "0";
body.style.pointerEvents = "none";

if (x == 3000) {
    plus.style.pointerEvents = "none";
    minus.style.pointerEvents = "none";
    txt.style.color = "#70dba6";
    tline.style.width = "190px";
    pmid.style.height = "0px";
    pl.style.width = "0px";
    pr.style.width = "0px";
    plus.style.marginLeft = "22px";
    marm.style.width = "0px";
    plus.style.display = "none";
    minus.style.display = "none";
    breset.style.display = "block";
    breset.style.color = "#f2f3f4";
    breset.style.borderColor = "#f2f3f4";
    breset.style.pointerEvents = "all";
}

if (document.body.clientHeight <= 700) {
    aboutgotop = "10.7%";
}
if (document.body.clientHeight <= 570) {
    aboutgotop = "11.7%";
}
if (document.body.clientHeight <= 467) {
    aboutgotop = "12.7%";
}
if (document.body.clientHeight <= 430) {
    aboutgotop = "13.7%";
}


this.addEventListener('load', function (event) {
    function SignLoad() {
        const SignLoadAnim = sign.animate(
            [
                {
                    opacity: "0"
                },
                {
                    opacity: "1"
                }
            ],
            {
                duration: 200,
                easing: "linear"
            }
        );
        SignLoadAnim.addEventListener('finish', function (event) {
            sign.style.opacity = "";
            body.style.pointerEvents = "all";
        });
    }
    function LinkLoad() {
        const LinkLoadAnim = link.animate(
            [
                {
                    opacity: "0"
                },
                {
                    opacity: "1"
                }
            ],
            {
                duration: 200,
                easing: "linear"
            }
        );
        LinkLoadAnim.addEventListener('finish', function (event) {
            link.style.opacity = "";
            SignLoad();
        })
    }
    function MenuLoad() {
        const MenuLoadAnim = menupic.animate(
            [
                {
                    opacity: "0"
                },
                {
                    opacity: "1"
                }
            ],
            {
                duration: 200,
                easing: "linear"
            }
        );
        MenuLoadAnim.addEventListener('finish', function (event) {
            menupic.style.opacity = "";
            LinkLoad();
        })
    }
    function ClockLoad() {
        const ClockLoadAnim = clock.animate(
            [
                {
                    opacity: "0"
                },
                {
                    opacity: "1"
                }
            ],
            {
                duration: 200,
                easing: "linear"
            }
        );
        ClockLoadAnim.addEventListener('finish', function (event) {
            clock.style.opacity = "";
            MenuLoad();
        });
    }
    function TxtLoad() {
        const TxtLoadAnimation = txt.animate(
            [
                {
                    opacity: "0"
                },
                {
                    opacity: "1"
                }
            ],
            {
                duration: 300,
                easing: "linear"
            }
        );
        TxtLoadAnimation.addEventListener('finish', function (event) {
            txt.style.opacity = "";
            ClockLoad();
        });
    }
    waters.forEach(item => {
        const WaterLoadAnimation = item.animate(
            [
                {
                    opacity: "0"
                },
                {
                    opacity: "1"
                }
            ],
            {
                easing: "linear",
                duration: 800
            }
        );
        WaterLoadAnimation.addEventListener('finish', function (event) {
            item.style.opacity = "";
        });

    });
    GlassArr.forEach(item => {
        const GlassLoadAnimation = item.animate(
            [
                {
                    opacity: "0"
                },
                {
                    opacity: "1"
                }
            ],
            {
                duration: 800,
                easing: "linear"
            }
        )
        GlassLoadAnimation.addEventListener('finish', function (event) {
            item.style.opacity = "";
            TxtLoad();
        });
    });
    parms.forEach(item => {
        const PlusArmsLoadAnimation = item.animate(
            [
                {
                    width: "0px"
                },
                {
                    width: "22px"
                },
            ],
            {
                duration: 400,
                easing: "ease-out"
            }
        );
        PlusArmsLoadAnimation.addEventListener('finish', function (event) {
            item.style.width = "22px";
        });
        const PlusMarginFix = plus.animate(
            [
                {
                    marginLeft: "22px"
                },
                {
                    marginLeft: "0px"
                },
            ],
            {
                duration: 400,
                easing: "ease-out"
            }
        );
        PlusMarginFix.addEventListener('finish', function (event) {
            plus.style.marginLeft = "0px";
        });
    });
    const PlusMidLoadAnimation = pmid.animate(
        [
            {
                height: "0px"
            },
            {
                height: "50px"
            },
        ],
        {
            duration: 400,
            easing: "ease-out"
        }
    );
    PlusMidLoadAnimation.addEventListener('finish', function (event) {
        pmid.style.height = "50px";
    });
    const MinusLoadAnimation = marm.animate(
        [
            {
                width: "0px"
            },
            {
                width: "50px"
            }
        ],
        {
            duration: 400,
            easing: "ease-out"
        }
    );
    MinusLoadAnimation.addEventListener('finish', function (event) {
        marm.style.width = "50px";
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

function resetover() {
    const resetovan = breset.animate(
        [
            {
                backgroundColor: "#f2f3f400"
            },
            {
                backgroundColor: "#f2f3f430"
            }
        ],
        {
            duration: 300,
            easing: "linear"
        }
    );
    resetovan.addEventListener('finish', function (event) {
        breset.style.backgroundColor = "#f2f3f430";
    });
}
function resetout() {
    const resetovan = breset.animate(
        [
            {
                backgroundColor: "#f2f3f430"
            },
            {
                backgroundColor: "#f2f3f400"
            }
        ],
        {
            duration: 300,
            easing: "linear"
        }
    );
    resetovan.addEventListener('finish', function (event) {
        breset.style.backgroundColor = "#f2f3f400";
    });
}
function ResetGo() {
    breset.style.pointerEvents = "none";
    function updateXreset() {
        x -= 20;
        txt.textContent = x + "ML";
        localsave();
        if (x == 0) { window.clearInterval(xResetInterval); }
    }
    updateXreset();
    let xResetInterval = setInterval(updateXreset, 3);
    waters.forEach(item => {
        const wdown = item.animate(
            [
                {
                    height: "50px"
                },
                {
                    height: "0px"
                }
            ],
            {
                duration: 700,
                easing: "ease-out"
            }
        );
        wdown.addEventListener('finish', function (event) {
            item.style.backgroundColor = nocolor;
            localsave();
        });
    });
    function tlinereset() {
        const completion = txt.animate(
            [
                {
                    color: "#70dba6"
                },
                {
                    color: "#2c426b"
                },
            ],
            {
                duration: 400,
                easing: "ease-out"
            }
        )
        completion.addEventListener('finish', function (event) {
            txt.style.color = "#2c426b";
        });
        const tlinego = tline.animate(
            [
                {
                    width: "190px"
                },
                {
                    width: "0px"
                },
            ],
            {
                duration: 400,
                easing: "ease-out"
            }
        )
        tlinego.addEventListener('finish', function (event) {
            tline.style.width = "0px";
        });
    }
    function parmsreset() {
        parms.forEach(item => {
            const parmgo = item.animate(
                [
                    {
                        width: "0px"
                    },
                    {
                        width: "22px"
                    },
                ],
                {
                    duration: 400,
                    easing: "ease-out"
                }
            );
            parmgo.addEventListener('finish', function (event) {
                item.style.width = "22px";
                plus.style.pointerEvents = "all";
            });
            const plusmar = plus.animate(
                [
                    {
                        marginLeft: "22px"
                    },
                    {
                        marginLeft: "0px"
                    },
                ],
                {
                    duration: 400,
                    easing: "ease-out"
                }
            );
            plusmar.addEventListener('finish', function (event) {
                plus.style.marginLeft = "0px";
            });
        });
    }
    function pmidreset() {
        const pmidgoa = pmid.animate(
            [
                {
                    height: "0px"
                },
                {
                    height: "50px"
                },
            ],
            {
                duration: 400,
                easing: "ease-out"
            }
        );
        pmidgoa.addEventListener('finish', function (event) {
            pmid.style.height = "50px";
            parmsreset();
        });
    }
    function minusreset() {
        const minusshrink = marm.animate(
            [
                {
                    width: "0px"
                },
                {
                    width: "50px"
                }
            ],
            {
                duration: 400,
                easing: "ease-out"
            }
        );
        minusshrink.addEventListener('finish', function (event) {
            marm.style.width = "50px";
            minus.style.pointerEvents = "all";
        });
    }
    const resetup = breset.animate(
        [
            {
                color: "#f2f3f4",
                borderColor: "#f2f3f4"
            },
            {
                color: "#f2f3f400",
                borderColor: "#f2f3f400"
            }
        ],
        {
            duration: 600,
            easing: "ease-out"
        }
    );
    resetup.addEventListener('finish', function (event) {
        breset.style.color = "#f2f3f400";
        breset.style.borderColor = "#f2f3f400";
        breset.style.display = "none";
        plus.style.display = "flex";
        minus.style.display = "flex";
        tlinereset();
        pmidreset();
        minusreset();
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
    menuBack();
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

function GetReset() {
    breset.style.display = "block";
    const resetup = breset.animate(
        [
            {
                color: "#f2f3f400",
                borderColor: "#f2f3f400"
            },
            {
                color: "#f2f3f4",
                borderColor: "#f2f3f4"
            }
        ],
        {
            duration: 600,
            easing: "ease-out"
        }
    );
    resetup.addEventListener('finish', function (event) {
        breset.style.color = "#f2f3f4";
        breset.style.borderColor = "#f2f3f4";
        breset.style.pointerEvents = "all";
    });
}
function Completion() {
    if (x == 3000) {
        plus.style.pointerEvents = "none";
        minus.style.pointerEvents = "none";
        const completion = txt.animate(
            [
                {
                    color: "#2c426b"
                },
                {
                    color: "#70dba6"
                },
            ],
            {
                duration: 400,
                easing: "ease-out"
            }
        )
        completion.addEventListener('finish', function (event) {
            txt.style.color = "#70dba6";
        });
        const tlinego = tline.animate(
            [
                {
                    width: "0px"
                },
                {
                    width: "190px"
                },
            ],
            {
                duration: 400,
                easing: "ease-out"
            }
        )
        tlinego.addEventListener('finish', function (event) {
            tline.style.width = "190px";
        });
        function pmidgo() {
            const pmidgoa = pmid.animate(
                [
                    {
                        height: "50px"
                    },
                    {
                        height: "0px"
                    },
                ],
                {
                    duration: 400,
                    easing: "ease-out"
                }
            );
            pmidgoa.addEventListener('finish', function (event) {
                pmid.style.height = "0px";
                plus.style.display = "none";
                minus.style.display = "none";
                GetReset();
            });
        }
        parms.forEach(item => {
            const parmgo = item.animate(
                [
                    {
                        width: "22px"
                    },
                    {
                        width: "0px"
                    },
                ],
                {
                    duration: 400,
                    easing: "ease-out"
                }
            );
            parmgo.addEventListener('finish', function (event) {
                item.style.width = "0px";
                pmidgo();
            });
            const plusmar = plus.animate(
                [
                    {
                        marginLeft: "0px"
                    },
                    {
                        marginLeft: "22px"
                    },
                ],
                {
                    duration: 400,
                    easing: "ease-out"
                }
            );
            plusmar.addEventListener('finish', function (event) {
                plus.style.marginLeft = "22px";
            });
        });
        const minusshrink = marm.animate(
            [
                {
                    width: "50px"
                },
                {
                    width: "0px"
                }
            ],
            {
                duration: 400,
                easing: "ease-out"
            }
        );
        minusshrink.addEventListener('finish', function (event) {
            marm.style.width = "0px";
        });
    }

}

function plusFun() {
    for (let i = 5; i >= 0; i -= 1) {
        if (x == 3000) {
            break;
        }
        if (window.getComputedStyle(waters[i]).backgroundColor === nocolor) {
            plus.style.pointerEvents = "none";
            function updateXplus() {
                x += 10;
                y += 10;
                txt.textContent = x + "ML";
                localsave();
                if (y == 500) { window.clearInterval(xPlusInterval); }
            }
            updateXplus();
            let xPlusInterval = setInterval(updateXplus, 1);

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
                Completion();
            });

            wplus.addEventListener('cancel', function (event) {
                waters[i].style.height = "50px";
                waters[i].style.backgroundColor = curcolor;
                plus.style.pointerEvents = "all";
                Completion();
            });
            mesplus();
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
            function updateXminus() {
                x -= 10;
                y -= 10;
                txt.textContent = x + "ML";
                localsave();
                if (y == 0) { window.clearInterval(xMinusInterval); }
            }
            updateXminus();
            let xMinusInterval = setInterval(updateXminus, 1);
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

function menuGo() {
    menu.style.visibility = "visible";
    menupic.style.pointerEvents = "none";
    mlines.forEach(item => {
        const mlinego = item.animate(
            [
                {
                    backgroundColor: "#f2f3f4"
                },
                {
                    backgroundColor: "#f2f3f400"
                }
            ],
            {
                duration: 200,
                easing: "linear"
            }
        )
        mlinego.addEventListener('finish', function (event) {
            item.style.backgroundColor = "#f2f3f400";
            item.style.visibility = "hidden";
        });
    });
    function customGo() {
        const customAnimGo = custom.animate(
            [
                {
                    top: customtop
                },
                {
                    top: customgotop
                },
            ],
            {
                duration: 200,
                easing: "ease-in",
            }
        );
        customAnimGo.addEventListener('finish', function (event) {
            custom.style.top = customgotop;
            bodybool = true;
        });
    }
    const aboutAnimGo = about.animate(
        [
            {
                top: abouttop
            },
            {
                top: aboutgotop
            },
        ],
        {
            duration: 200,
            easing: "ease-in",
        }
    );

    aboutAnimGo.addEventListener('finish', function (event) {
        customGo();
        about.style.top = aboutgotop;
        document.body.style.pointerEvents = "all";
    });
}
function menuBack() {
    if (menuBackbool == true) {
        menuBackbool = false;
        menupic.style.pointerEvents = "all";
        mlines.forEach(item => {
            item.style.visibility = "visible";
            const mlineback = item.animate(
                [
                    {
                        backgroundColor: "#f2f3f400"
                    },
                    {
                        backgroundColor: "#f2f3f4"
                    }
                ],
                {
                    duration: 200,
                    easing: "linear"
                }
            )
            mlineback.addEventListener('finish', function (event) {
                item.style.backgroundColor = "#f2f3f4";
            });
        });
        function customBack() {
            const customAnimBack = custom.animate(
                [
                    {
                        top: customgotop
                    },
                    {
                        top: customtop
                    },
                ],
                {
                    duration: 200,
                    easing: "ease-out",
                }
            );
            customAnimBack.addEventListener('finish', function (event) {
                custom.style.top = customtop;
                menu.style.visibility = "hidden";
                menuBackbool = true;
                bodybool = false;
            });
        }
        const aboutAnimBack = about.animate(
            [
                {
                    top: aboutgotop
                },
                {
                    top: abouttop
                },
            ],
            {
                duration: 200,
                easing: "ease-out",
            }
        );

        aboutAnimBack.addEventListener('finish', function (event) {
            customBack();
            about.style.top = abouttop;
        });
    }

}

function menupicOver() {
    const menupicOverGo = menupic.animate(
        [
            {
                borderColor: "#f2f3f400"
            },
            {
                borderColor: "#f2f3f4"
            },
        ],
        {
            duration: 300,
            easing: "linear",
        }
    );
    menupicOverGo.addEventListener('finish', function (event) {
        menupic.style.borderColor = "#f2f3f4";
    });
}
function menupicOut() {
    const menupicOutGo = menupic.animate(
        [
            {
                borderColor: "#f2f3f4"
            },
            {
                borderColor: "#f2f3f400"
            },
        ],
        {
            duration: 300,
            easing: "linear",
        }
    );
    menupicOutGo.addEventListener('finish', function (event) {
        menupic.style.borderColor = "#f2f3f400";
    });
}

function LinkRedirect() {
    window.open("https://github.com/mywaterland/mywaterland.github.io", "_blank");
}

function AboutPopupGetLoad() {
    AboutPopup.style.visibility = "visible";
    function AboutPopupLoad() {
        const AboutPopupLoadAnim = AboutPopup.animate(
            [
                {
                    height: "0vh",
                    marginTop: "25vh"
                },
                {
                    height: "50vh",
                    marginTop: "0vh"
                }
            ],
            {
                duration: 200,
                easing: "linear"
            }
        );
        AboutPopupLoadAnim.addEventListener('finish', function (event) {
            AboutPopup.style.height = "50vh";
            AboutPopup.style.marginTop = "0vh";
            aboutbool = true;
        });
    }
    const AboutPopupBorderAnim = AboutPopup.animate(
        [
            {
                borderWidth: "0px"
            },
            {
                borderWidth: "3px"
            }
        ],
        {
            duration: 100,
            easing: "linear"
        }
    );
    AboutPopupBorderAnim.addEventListener('finish', function (event) {
        AboutPopup.style.borderWidth = "3px";
        AboutPopupLoad();
    });
}
function AboutPopupGetClose() {
    aboutbool = false;
    function AboutPopupBorderClose() {
        const AboutPopupBorderAnim = AboutPopup.animate(
            [
                {
                    borderWidth: "3px"
                },
                {
                    borderWidth: "0px"
                }
            ],
            {
                duration: 100,
                easing: "linear"
            }
        );
        AboutPopupBorderAnim.addEventListener('finish', function (event) {
            AboutPopup.style.borderWidth = "0px";
            AboutPopup.style.visibility = "hidden";
        });
    }
    const AboutPopupCloseAnim = AboutPopup.animate(
        [
            {
                height: "50vh",
                marginTop: "0vh"
            },
            {
                height: "0vh",
                marginTop: "25vh"
            }
        ],
        {
            duration: 200,
            easing: "linear"
        }
    );
    AboutPopupCloseAnim.addEventListener('finish', function (event) {
        AboutPopup.style.height = "0vh";
        AboutPopup.style.marginTop = "25vh";
        AboutPopupBorderClose();
    });
}

var isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
if (isMobile) {
    AboutPopup.style.width = "70vw";
    AboutPopup.style.left = "15%";
    AboutApp.style.width = "60vw";
    AboutAuthor.style.width = "60vw";
    close.addEventListener('touchstart', popupclose);

    plus.addEventListener('touchstart', function (event) {
        y = 0;
        plusover();
        plusFun();
    });
    plus.addEventListener('touchend', plusout);
    minus.addEventListener('touchstart', function (event) {
        y = 500;
        minusover();
        minusFun();
    });
    minus.addEventListener('touchend', minusout);
    menupic.addEventListener('touchstart', function (event) {
        menupicOver();
        menuGo();
    });;
    menupic.addEventListener('touchend', menupicOut);
    about.addEventListener('touchstart', function (event) {
        bodybool = false;
        AboutPopupGetLoad();
        menuBack();
    });
    about.addEventListener('touchend', function (event) {
        bodybool = true;
    });
    custom.addEventListener('touchstart', function (event) {
        bodybool = false;
        popupopen();
    });
    custom.addEventListener('touchend', function (event) {
        bodybool = true;
    });
    AboutPopup.addEventListener('touchstart', function (event) {
        aboutbool = false;
    });
    AboutPopup.addEventListener('touchend', function (event) {
        aboutbool = true;
    });
    body.addEventListener('touchstart', function (event) {
        if (bodybool == true) {
            menuBack();
        }
        if (aboutbool == true) {
            AboutPopupGetClose();
        }
    });
    breset.addEventListener('touchstart', function (event) {
        resetover();
        ResetGo();
    });
    breset.addEventListener('touchend', resetout);
    link.addEventListener('touchstart', LinkRedirect);
} else {
    AboutPopup.style.width = "18vw";
    AboutPopup.style.left = "41%";
    AboutApp.style.width = "14vw";
    AboutAuthor.style.width = "14vw";
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
        y = 0;
        plusFun();
    });

    minus.addEventListener('mousedown', function (event) {
        y = 500;
        minusFun();
    });

    menupic.addEventListener('mouseover', menupicOver);
    menupic.addEventListener('mouseout', menupicOut);
    menupic.addEventListener('mousedown', menuGo);
    about.addEventListener('mousedown', function (event) {
        bodybool = false;
        AboutPopupGetLoad();
        menuBack();
    });
    about.addEventListener('mouseout', function (event) {
        bodybool = true;
    });
    custom.addEventListener('mousedown', function (event) {
        bodybool = false;
        popupopen();
    });
    custom.addEventListener('mouseout', function (event) {
        bodybool = true;
    });
    AboutPopup.addEventListener('mousedown', function (event) {
        aboutbool = false;
    });
    AboutPopup.addEventListener('mouseout', function (event) {
        aboutbool = true;
    });
    body.addEventListener('mousedown', function (event) {
        if (bodybool == true) {
            menuBack();
        }
        if (aboutbool == true) {
            AboutPopupGetClose();
        }
    });
    breset.addEventListener('mouseover', resetover);
    breset.addEventListener('mouseout', resetout);
    breset.addEventListener('mousedown', ResetGo);
    link.addEventListener('mousedown', LinkRedirect);
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
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();

    const lastResetTime = localStorage.getItem('lastResetTime');

    const nowx = new Date();
    const midnight = new Date(nowx.getFullYear(), nowx.getMonth(), nowx.getDate(), 0, 0, 0);
    if (nowx > midnight && (!lastResetTime || new Date(lastResetTime) < midnight)) {
        reset();
    }
    localStorage.setItem('lastResetTime', nowx);
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;


    clock.textContent = hours + ':' + minutes;
}

updateClock();

setInterval(updateClock, 1000);

