import { createStore, Store, useStore as baseUseStore } from 'vuex'

// typescriptでVuexのstateを記述する際には、予めStateの型を決めておく必要がある。
type State = {}

export const store = createStore<State>({})