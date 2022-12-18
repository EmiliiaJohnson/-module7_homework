// Родительский класс
class ElectricDevices {
    constructor(name, power) {
        this.name = name,
            this.power = power,
            this.plugIn = false
    }

    // Метод включения
    isOn() {
        console.log(this.name + ' is plugged in and uses ' + this.power + ' energy');
        this.plugIn = true;
    }

    // Метод выключения
    isOff() {
        console.log(this.name + ` is unplugged and doesn't use energy`);
        this.plugIn = false;
    }

    // Получение всей потребляемой энергии
    getPower() {
        return this.plugIn ? this.power : 0;
    }
}

// Прибор Макбук (класс-потомок)
class Macbook extends ElectricDevices  {
    constructor(name, price, color, power) {
        super(name, power);
        this.price = price;
        this.color = color;
    }
}

// Прибор Чайник (класс-потомок)
class Kettle extends ElectricDevices  {
    constructor(name,  price, weight, power) {
        super(name, power);
        this.price = price;
        this.weight = weight;
    }
}

// Прибор зарядное устройство (класс-потомок)
class Charger extends ElectricDevices  {
    constructor(name, type, power) {
        super(name, power);
        this.type = type;
    }
}

// Создание экземпляров приборов
const macbook = new Macbook('Macbook', 100000, 'silver', 200);
const kettle = new Kettle('Kettle', 3000, 400, 130);
const charger = new Charger('Charger', 'Type-C', 100);

// Подключение/отключение приборов
macbook.isOn();
kettle.isOff();
charger.isOn();

// Вывод всей потребляемой энергии
console.log('All used energy - ' + (kettle.getPower() + macbook.getPower() + charger.getPower()));

console.log(macbook);
console.log(kettle);
console.log(charger);

