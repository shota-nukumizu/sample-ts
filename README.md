# ð Welcome to your new awesome project!

ä»¥ä¸ã®ã³ãã³ãã§éçºèãµã¼ããå®è¡ã§ããããã«ãªãã

```
npm run build
```

# TypeScriptãã¡ã¤ã«ã®å®è¡æ¹æ³

ã«ã¼ããã£ã¬ã¯ããªã§

```
npx ts-node src/func.ts
```

ãã®ããã«å¥åãã¦å®è¡ããã°ãJavaScriptãã¡ã¤ã«ã«å¤æããã«ãã­ã°ã©ã ãå®è¡ã§ããã

# ä½æãããã­ã°ã©ã 

â¼ãªãã¸ã§ã¯ããç°¡åã«ä½æ

```typescript
// ãªãã¸ã§ã¯ãã®ä½æã¨ãã®å¿ç¨
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

â¼ã¯ã©ã¹ã®ãªãã¸ã§ã¯ããç°¡åã«ä½æããã(åèï¼ãã¡ã¤ã¢ã¼ã¨ã ãã¬ã )

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

â¼Vueã®ç¶æç®¡çã§å¿è¦ãªstoreãå®è£ãã¦ã¿ãã

```typescript
import { createStore, Store, useStore as baseUseStore } from 'vuex'

// typescriptã§Vuexã®stateãè¨è¿°ããéã«ã¯ãäºãStateã®åãæ±ºãã¦ããå¿è¦ãããã
type State = {}

export const store = createStore<State>({})
```

â»ä½è«<br>
Vuex ã¯ Vueã®ç¶æç®¡çã©ã¤ãã©ãªã**ããã¯`store.ts`ã«ãã£ã¦äºæ¸¬å¯è½ãªæ¹æ³ã«ãã£ã¦ã®ã¿ç¶æã®å¤ç°ãè¡ãã¨ããã«ã¼ã«ãä¿è¨¼ããã¢ããªåã®å¨ã¦ã®ã³ã³ãã¼ãã³ããããã«åæããããã«æ©è½ããã**

â¼Vueã®ã·ã³ãã«ãã¼ã¸ãä½æããã¨ãã«å¿è¦ãªæä½éã®ã³ã¼ã

```ts
import { Component, Vue } from "vue-property-decorator";
import TestComponent from "~/components/TestComponent.vue";

// ãã³ã¬ã¼ã
@Component({
    components: {
        TestComponent
    },
})

// ã©ã®ã¯ã©ã¹ããç¶æ¿ããã®ãããã¡ãã¨æç¤ºãã¦ãã
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

â¼VueâTypeScriptã®ãã³ãã¬ã¼ã(Vueãããã¯Nuxt)

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

â¼VuexâTypeScriptã®ç°¡åãªInterfaceã

```ts
export interface Article {
    id: number
    title: String
    created_at: String
    is_public: Boolean
}
```

â¼VuexâTypeScriptã®`store`å®è£ã

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

â¼Vuexã§APIã®éåæéä¿¡ãè¡ããã­ã°ã©ã (TypeScript)

```ts
import { Module, VuexModule, MutationAction } from 'vuex-module-decorators'
import { ConferencesEntity, EventsEntity } from '@/models/definitions'

@Module
export default class HGAPIModule extends VuexModule {
  conferences: Array<ConferencesEntity> = [] // <>ã¯Genericã§ãæ½è±¡çãªåå¼æ°ãä½¿ã£ã¦åãç¢ºå®ããªãã¯ã©ã¹ãé¢æ°ãã¤ã³ã¿ã¼ãã§ã¤ã¹ãå®ç¾ããããã«ä½¿ããã
  events: Array<EventsEntity> = []

  @MutationAction({ mutate: ['events', 'conferences'] })
  async fetchAll() {
    const response: Response = await getJSON('https://hasgeek.github.io/events/api/events.json')
    return response
  }
}
```

â¼VueâTypeScriptã§ã®å¥åç»é¢ãã©ã¼ã 

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

â¼ç°¡åãªTypeScriptã®interfaceãä½¿ã£ããã­ã°ã©ã 

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

# ã¢ã¯ã»ã¹ä¿®é£¾å­(TypeScript)

ã¯ã©ã¹ãå©ç¨ããããã«ãªãã¨ãã¯ã©ã¹åã«ç¨æãããã­ããã£ã®ãã¹ã¦ãèªç±ã«èª­ã¿æ¸ãã§ããããã«ãªã£ã¦ãã¾ããä½ããã®å¶éããããéã«å¿è¦ãªã®ããä»¥ä¸ã®ã¢ã¯ã»ã¹ä¿®é£¾å­ã§ããã

|   |   |
| :-- | :-- |
|`public` | å¤é¨ããèªç±ã«ã¢ã¯ã»ã¹ã§ãããããã©ã«ãã®è¨­å® |
| `protected` | ã¯ã©ã¹ããã³ãã®ã¯ã©ã¹ãç¶æ¿ãããµãã¯ã©ã¹ããã¯ä½¿ããªãããç¶æ¿é¢ä¿ã®ãªããã®ä»ã®ã¯ã©ã¹ããã¯ã¢ã¯ã»ã¹ã§ããªããªãã |
| `private` | ã¯ã©ã¹åã§ã¢ã¯ã»ã¹ã§ãããã¯ã©ã¹å¤ããã®ã¢ã¯ã»ã¹ããã¹ã¦æå¦ããã 