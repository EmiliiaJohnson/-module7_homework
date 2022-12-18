// Родительская функция
function ElectricDevices(name, power) {
        this.name = name,
        this.power = power,
        this.plugIn = false
}

// Метод включения
ElectricDevices.prototype.isOn = function() {
    console.log(this.name + ' is plugged in and uses ' + this.power + ' energy');
    this.plugIn = true;
};

// Метод выключения
ElectricDevices.prototype.isOff = function() {
    console.log(this.name + ` is unplugged and doesn't use energy`);
    this.plugIn = false;
};

// Прибор Макбук
function Macbook(name, price, color, power) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.power = power;
}
Macbook.prototype = new ElectricDevices();

// Прибор чайник
function Kettle(name, price, weight, power) {
    this.name = name;
    this.price = price;
    this.weight = weight;
    this.power = power;
}
Kettle.prototype = new ElectricDevices();

// Прибор зарядное устройство
function Charger(name, type, power) {
    this.name = name;
    this.type = type;
    this.power = power;
}
Charger.prototype = new ElectricDevices();

// Функция получения всей потребляемой энергии
ElectricDevices.prototype.getPower = function() {
    return this.plugIn ? this.power : 0;
}

// Создание экземпляров приборов
const macbook = new Macbook('Macbook', 100000, 'silver', 200);
const kettle = new Kettle('Kettle', 3000, 400, 130);
const charger = new Charger('Charger', 'Type-C', 100);

// Подключение/отключение приборов
macbook.isOff();
kettle.isOn();
charger.isOn();

// Вывод всей потребляемой энергии
console.log('All used energy - ' + (kettle.getPower() + macbook.getPower() + charger.getPower()));

console.log(macbook);
console.log(kettle);
console.log(charger);

