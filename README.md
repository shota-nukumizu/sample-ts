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

▼Vuex✕TypeScriptの簡単なInterface。

```ts
export interface Article {
    id: number
    title: String
    created_at: String
    is_public: Boolean
}
```

▼Vuex✕TypeScriptの`store`実装。

```ts
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { Book } from './Books/Interface';
import { ConvertToHttps } from './Books/utility'


@Module({ stateFactory: true, namespaced: true, name: 'books' })
export default class Books extends VuexModule {
    private books: Book[] = [];

    public get Books(): Book[] {
        return this.books;
    }

    @Mutation
    private SET_BOOKS(books: Book[]) {
        this.books = books;
    }

    @Action({})
    public async setBooks(books: Book[]): Promise<void> {
        this.SET_BOOKS(books);
    }

}
```

▼VuexでAPIの非同期通信を行うプログラム(TypeScript)

```ts
import { Module, VuexModule, MutationAction } from 'vuex-module-decorators'
import { ConferencesEntity, EventsEntity } from '@/models/definitions'

@Module
export default class HGAPIModule extends VuexModule {
  conferences: Array<ConferencesEntity> = [] // <>はGenericで、抽象的な型引数を使って型が確定しないクラスや関数、インターフェイスを実現するために使われる
  events: Array<EventsEntity> = []

  @MutationAction({ mutate: ['events', 'conferences'] })
  async fetchAll() {
    const response: Response = await getJSON('https://hasgeek.github.io/events/api/events.json')
    return response
  }
}
```

▼Vue✕TypeScriptでの入力画面フォーム

```vue
<template>
  <div id="app">
    <h1>My TS App</h1>
    <p><input type="text" v-model="inputText" /></p>
    <p>Count: {{ count }}</p>
    <p><button @click="reset()">Reset</button></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data: () => {
    return { inputText: '' }
  },
  methods: {
    reset(){
      this.inputText = ''
    }
  },
  computed: {
    count() {
      return this.inputText.length
    }
  }
});
</script>
```

▼簡単なTypeScriptのinterfaceを使ったプログラム

```ts
interface FullName {
  first: string;
  last: string;
}

interface Callback {
  (result: number): void
}

let myName: FullName = { first: "Andy", last: "Li" }

const outputToConsole: Callback = function(result) {
  console.log("Output: " + result)
}

function getNameLength(name: FullName, callback: Callback): void {
  const len = name.first.length + name.last.length
  callback(len)
}

getNameLength(myName, outputToConsole)
```

# アクセス修飾子(TypeScript)

クラスを利用するようになると、クラス内に用意したプロパティのすべてが自由に読み書きできるようになってしまう。何らかの制限をかける際に必要なのが、以下のアクセス修飾子である。

|   |   |
| :-- | :-- |
|`public` | 外部から自由にアクセスできる。デフォルトの設定 |
| `protected` | クラスおよびそのクラスを継承したサブクラスからは使えないが、継承関係のないその他のクラスからはアクセスできなくなる。 |
| `private` | クラス内でアクセスできる。クラス外からのアクセスをすべて拒否する。 