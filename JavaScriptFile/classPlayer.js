class Player {
    constructor(img,name, age, position, country, transferPrice) {
        this.img = img;
        this.name = name;
        this.age = age;
        this.position = position;
        this.country = country;
        this.transferPrice = transferPrice;
    }

    getImg() {
        return this.img;
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

    setImg(img) {
        this.img = img;
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

    edit(img, name, age, position, country, transferPrice) {
        this.img = img;
        this.name = name;
        this.age = age;
        this.position = position;
        this.country = country;
        this.transferPrice = transferPrice;
    }
    getHtmlPlayer(){
        let html =`<td><img src="${this.img}" alt=""></td>
                   <td>${this.name}</td>
                   <td>${this.age}</td>
                   <td>${this.position}</td>
                   <td>${this.country}</td>
                   <td>${this.transferPrice}</td>`;
        return html;
    }

}