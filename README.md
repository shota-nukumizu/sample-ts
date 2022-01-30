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