import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    data: () => {
        return { inputText: '' }
    },
    methods: {
        reset() {
            this.inputText = ''
        }
    },
    computed: {
        count() {
            return this.inputText.length
        }
    }
});