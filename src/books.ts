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