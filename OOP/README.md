```js
function Car(make, model, year) {//constructor
  this.make = make;
  this.model = model;
  this.year = year;
}
//===============the same==================
class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
var honda = new Car('Honda', 'Accord', 1998);

console.log(honda instanceof Car);//true
console.log(honda instanceof Object);//true
```

### Summary:
Honda is an instance of Car(class). Car is a prototype(real world). Honda is an object(real world).