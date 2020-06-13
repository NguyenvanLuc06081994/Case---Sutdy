class Player {
    constructor(name, age, position, country, transferPrice) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.country = country;
        this.transferPrice = transferPrice;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getPosition() {
        return this.position;
    }

    getCountry() {
        return this.country;
    }

    getTransferPrice() {
        return this.transferPrice;
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    setPosition(position) {
        this.position = position;
    }

    setCountry(country) {
        this.name = country;
    }

    setTransferPrice(transferPrice) {
        this.transferPrice = transferPrice;
    }
    edit(name,age,position,country,transferPrice){
        this.name = name;
        this.age = age;
        this.position = position;
        this.country = country;
        this.transferPrice = transferPrice;
    }
}