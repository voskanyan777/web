/* Задание 1 
Продемонстрировать несколько способов создания объектов, несколько
способов доступа к их свойствам (на чтение и запись). 
*/
console.log("Задание 1");

const someObject_1 = {};
const someObject_2 = new Object();

someObject_1.name = 'Object_1';
someObject_1['Some_key'] = 'Key';

console.log(`Object name: ${someObject_1['name']} \nObject key: ${someObject_1.Some_key}`);

/* Задание 2
Создать конструктор для собственного объекта, добавить в него
несколько свойств и методов, продемонстрировать работу с этими
объектами
*/
console.log('Задание 2')
function CarModer(model_name, model_color, model_price, car_release_date){
    this.model_name = model_name;
    this.model_color = model_color;
    this.model_price = model_price;
    this.car_release_date = car_release_date;
    this.CarInfo = function(){
        return `Model name: ${this.model_name}\nModel color: ${this.model_color}\nModel price: ${this.model_price}\nCar release date: ${this.car_release_date}`
    }
    this.CarValution = function(){
        if (this.model_price > 3000){
            return 'This car is expensive'
        }
        return 'This car is cheap'
    }
}
?
const bmw = new CarModer('BMW M5 F90', 'Black', '99000', 2022)
console.log(bmw.CarInfo())
console.log(bmw.CarValution())

/*
Задание 3.Расширить встроенный тип (например, Array или Date) функцией,
оперирующей данными расширяемого объекта (например, вывод среднего
арифметического для массива, или подсчет количества секунд со дня вашего
рождения для даты).
*/
console.log('Задание 3')
Array.prototype.meanValue = function(){
    if (this.length == 0){
        return 0;
    }
    let sum = 0;
    for(let i = 0; i < this.length; i++){
        sum += this[i]
    }
    const result = sum / this.length;
    return result;
}
const array = [5, 5, 5]
console.log(array.meanValue())
