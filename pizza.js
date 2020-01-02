let smallpizza = 0;
let mediumpizza = 1;
let largepizza = 0;
let adult = 1;
let child = 0;
let totalamount = 200;
function smallpizzaDecrement() {
    if (smallpizza > 0 && totalamount >= 350) {
        smallpizza = smallpizza - 1;
        totalamount = totalamount - 150;
        document.querySelector(".total").innerHTML = totalamount;
        document.querySelector("#smallvalue").innerHTML = smallpizza;
        child = child - 1;
        document.querySelector("#childvalue").innerHTML = child;
        colorDecrement();
        if (totalamount >= 600 && smallpizza == 0 && mediumpizza == 0) {
            document.querySelector("#small-minus").innerHTML = "#898fe7";
            document.querySelector("#medium-minus").innerHTML = "#898fe7";
        }
        if (totalamount >= 800 && smallpizza == 0) {
            document.querySelector("#small-minus").style.color = "#898fe7";
        }
        if (totalamount >= 500 && smallpizza == 0) {
            document.querySelector("#small-minus").style.color = "#898fe7";
        }
    }
}
function smallpizzaIncrement() {
    if (totalamount <= 850) {
        smallpizza = smallpizza + 1;
        totalamount = totalamount + 150;
        document.querySelector(".total").innerHTML = totalamount;
        if (smallpizza >= 2) {
            smallpizza = smallpizza - 2;
            mediumpizza = mediumpizza + 1;
            totalamount = totalamount - 100;
            document.querySelector(".total").innerHTML = totalamount;
            if (mediumpizza >= 2) {
                mediumpizza = mediumpizza - 2;
                largepizza = largepizza + 1;
                totalamount = totalamount - 100;
                document.querySelector(".total").innerHTML = totalamount;
            }
            document.querySelector("#mediumvalue").innerHTML = mediumpizza;
        }
        child = child + 1;
        document.querySelector("#childvalue").innerHTML = child;
        document.querySelector("#smallvalue").innerHTML = smallpizza;
        document.querySelector("#largevalue").innerHTML = largepizza;
        colorIncrement();
        adult350();
        if (smallpizza == 0) {
            document.querySelector("#small-minus").style.color = "#898fe7";
        }
        if (totalamount >= 450 && mediumpizza == 0) {
            document.querySelector("#medium-minus").style.color = "#898fe7";
            document.querySelector("#large-minus").style.color = "#898fe7";
            document.querySelector("#adult-minus").style.color = "#898fe7";

        }
        if (totalamount >= 500 && adult == 1) {
            document.querySelector("#adult-minus").style.color = "#898fe7";
        }
        if (totalamount >= 600 && large == 2) {
            document.querySelector("#large-minus").style.color = "blue";
        }
    }


}
function mediumpizzaDecrement() {
    if (totalamount >= 400 && mediumpizza > 0) {
        mediumpizza = mediumpizza - 1;
        document.querySelector("#mediumvalue").innerHTML = mediumpizza;
        totalamount = totalamount - 200;
        document.querySelector(".total").innerHTML = totalamount;
        if (adult >= 1) {
            adult = adult - 1;
        }
        else {
            child = child - 2;
        }
        document.querySelector("#adultvalue").innerHTML = adult;
        document.querySelector("#childvalue").innerHTML = child;
        colorDecrement();
        if (totalamount >= 300 && mediumpizza == 0 && largepizza == 1) {
            document.querySelector("#medium-minus").style.color = "#898fe7";
            document.querySelector("#large-minus").style.color = "#898fe7";
        }
        if (totalamount >= 600 && smallpizza == 0 && mediumpizza == 0) {
            document.querySelector("#small-minus").innerHTML = "#898fe7";
            document.querySelector("#medium-minus").innerHTML = "#898fe7";
        }
        if (totalamount >= 750 && mediumpizza == 0 && adult == 0) {
            document.querySelector("#medium-minus").style.color = "#898fe7";
            document.querySelector("#adult-minus").style.color = "#898fe7";
        }
    }
}
function mediumpizzaIncrement() {
    if (totalamount <= 800) {
        totalamount = totalamount + 200;
        document.querySelector(".total").innerHTML = totalamount;
        mediumpizza = mediumpizza + 1;
        if (mediumpizza >= 2) {
            mediumpizza = mediumpizza - 2;
            largepizza = largepizza + 1;
            totalamount = totalamount - 100;
            document.querySelector(".total").innerHTML = totalamount;
            document.querySelector("#largevalue").innerHTML = largepizza;
        }
        document.querySelector("#mediumvalue").innerHTML = mediumpizza;
        adult = adult + 1;
        document.querySelector("#adultvalue").innerHTML = adult;
        colorIncrement();
        if (totalamount >= 900 && smallpizza == 0 && mediumpizza == 0 && child == 0) {
            document.querySelector("#small-minus").style.color = "#898fe7";
            document.querySelector("#medium-minus").style.color = "#898fe7";
            document.querySelector("#child-minus").style.color = "#898fe7";
        }
        if (totalamount >= 300 && smallpizza == 0 && mediumpizza == 0 && largepizza == 1 && child == 0) {
            document.querySelector("#medium-minus").style.color = "#898fe7";
            document.querySelector("#large-minus").style.color = "#898fe7";
            document.querySelector("#child-minus").style.color = "#898fe7";
            document.querySelector("#small-minus").style.color = "#898fe7";

        }
        if (totalamount >= 500 && smallpizza == 0 && child == 0) {
            document.querySelector("#child-minus").style.color = "#898fe7";
            document.querySelector("#small-minus").style.color = "#898fe7";
        }
        if (totalamount >= 600 && mediumpizza == 0) {
            document.querySelector("#medium-minus").style.color = "#898fe7"
        }
    }

}
function largepizzaDecrement() {
    if (largepizza > 0 && totalamount >= 500) {
        largepizza = largepizza - 1;
        totalamount = totalamount - 300;
        document.querySelector(".total").innerHTML = totalamount;

        if (adult == 2) {
            adult = adult - 1;
            child = child - 2;

        }
        else if (adult >= 3) {
            adult = adult - 2;
        }
        else {
            child = child - 4;
        }
        document.querySelector("#largevalue").innerHTML = largepizza;
        document.querySelector("#adultvalue").innerHTML = adult;
        document.querySelector("#childvalue").innerHTML = child;
        colorDecrement();
    }

}
function largepizzaIncrement() {
    if (totalamount <= 700) {
        totalamount = totalamount + 300;
        document.querySelector(".total").innerHTML = totalamount;
        largepizza = largepizza + 1;
        document.querySelector("#largevalue").innerHTML = largepizza;
        adult = adult + 2;
        document.querySelector("#adultvalue").innerHTML = adult;
        colorIncrement();

        if (totalamount >= 500 && smallpizza == 0 & child == 0) {
            document.querySelector("#child-minus").style.color = "#898fe7";
            document.querySelector("#small-minus").style.color = "#898fe7";
        }
        if (totalamount >= 900 && mediumpizza == 0) {
            document.querySelector("#medium-minus").style.color = "#898fe7";
        }


    }
}
function adultDecrement() {
    if (adult > 1) {
        adult = adult - 1;
        if (mediumpizza >= 1 && totalamount >= 400) {
            mediumpizza = mediumpizza - 1;
            totalamount = totalamount - 200;
            document.querySelector(".total").innerHTML = totalamount;
        }
        else {
            largepizza = largepizza - 1;
            mediumpizza = mediumpizza + 1;
            totalamount = totalamount - 100;
            document.querySelector(".total").innerHTML = totalamount;
            document.querySelector("#largevalue").innerHTML = largepizza;

        }
        document.querySelector("#adultvalue").innerHTML = adult;
        document.querySelector("#mediumvalue").innerHTML = mediumpizza;
        colorDecrement();
        if (totalamount >= 300 && smallpizza == 0) {
            document.querySelector("#medium-minus").style.color = "#898fe7";
        }
        if (totalamount >= 600 && smallpizza == 0) {
            document.querySelector("#medium-minus").style.color = "#898fe7";
        }
        if (totalamount >= 500 && smallpizza == 0) {
            document.querySelector("#medium-minus").style.color = "blue";
        }
        if (totalamount >= 800 && smallpizza == 0) {
            document.querySelector("#large-plus").style.color = "#ea9494";
            document.querySelector("#medium-minus").style.color = "blue";
        }

    }
}
function adultIncrement() {
    if (totalamount <= 800) {
        adult = adult + 1;
        mediumpizza = mediumpizza + 1;
        totalamount = totalamount + 200;
        document.querySelector(".total").innerHTML = totalamount;
        if (mediumpizza >= 2) {
            mediumpizza = mediumpizza - 2;
            largepizza = largepizza + 1;
            totalamount = totalamount - 100;
            document.querySelector(".total").innerHTML = totalamount;
            document.querySelector("#largevalue").innerHTML = largepizza;
        }
        document.querySelector("#adultvalue").innerHTML = adult;
        document.querySelector("#mediumvalue").innerHTML = mediumpizza;
        colorIncrement();
        if (totalamount >= 300 && smallpizza == 0 && mediumpizza == 0 && largepizza == 1 && child == 0) {
            document.querySelector("#medium-minus").style.color = "#898fe7";
            document.querySelector("#large-minus").style.color = "#898fe7";
            document.querySelector("#child-minus").style.color = "#898fe7";
        }
        if (totalamount >= 500 && smallpizza == 0 && child == 0) {
            document.querySelector("#small-minus").style.color = "#898fe7";
            document.querySelector("#child-minus").style.color = "#898fe7";
        }
        if (totalamount >= 600 && mediumpizza == 0) {
            document.querySelector("#medium-minus").style.color = "#898fe7"
        }
        if (totalamount >= 300 && mediumpizza == 0 && smallpizza == 0 && child == 0) {

            document.querySelector("#small-minus").style.color = "#898fe7";
        }


    }

}
function childDecrement() {
    if (child > 0) {
        child = child - 1;
        if (smallpizza >= 1) {
            smallpizza = smallpizza - 1;
            totalamount = totalamount - 150;
            document.querySelector(".total").innerHTML = totalamount;
        }
        else if (mediumpizza >= 1) {
            mediumpizza = mediumpizza - 1;
            smallpizza = smallpizza + 1;
            totalamount = totalamount - 50;
            document.querySelector(".total").innerHTML = totalamount;
        }
        else if (largepizza >= 1) {
            largepizza = largepizza - 1;
            mediumpizza = mediumpizza + 1;
            smallpizza = smallpizza + 1;
            totalamount = totalamount + 50;
            document.querySelector(".total").innerHTML = totalamount;
        }
        document.querySelector("#mediumvalue").innerHTML = mediumpizza;
        document.querySelector("#largevalue").innerHTML = largepizza;
        document.querySelector("#smallvalue").innerHTML = smallpizza;
        document.querySelector("#childvalue").innerHTML = child;
        colorDecrement();
        if (child == 0) {
            document.querySelector("#child-minus").style.color = "#898fe7"
        }
        if (totalamount >= 800 && largepizza == 2) {
            document.querySelector("#large-plus").style.color = "#ea9494";
            document.querySelector("#small-minus").style.color = "#898fe7";
        }
        if (totalamount >= 750 && mediumpizza == 0) {
            document.querySelector("#medium-minus").style.color = "#898fe7";
            document.querySelector("#large-plus").style.color = "#ea9494";
        }

    }
}
function childIncrement() {
    if (totalamount <= 850) {
        smallpizza = smallpizza + 1;
        child = child + 1;
        totalamount = totalamount + 150;
        document.querySelector(".total").innerHTML = totalamount;
        if (smallpizza >= 2) {
            mediumpizza = mediumpizza + 1;
            totalamount = totalamount - 100;
            document.querySelector(".total").innerHTML = totalamount;
            smallpizza = smallpizza - 2;
            if (mediumpizza >= 2) {
                largepizza = largepizza + 1;
                mediumpizza = mediumpizza - 2;
                totalamount = totalamount - 100;
                document.querySelector(".total").innerHTML = totalamount;
                document.querySelector("#largevalue").innerHTML = largepizza;
            }
            document.querySelector("#mediumvalue").innerHTML = mediumpizza;

        }
        document.querySelector("#childvalue").innerHTML = child;
        document.querySelector("#adultvalue").innerHTML = adult;
        document.querySelector("#smallvalue").innerHTML = smallpizza;

        colorIncrement();
        adult350();
        if (totalamount >= 450 && mediumpizza == 0 && adult == 1 && largepizza == 1) {
            document.querySelector("#medium-minus").style.color = "#898fe7";
            document.querySelector("#large-minus").style.color = "#898fe7";
            ocument.querySelector("#adult-minus").style.color = "#898fe7";
        }
        if (totalamount >= 300 && smallpizza == 0) {
            document.querySelector("#small-minus").style.color = "#898fe7";
        }
        if (totalamount >= 500 && adult == 1) {
            document.querySelector("#adult-minus").style.color = "#898fe7";
        }
        if (totalamount >= 600 && mediumpizza == 0) {
            document.querySelector("#medium-minus").style.color = "#898fe7";
        }
    }
}
function colorDecrement() {
    if (totalamount <= 200) {
        document.querySelector("#small-minus").style.color = "#898fe7";
        document.querySelector("#medium-minus").style.color = "#898fe7";
        document.querySelector("#large-minus").style.color = "#898fe7";
        document.querySelector("#adult-minus").style.color = "#898fe7";
        document.querySelector("#child-minus").style.color = "#898fe7";
    }
    if (totalamount < 900) {
        document.querySelector("#small-plus").style.color = "red";
        document.querySelector("#medium-plus").style.color = "red";
        document.querySelector("#large-plus").style.color = "red";
        document.querySelector("#adult-plus").style.color = "red";
        document.querySelector("#child-plus").style.color = "red";
    }
}

function colorIncrement() {

    if (totalamount >= 900) {
        document.querySelector("#small-plus").style.color = "#ea9494";
        document.querySelector("#medium-plus").style.color = "#ea9494";
        document.querySelector("#large-plus").style.color = "#ea9494";
        document.querySelector("#adult-plus").style.color = "#ea9494";
        document.querySelector("#child-plus").style.color = "#ea9494";

    }
    if (totalamount > 200) {
        document.querySelector("#small-minus").style.color = "blue";
        document.querySelector("#medium-minus").style.color = "blue";
        document.querySelector("#large-minus").style.color = "blue";
        document.querySelector("#adult-minus").style.color = "blue";
        document.querySelector("#child-minus").style.color = "blue";
    }
    if (totalamount >= 800) {
        document.querySelector("#large-plus").style.color = "#ea9494";
    }


}
function adult350() {
    if (totalamount <= 350) {
        document.querySelector("#adult-minus").style.color = "#898fe7";
        document.querySelector("#medium-minus").style.color = "#898fe7";
        document.querySelector("#large-minus").style.color = "#898fe7";
    }
}
