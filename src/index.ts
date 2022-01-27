// オブジェクト作成
const person = {
    name: 'shota',
    age: 21,
    print: function():void {
        console.log(`${this.name} Age: ${this.age}`)
    }
}

person.print()