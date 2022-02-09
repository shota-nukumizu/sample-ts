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

▼Vueの状態管理で必要なstoreを実装してみた。

```typescript
import { createStore, Store, useStore as baseUseStore } from 'vuex'

// typescriptでVuexのstateを記述する際には、予めStateの型を決めておく必要がある。
type State = {}

export const store = createStore<State>({})
```

※余談<br>
Vuex は Vueの状態管理ライブラリ。**これは`store.ts`によって予測可能な方法によってのみ状態の変異を行うというルールを保証し、アプリ内の全てのコンポーネントがそこに収束するように機能する。**

▼Vueのシンプルページを作成するときに必要な最低限のコード

```ts
import { Component, Vue } from "vue-property-decorator";
import TestComponent from "~/components/TestComponent.vue";

// デコレート
@Component({
    components: {
        TestComponent
    },
})

// どのクラスから継承するのかをきちんと明示しておく
export default class IndexPage extends Vue {
    name = {
        firstName: 'Shota',
        lastName: 'Nukumizu'
    }
    get testUser() {
        return this.name
    }
}
```

▼Vue✕TypeScriptのテンプレート(VueあるいはNuxt)

```vue
<template>
  <div class="main">
    <project />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Project from '@/components/Project.vue'
@Component({
  components: {
    project
  }
})
export default class HelloWorld extends Vue {
}
</script>
```

# アクセス修飾子(TypeScript)

クラスを利用するようになると、クラス内に用意したプロパティのすべてが自由に読み書きできるようになってしまう。何らかの制限をかける際に必要なのが、以下のアクセス修飾子である。

|   |   |
| :-- | :-- |
|`public` | 外部から自由にアクセスできる。デフォルトの設定 |
| `protected` | クラスおよびそのクラスを継承したサブクラスからは使えないが、継承関係のないその他のクラスからはアクセスできなくなる。 |
| `private` | クラス内でアクセスできる。クラス外からのアクセスをすべて拒否する。 |