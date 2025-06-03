// Exercise 3 :

function changeEnough(itemPrice, amountOfChange) {
    let totaleChage = 0;
    for (let i=0; i < amountOfChange.length; i++) {
        switch (i) {
            case 0:
                totaleChage = amountOfChange[i] * 0.25;
                break;
            case 1:
                totaleChage = amountOfChange[i] * 0.10;
                break;
            case 2:
                totaleChage = amountOfChange[i] * 0.05;
                break;
            case 3:
                totaleChage = amountOfChange[i] * 0.01;
                break;
        }
    }

    return totaleChage >= itemPrice;
}

changeEnough(4.25, [25, 20, 5, 0])