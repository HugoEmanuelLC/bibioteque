# OBJET

###  acceder au propriete/protoypes et methodes d'un objet 

```js
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
```

### criar e encher novo objet :

```js
//criar e encher novo objet :
const newTab = {}
newTab.budget = '53.000.000';
newTab.test = 50000;
newTab.newObj = {test1: "test1", test2: "test2"}
newTab.testFunc = function() {console.log(this.budget);};
console.log(newTab)
console.log(newTab.newObj.test2);
newTab.testFunc()
```