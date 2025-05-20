// Exercise 1 :

let object1 = {
    FullName: 'Name 1',
    Mass : 50,
    Height : 160,
    BMI : function() {
        return this.Mass / (this.Height * this.Height);
    }
}

let object2 = {
    FullName: 'Name 2',
    Mass : 70,
    Height : 180,
    BMI : function() {
        return this.Mass / (this.Height * this.Height);
    }
}

function compareBMI(object1, object2) {
    return object1.BMI() > object2.BMI() ? `${object1.FullName} has a higher BMI than \
    ${object2.FullName}` : `${object2.FullName} has a higher BMI than ${object1.FullName}`;
}


console.log(compareBMI(object1, object2));