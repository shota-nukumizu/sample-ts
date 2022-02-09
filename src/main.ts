import { Component, Vue } from "vue-property-decorator";
import TestComponent from "~/components/TestComponent.vue";

@Component({
    components: {
        TestComponent
    },
})
export default class IndexPage extends Vue {
    name = {
        firstName: 'Shota',
        lastName: 'Nukumizu'
    }
    get testUser() {
        return this.name
    }
}