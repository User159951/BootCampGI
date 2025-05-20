// Exercise 2 :

gradesList = [60, 50, 24, 80, 90, 100, 70, 85, 95, 75];

findAVG = (gradesList) => {
    let avg = 0;
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
        sum += gradesList[i];
    }
    avg = sum / gradesList.length;

    console.log(`The average of the grades is ${avg}`);

    if (avg > 65) {
        console.log("The student passed the exam");
    } else {
        console.log("The student failed the exam");
    }
}

findAVG(gradesList);


findAVG = (gradesList) => {
    let avg = 0;
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
        sum += gradesList[i];
    }
    avg = sum / gradesList.length;
    return avg;
}

passOrFail = (avg) => {
    if (avg > 65) {
        console.log("The student passed the exam");
    } else {
        console.log("The student failed the exam");
    }
}

console.log(`The average of the grades is ${findAVG(gradesList)}`);
passOrFail(findAVG(gradesList));