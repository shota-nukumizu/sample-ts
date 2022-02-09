import { Module, VuexModule, MutationAction } from 'vuex-module-decorators'
import { ConferencesEntity, EventsEntity } from '@/models/definitions'

@Module
export default class HGAPIModule extends VuexModule {
    conferences: Array<ConferencesEntity> = [] 
    events: Array<EventsEntity> = []

    @MutationAction({ mutate: ['events', 'conferences'] })
    async fetchAll() {
        const response: Response = await getJSON('https://hasgeek.github.io/events/api/events.json')
        return response
    }
}