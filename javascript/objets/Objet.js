
//acceder au propriete/protoypes et methodes d'un objet 
const Iam = {
    firstN: "hugo",
    lastN: "clavinas",
    age: "37",
    contact: ["facebook", "twitter", "instagram"],
    MyNcomplete: function() {
        console.log(`I am ${this.firstN} ${this.lastN}`);
    },
    works: {
        electricien: "10",
        webDev: "1"
    }
}
Iam.MyNcomplete()
console.log(Iam.contact[0])
console.log(Iam.works.webDev + " year")
console.log(`I am ${Iam.age} years old`)




//criar e encher novo objet :
const newTab = {}
newTab.budget = '53.000.000';
newTab.test = 50000;
newTab.newObj = {test1: "test1", test2: "test2"}
newTab.testFunc = function() {console.log(this.budget);};
console.log(newTab)
console.log(newTab.newObj.test2);
newTab.testFunc()




//prendre des model objets
const car = {
    dors: 5,
    motor: "v6",
    chasis: "middle"
}
const carColor = {
    color: "red",
    tyle: 'mate'
}
const tesla = Object.create(car);
tesla.color = Object.create(carColor);
console.log("-------------------");
tesla.dors = 7;
console.log(tesla.motor);
console.log(tesla.color.color);
console.log(tesla.color.tyle);
console.log(Object.keys(tesla));