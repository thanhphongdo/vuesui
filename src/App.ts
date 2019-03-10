import { Component, Vue } from 'vue-property-decorator';
import template from '@/App.vue';
import { mapActions, mapGetters } from 'vuex';
import Accordion from '@/components/accordion/accordion.ts';
import Checkbox from '@/components/checkbox/checkbox.ts';
@Component({
    mixins: [template],
    components: {
        Accordion,
        Checkbox
    },
    data() {
        return {
            checks: [
                {
                    checked: false,
                    value: '1'
                },
                {
                    checked: false,
                    value: '2'
                },
                {
                    checked: false,
                    value: '3'
                }
            ]
        };
    },
    mounted() {
        console.log('XXXxx');
        (window as any).acordion = this.$refs.acordion;
    },
    methods: {},
    computed: {},
    destroyed() {
        console.log('destroyed home');
    }
})
export default class App extends Vue {
    onOpen(data: any) {
        console.log(data);
    }
}
