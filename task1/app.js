/*1. Car adinda constructor function yaradın, marka,model,year,engine deyə key-ləri olsun.
Bu constructor vasitəsi ilə 3 fərqli obyekt yaradın
 */


class Car{
    constructor(marka,model,year,engine){
        this.marka = marka
        this.model = model
        this.year = year
        this.engine = engine
    }
}
const car1 = new Car("Toyota","Corolla",2021,"1.8L 4-cylinder")
const car2 = new Car("Honda","Civic",2020,"2.0L 4-cylinder")
const car3 = new Car("Ford","Mustang",2022,"5.0L V8")
console.log(car1);
console.log(car2);
console.log(car3);

