# 🚀 Welcome to your new awesome project!

以下のコマンドで開発者サーバを実行できるようになる。

```
npm run build
```

# TypeScriptファイルの実行方法

ルートディレクトリで

```
npx ts-node src/func.ts
```

このように入力して実行すれば、JavaScriptファイルに変換せずにプログラムを実行できる。

# 作成したプログラム

▼オブジェクトを簡単に作成

```typescript
// オブジェクトの作成とその応用
type person = { 
    readonly name: string,
    mail?: string,
    age?: number,
    print: () => void
}

const ob1:person = {
    name: 'Aren',
    age: 21,
    print:function(): void {
        console.log(`${this.name}:${this.age}`)
    }
}

const ob2:person = {
    name: 'Bertz',
    mail: 'bertz2323@mail.com',
    print:function(): void {
        console.log(`${this.name}: ${this.mail}`)
    }
}

ob1.print()
ob2.print()
```

▼クラスのオブジェクトを簡単に作成する。(参考：ファイアーエムブレム)

```typescript
class Unit {
    name: string
    hp: number
    level: number
    job: string

    constructor(name:string, hp:number, level:number, job:string = 'People') {
        this.name = name
        this.hp = hp
        this.level = level
        this.job = job
    }

    print():void {
        console.log(`Name: ${this.name}, HP: ${this.hp}, LV: ${this.level}, JOB: ${this.job}`)
    }
}

const Marth = new Unit('Marth', 20, 1, 'Lord')
const Jeigun = new Unit('Jeigun', 24, 1, 'Paradin')
const Aren = new Unit('Aren', 28, 1, 'Soceror')

Marth.print()
Jeigun.print()
Aren.print()
```