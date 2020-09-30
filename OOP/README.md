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
var nissan = new Car('Nissan', 'Altima', 2019);

console.log(honda instanceof Car);//true
console.log(honda instanceof Object);//true
```

### Summary:
Nissan is an instance of Car(class). Car is a prototype(real world). Nissan is an object(real world).